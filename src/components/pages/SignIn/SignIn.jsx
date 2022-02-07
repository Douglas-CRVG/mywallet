import Form from "../../others/form/Form";
import { signIn } from "../../../utils/utils";
import { MainHome, StyledLink } from "../../../style/mainHome";
import useBlock from "../../../hooks/useBlock";
import { useNavigate } from "react-router-dom";
import { postSignIn } from "../../../services/axios";
import bodySignInSchema from "../../../schemas/bodySignInSchema";
import { useState } from "react";
import useToken from "../../../hooks/useToken";

export default function SignIn(){
    const [bodySignIn, setBodySignIn] = useState({
        email: '',
        password: ''
    });

    const {setBlock} = useBlock();
    const {setToken} = useToken();
    const redirectSignIn = useNavigate();

    async function handleSignIn(e) {
        e.preventDefault();
        setBlock(true);

        const validate = await bodySignInSchema.isValid(bodySignIn);

        if(!validate) {
            alert("Preencha corretamente todos os dados para cadastro!");
            setBlock(false);
            return;
        }

        postSignIn(bodySignIn).then((response)=>{
            setToken(response.data.token);
            setBlock(false);
            redirectSignIn("/records", { replace: true });
        })
        .catch((err)=>{
            setBlock(false);
            console.log(err.response);
            alert("Erro de usuário ou senha!")
        });
    }

    return(
        <MainHome>
            <h1>MyWallet</h1>
            <Form inputs={signIn} button="Entrar" func={handleSignIn} data={bodySignIn} setData={setBodySignIn}/>
            <StyledLink to="/sign-up">Primeira vez? Cadastre-se!</StyledLink>
        </MainHome>
    )
}