import { BrowserRouter, Route, Routes } from "react-router-dom";
import {SignIn, SignUp} from "./pages/pages";
import "../style/reset.css";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = { <SignIn />} />
                <Route path="/sign-up" element = { <SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}