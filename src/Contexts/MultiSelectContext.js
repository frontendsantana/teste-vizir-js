import { createContext, useState } from "react";

export const MultiSelectContext = createContext({})

export const MultiSelectProvider = (props) => {
    const [Selected, setSelected] = useState([])

    return (
        <MultiSelectContext.Provider value ={{Selected, setSelected}}>
            {props.children}
        </MultiSelectContext.Provider>
    );
}


