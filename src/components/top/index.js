import './style.css'

export default function Top () {
    return (
        <div className="Container">
             <div className="topBar">
             <span className="Logo">
                <img src="vector.svg" alt='Logo'/>
                <h6>Telzir</h6>
             </span>
               <ul>
                   <li> <a href="#Vantagens">Vantagens</a> </li>
                   <li> <a href="#Calculo">Calculo</a> </li>
                   <li> <a  className="BtnContratar" href="/finalizarcontrato">Contratar</a> </li>
               </ul>
            </div>

            <div className="Middle">
                <p className="Head">Pague menos, <br/><b>Fale mais</b> </p>
                <p className="Desc">Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#SaibaMais"> Saiba mais </a>
            </div>

            
        </div>
    );
}