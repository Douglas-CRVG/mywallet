import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useBlock from "../../../hooks/useBlock";
import useToken from "../../../hooks/useToken";
import recordSchema from "../../../schemas/recordSchema";
import { postRecord } from "../../../services/axios";
import { saveRecord } from "../../../utils/utils";
import Form from "../../others/form/Form";
import Header from "../../others/header/Header";

export default function OutputRecord(){
    const [record, setRecord] = useState({
        description: '',
        value: ''
    });

    const {setBlock} = useBlock();
    const {token} = useToken();
    const navigate = useNavigate();

    async function handleOutputRecord(e) {
        e.preventDefault();
        setBlock(true);

        const validate = await recordSchema.isValid(record);
            if(!validate) {
                alert("Preencha corretamente todos os dados para cadastro!");
                setBlock(false);
                return;
            }

            record.isPlus = false;

        try {
            const response = await postRecord(record, token);
            setBlock(false);
            navigate("/records", { replace: true });
        } catch (error) {
            setBlock(false);
            alert("Falha de envio, tente novamente.");
        }
    }
    return(
        <>
            <Header name={"Nova saída"}/>
            <StyledForm inputs={saveRecord} button="Salvar saída" func={handleOutputRecord} data={record} setData={setRecord}/>
        </>
    )
}

const StyledForm = styled(Form)`
    padding-top: 18px;
`;