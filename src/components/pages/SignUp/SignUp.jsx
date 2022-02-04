import Form from "../../others/form/Form";
import { signUp } from "../../../utils/utils";
import { MainSign, StyledLink } from "../../../style/mainSign";

export default function SignUp(){
    /*
    criar função para rodar no forms
    instalar styled components
    instalar joi para validações
    */
    return(
        <MainSign>
            <h1>MyWallet</h1>
            <Form inputs={signUp} button="Cadastrar"/>
            <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
        </MainSign>
    )
}