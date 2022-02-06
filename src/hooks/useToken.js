import { useContext } from "react";
import TokenContext from "../contexts/tokenContext";

export default function useToken(){
    return useContext(TokenContext);
}