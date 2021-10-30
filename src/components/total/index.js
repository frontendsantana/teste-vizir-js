
import { useContext, useEffect, useState } from 'react';
import { DropDownContext } from '../../Contexts/DropDownContext';
import { MultiSelectContext } from '../../Contexts/MultiSelectContext';
import { CalculoTotal } from '../../utils/calculoTotal';
import './style.css'
export default function Total() {

    const { origem, destino, tempo } = useContext(DropDownContext)
    const { Selected } = useContext(MultiSelectContext)
    const [valorTotal, setValorTotal] = useState("0,00")


    useEffect(() => {
            let total = CalculoTotal(origem, destino, tempo, Selected)
            setValorTotal(total)
        
    }, [
        origem, destino, tempo, Selected
    ])
    return (

        <div className="TotalWrapper">
            <h4>Total</h4>
            <span>{`R$ ${valorTotal}`}</span>
            <div className="Line"></div>
            <button className="BtnContratarTotal">Contratar</button>
        </div>
    );
}