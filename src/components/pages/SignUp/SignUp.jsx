import Form from "../../others/form/Form";
import { signUp } from "../../../utils/utils";
import { MainSign, StyledLink } from "../../../style/mainSign";
import useBlock from "../../../hooks/useBlock";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postSignUp } from "../../../services/axios";
import bodySignUpSchema from "../../../schemas/bodySignUpSchema";

export default function SignUp(){
    const [bodySignUp, setBodySignUp] = useState({
        
        name: '',
        email: '',
        password: '',
        confirm: ''
    });
    const {setBlock} = useBlock();

    const redirectSignIn = useNavigate();

    async function handleSignUp(e) {
        e.preventDefault();
        setBlock(true);
        const validate = await bodySignUpSchema.isValid(bodySignUp);
        if(!validate) {
            alert("Preencha corretamente todos os dados para cadastro!");
            setBlock(false);
            return;
        }

        if(bodySignUp.password !== bodySignUp.confirm){
            alert("Erro na confirmação de senha!")
            setBlock(false);
            return;
        } else {
            delete bodySignUp.confirm
            postSignUp(bodySignUp).then((response)=>{
                setBlock(false);
                redirectSignIn("/", { replace: true });
            })
            .catch((err)=>{
                setBlock(false);
                alert("Este email já está sendo utilizado!");
            });
        }
    }

    return(
        <MainSign>
            <h1>MyWallet</h1>
            <Form inputs={signUp} button="Cadastrar" func={handleSignUp} data={bodySignUp} setData={setBodySignUp}/>
            <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
        </MainSign>
    )
}