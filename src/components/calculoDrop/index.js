import MultiSelect from "../multiSelect"
import "./style.css"

import { Origens } from '../../mock/origens'
import { Tempo } from '../../mock/tempo'
import { Destinos } from '../../mock/destinos'
import { useContext } from "react"
import { DropDownContext } from "../../Contexts/DropDownContext"
import Total from "../total"


export default function CalculoDrop() {

    const {origem, setOrigem,destino, setDestino,tempo, setTempo} = useContext(DropDownContext)

    const attState = (itemValue, setOriginal, itemState) => {

        let newArray = [{
            state: itemState,
            value: itemValue
        }]

        setOriginal(newArray)
        
    }

    const origens = Origens.map(item => (
        <span onClick={() => attState(item.value, setOrigem, item.state)} key={item.id}>{item.value}/{item.state}</span>
    ))

    const destinos = Destinos.map(item => (
        <span onClick={() => attState(item.value, setDestino, item.state)} key={item.id}>{item.value}/{item.state}</span>
    ))

    const timeCall = Tempo.map(item => (
        <span onClick={() => attState(item.value, setTempo, 'Minutos')} key={item.id}>{item.value}/Minutos</span>
    ))

    return (
        <>
            <div className="DropWrapper">
                <div className="DropWrapperTop">
                    <div className="dropdown">
                        <button className="btndrop">
                            ORIGEM
                            <p>{origem.length === 0 ? 'Escolha a origem' : `${origem[0].value} ${origem[0].state}` }
                            <img src="seta.svg" alt="droparrow" />
                            </p>
                        </button>
                        <div className="dropContent">

                            {origens}

                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="btndrop">
                            DESTINO
                            <p>{destino.length === 0 ? 'Escolha a origem' : `${destino[0].value} ${destino[0].state}`}
                            <img src="seta.svg" alt="droparrow" />
                            </p>
                        </button>
                        <div className="dropContent">

                            {destinos}

                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="btndrop">
                            TEMPO
                            <p>{tempo.length === 0 ? 'Escolha a origem' : `${tempo[0].value} ${tempo[0].state}`}
                            <img src="seta.svg" alt="droparrow" />
                            </p>
                        </button>
                        <div className="dropContent">
                            {timeCall}
                        </div>
                    </div>
                </div>
                <MultiSelect/>
                <Total/>

            </div>

        </>
    );
}