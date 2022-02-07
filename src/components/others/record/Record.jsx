import { StyledRecord } from "../../../style/record";

export default function Record ({name, value, date, isPlus}) {
    return(
        <StyledRecord isPlus={isPlus}>
            <p>
                <strong>{date}</strong>
                {name}
            </p>
            <span>{value.toString().replace(".", ",")}</span>
        </StyledRecord>
    )
}