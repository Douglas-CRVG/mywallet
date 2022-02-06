import { BrowserRouter, Route, Routes } from "react-router-dom";
import {SignIn, SignUp} from "./pages/pages";
import "../style/reset.css";
import { BlockContextProvider } from "../contexts/blockContext";

export default function App(){
    return(
        <BlockContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element = { <SignIn />} />
                    <Route path="/sign-up" element = { <SignUp />} />
                </Routes>
            </BrowserRouter>
        </BlockContextProvider>
    )
}