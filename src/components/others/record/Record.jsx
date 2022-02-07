import { StyledRecord } from "../../../style/record";

export default function Record ({description, value, date, isPlus}) {
    let src = "";
    for(let i = 0; i<description.length; i++){
        if(i===0){
            src += description[i].toUpperCase();
        } else {
            src += description[i].toLowerCase();
        }
    }
    return(
        <StyledRecord isPlus={isPlus}>
            <p>
                <strong>{date}</strong>
                {src}
            </p>
            <span>{parseInt(value).toFixed(2).replace(".", ",")}</span>
        </StyledRecord>
    )
}