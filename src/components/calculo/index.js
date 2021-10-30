import CalculoDrop from "../calculoDrop"
import "./style.css"

export default function Calculo () {
    return (
        <div className="CalculoWrapper" id="Calculo">
        
            <div className="TitleCalculo">
                <h4>Faça o cálculo <br/>do FaleMais</h4>
                <p>Excepteur sint occaecat cupidatatnon proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="Select">            
            <CalculoDrop/>
            </div>



        </div>
    );
}