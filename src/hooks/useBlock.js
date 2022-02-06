import { useContext } from "react";
import BlockContext from "../contexts/blockContext";

export default function useBlock(){
    return useContext(BlockContext);
}