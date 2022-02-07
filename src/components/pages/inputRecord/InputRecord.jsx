import Header from "../../others/header/Header"
import styled from "styled-components";
import Form from "../../others/form/Form";
import { saveRecord } from "../../../utils/utils";
import { useState } from "react";
import recordSchema from "../../../schemas/recordSchema";
import { postRecord } from "../../../services/axios";
import useBlock from "../../../hooks/useBlock";
import useToken from "../../../hooks/useToken";
import { useNavigate } from "react-router-dom";

export default function InputRecord(){
    const [record, setRecord] = useState({
        description: '',
        value: ''
    });

    const navigate = useNavigate();

    const {setBlock} = useBlock();
    const {token} = useToken();

    async function handleInputRecord(e) {
        e.preventDefault();
        setBlock(true);

        const validate = await recordSchema.isValid(record);
            if(!validate) {
                alert("Preencha corretamente todos os dados para cadastro!");
                setBlock(false);
                return;
            }

            record.isPlus = true;

            postRecord(record, token).then((response) => {
                setBlock(false);
                navigate("/records", { replace: true });
            }).catch((error) => {
                setBlock(false);
                console.error(error.response);
                alert("Falha de envio, tente novamente.");
            })
    }

    return(
        <>
            <Header name={"Nova entrada"}/>
            <StyledForm inputs={saveRecord} button="Salvar entrada" data={record} setData={setRecord} func={handleInputRecord}/>
        </>
    )
}

const StyledForm = styled(Form)`
    padding-top: 18px;
    background-color: #000000;
`;