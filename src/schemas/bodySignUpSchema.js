import * as yup from "yup";

const bodySignUpSchema = yup.object().shape({
    name: yup.string().min(1).required(),
    email: yup.string().min(1).email().required(),
    password: yup.string().min(1).required(),
    confirm: yup.string().min(1).required(),
});

export default bodySignUpSchema;