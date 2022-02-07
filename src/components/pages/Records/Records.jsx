import useToken from "../../../hooks/useToken";
import Footer from "../../others/footer/Footer";
import Header from "../../others/header/Header";
import Main from "../../others/main/Main";
import { useEffect, useState } from "react";
import { getRecords } from "../../../services/axios";

export default function Records(){
    const [records, setRecords] = useState([]);
    const {token} = useToken();

    useEffect(() => {
        getRecords(token).then((response) => {
            setRecords(response.data)
        }).catch((error) => {
            console.log(error.response);
        })
    }, []);

    return(
        <>
            <Header />
            <Main records={records} />
            <Footer />
        </>
    )
}