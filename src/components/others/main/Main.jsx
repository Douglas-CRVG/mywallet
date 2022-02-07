import { AlternativeMain, StyledMain } from "../../../style/main";
import Record from "../record/Record";
import Balance from "./balance/Balance";

export default function Main({records}){
    let balance = 0;
    records.forEach(record => {
        if(record.isPlus){
            balance += parseInt(record.value);
        } else {
            balance -= parseInt(record.value);
        }        
    });

    if(records.length === 0){
        return(
            <AlternativeMain>
                <p>Não há registros de entrada ou saída</p>
            </AlternativeMain>
        )
    } else{
        return (
            <>
                <StyledMain>
                    {records.map((record, index) => <Record {...record} key={index}/>)}
                </StyledMain>
                <Balance balance={balance} />
            </>
            
        )
    }

    
}