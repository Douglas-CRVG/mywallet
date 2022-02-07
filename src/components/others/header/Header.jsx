import { ExitOutline } from 'react-ionicons'
import { useNavigate } from 'react-router-dom'
import { StyledHeader } from '../../../style/header'

export default function Header({name}){
    const navigate = useNavigate();
    if(name === "Nova saída" || name === "Nova entrada"){
        return(
            <StyledHeader>
                <h1>{name}</h1>
            </StyledHeader>
        )
    }

    function exit (){
        if(window.confirm("Deseja sair?")){
            navigate("/", { replace: true });
        }
    }
    return (
        <StyledHeader>
            <h1>Olá, {name}</h1>
            <button onClick={exit}>
                <ExitOutline
                    color={'#ffffff'}
                    height={"25px"}
                    width={"25px"}
                />
            </button>
        </StyledHeader>
    )
}