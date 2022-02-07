import { StyledBalance } from "../../../../style/balance";

export default function Balance ({balance}){
    return(
        <StyledBalance value={balance}>
            <strong>SALDO</strong>
            <span>{balance.toFixed(2)}</span>
        </StyledBalance>
    )
}