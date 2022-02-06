import useBlock from "../../../hooks/useBlock";
import { StyledButton, StyledForm } from "../../../style/form"
import Input from "./Input/Input"

export default function Form({inputs, button, func, data, setData}){
    const {block} = useBlock();
    return(
        <StyledForm onSubmit={func}>
            {inputs.map((input, index)=> <Input key={index} {...input} data={data} setData={setData}/>)}
            <StyledButton block={block}>{button}</StyledButton>
        </StyledForm>
    )
}