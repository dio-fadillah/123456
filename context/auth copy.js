import { createContext, useContext, useState } from "react";
import { SignOut, signInWithEmailAndPassword } from "../service/firebase";


const authContext = createContext();

export default function useAuth() {
	return useContext(authContext);
}

export function AuthProvider(props) {
	const [user, setUser] = useState(null);
	const [error, setError] = useState("");

	const loginWithGoogle = async () => {
		const { error, user } = await signInWithEmailAndPassword();
		setUser(user ?? null);
		setError(error ?? "");
	};

	const logout = async () => {
		await SignOut();
		setUser(null);
	};
	const value = { user, error, loginWithGoogle, logout, setUser };

	return <authContext.Provider value={value} {...props} />;
}