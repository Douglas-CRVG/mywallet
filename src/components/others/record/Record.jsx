import { StyledRecord } from "../../../style/record";

export default function Record ({description, value, date, isPlus}) {
    return(
        <StyledRecord isPlus={isPlus}>
            <p>
                <strong>{date}</strong>
                {description}
            </p>
            <span>{parseInt(value).toFixed(2).replace(".", ",")}</span>
        </StyledRecord>
    )
}