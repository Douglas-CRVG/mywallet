import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Records, SignUp, SignIn, InputRecord, OutputRecord} from "./pages/index";
import "../style/reset.css";
import { BlockContextProvider } from "../contexts/blockContext";
import { TokenContextProvider } from "../contexts/tokenContext";

export default function App(){
    return(
        <BlockContextProvider>
            <TokenContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element = { <SignIn />} />
                        <Route path="/sign-up" element = { <SignUp />} />
                        <Route path="/records" element = { <Records /> } />
                        <Route path="/input-record" element = { <InputRecord />} />
                        <Route path="/output-record" element = { <OutputRecord />} />
                    </Routes>
                </BrowserRouter>
            </TokenContextProvider>
        </BlockContextProvider>
    )
}