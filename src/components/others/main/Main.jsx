import { AlternativeMain, StyledMain } from "../../../style/main";
import Record from "../record/Record";
import Balance from "./balance/Balance";

export default function Main({records}){

    if(records.length === 0){
        return(
            <AlternativeMain>
                <p>Não há registros de entrada ou saída</p>
            </AlternativeMain>
        )
    }

    return (
        <StyledMain>
            {records.map((record, index) => <Record {...record} key={index}/>)}
            <Balance />
        </StyledMain>
    )
}