import { useContext } from "react";
import { MultiSelectContext } from "../../Contexts/MultiSelectContext";
import { Planos } from "../../mock/planos";
import "./style.css"
export default function MultiSelect() {

    const {Selected, setSelected} = useContext(MultiSelectContext)

    const attSelect = (item) => {

        if (Selected.find(element => element === item)) {
            let newArray = Selected.filter(element => { return element !== item })
            setSelected(newArray)

        } else {

            let newArray = [...Selected, item]
            setSelected(newArray)
        }
    }

    const planos = Planos.map(item => (
        <>

            <label 
            for={item.value}>

                <input
                    type="checkbox"
                    key={item.id}
                    name={item.value}
                    id={item.value}
                    onClick={() => attSelect(item.value)} />

                Fale mais {item.value}
            </label>
        </>
    ))
    return (
        <div className="MultiSelectDrop">

            <button className="bntSelect">
                PLANO
                <span >
                    {Selected.length === 0 ? 'selecione um plano' : Selected.map(item => (
                        <p>Fale Mais {item}</p>
                    ))}
                     <img src="seta.svg" alt="droparrow" />
                </span>

            </button>

            <div className="SelectedItem"></div>

            <div className="Planos">
                <p>Escolha um ou mais planos.</p>
                <div className="PlanosWrapper">
                    {planos}
                </div>
            </div>


        </div>
    );
}