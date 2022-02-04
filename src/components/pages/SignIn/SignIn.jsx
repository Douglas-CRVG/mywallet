import Form from "../../others/form/Form";
import { signIn } from "../../../utils/utils";
import { MainSign, StyledLink } from "../../../style/mainSign";

export default function SignIn(){
    //criar função para rodar no forms

    return(
        <MainSign>
            <h1>MyWallet</h1>
            <Form inputs={signIn} button="Entrar"/>
            <StyledLink to="/sign-up">Primeira vez? Cadastre-se!</StyledLink>
        </MainSign>
    )
}