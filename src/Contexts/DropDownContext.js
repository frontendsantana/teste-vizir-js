import { createContext, useState } from "react";

export const DropDownContext = createContext({})

export const DropDownProvider = (props) => {

    const [origem, setOrigem] = useState([])
    const [destino, setDestino] = useState([])
    const [tempo, setTempo] = useState([])

    return (
        <DropDownContext.Provider value={{origem, setOrigem,destino, setDestino,tempo, setTempo}}>
            {props.children}
        </DropDownContext.Provider>
    );
}