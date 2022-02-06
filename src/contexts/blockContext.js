import { createContext, useState } from "react";

const BlockContext = createContext();

export default BlockContext;

export function BlockContextProvider({children}) {
    const [block, setBlock] = useState(false);
    return (
        <BlockContext.Provider value={{block, setBlock}}>
            {children}
        </BlockContext.Provider>
    )
}