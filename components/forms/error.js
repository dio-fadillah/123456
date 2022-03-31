import { FormText } from "reactstrap"

const GetErrorMessage = (type) => {
    switch (type) {
        case 'minLength':
            return 'Jumlah karakter tidak memenuhi syarat minimum'
        case 'required':
        default:
            return 'Mohon mengisi field'
    }
}

const FormError = ({ error }) => {
    if (!error) {
        return <></>
    }

    const { type } = error
    const message = GetErrorMessage(type)
    
    return (
        <FormText>
            {message}
        </FormText>
    )
}

export default FormError