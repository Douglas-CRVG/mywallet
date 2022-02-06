import { createContext, useState } from "react";

const TokenContext = createContext();

export default TokenContext;

export function TokenContextProvider({children}) {
    const [token, setToken] = useState("");
    return (
        <TokenContext.Provider value={{token, setToken}}>
            {children}
        </TokenContext.Provider>
    )
}