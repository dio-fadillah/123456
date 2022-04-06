import { prisma } from "../../../lib/_prisma";
import Cors from "cors";

// Initializing the cors middleware
const cors = Cors({
    methods: ["GET", "HEAD"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }

            return resolve(result);
        });
    });
}

export default async function handle(req, res) {
    await runMiddleware(req, res, cors);
    const user = await prisma.post.create({
        data: {
            content: req.body.content,
            author: {
                connectOrCreate: {
                    where: { name: req.body.author },
                    create: { name: req.body.author },
                },
            },
        },
    });
    res.json({ user: user });
}