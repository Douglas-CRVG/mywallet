import { StyledInput } from "../../../../style/form"

export default function Input({type, name}){
    return(
        <StyledInput type={type} placeholder={name} /*onChange={} value={}*/ />
    )
}