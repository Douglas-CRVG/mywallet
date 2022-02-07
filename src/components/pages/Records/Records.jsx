import useToken from "../../../hooks/useToken";
import Footer from "../../others/footer/Footer";
import Header from "../../others/header/Header";
import Main from "../../others/main/Main";
import { useEffect, useState } from "react";
import { getRecords } from "../../../services/axios";

export default function Records(){
    const [records, setRecords] = useState([]);
    const {token} = useToken();
    let name;

    useEffect(() => {
        getRecords(token).then((response) => {
            setRecords(response.data.records);
            name = response.data.name;
        })
    }, []);

    return(
        <>
            <Header name={name}/>
            <Main records={records} />
            <Footer />
        </>
    )
}