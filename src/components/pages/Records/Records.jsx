import useToken from "../../../hooks/useToken";
import Footer from "../../others/footer/Footer";
import Header from "../../others/header/Header";
import Main from "../../others/main/Main";
import { useEffect, useState } from "react";
import { getRecords } from "../../../services/axios";

export default function Records(){
    const [records, setRecords] = useState([]);
    const {token} = useToken();
    console.log(token);

    async function handleGetRecords(){
        try {
            const response = await getRecords(token);
            setRecords(response.data);
            console.log(response);
        } catch (error) {
            console.error(error.response);
        }
    }

    useEffect(handleGetRecords, []);

    return(
        <>
            <Header />
            <Main records={records} />
            <Footer />
        </>
    )
}