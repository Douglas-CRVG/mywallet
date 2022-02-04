import { StyledButton, StyledForm } from "../../../style/form"
import Input from "./Input/Input"

export default function Form({inputs, button}){
    return(
        <StyledForm onSubmit={()=>{alert("oi")}}>
            {inputs.map((input, index)=> <Input key={index} {...input}/>)}
            <StyledButton>{button}</StyledButton>
        </StyledForm>
    )
}