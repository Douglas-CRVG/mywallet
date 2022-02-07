import { useNavigate } from "react-router-dom";
import { StyledFooter } from "../../../style/footer";
import { RemoveCircleOutline, AddCircleOutline } from 'react-ionicons'

export default function Footer(){
    const navigate = useNavigate();
    return(
        <StyledFooter>
            <button onClick={() => navigate("/input-record", { replace: true })}>
                <AddCircleOutline
                    color={'#ffffff'} 
                    title={"Add records"}
                    height="22px"
                    width="22px"
                />
                <p>Nova entrada</p>
            </button>
            <button onClick={() => navigate("/output-record", { replace: true })}>
                <RemoveCircleOutline
                    color={'#ffffff'} 
                    title={"Add records"}
                    height="22px"
                    width="22px"
                />
                <p>Nova saída</p>
            </button>
        </StyledFooter>
    )
}