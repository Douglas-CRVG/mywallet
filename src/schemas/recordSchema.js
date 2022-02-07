import * as yup from "yup";

const recordSchema = yup.object().shape({
    description: yup.string().min(1).required(),
    value: yup.number().min(0.001).required()
});

export default recordSchema;