import "./style.css"

import Table from "../table";

export default function Middle() {
    return (
        <div id="Vantagens" className="VantagensWrapper">
            <div className="Vantagens">

                <div className="Title">
                    <h4>Vantagens <br />do Fale mais</h4>
                </div>

                <div className="Infos">
                    <div className="InfosTitle1">
                        <div className="Title1">
                            <span>Lorem ipsum dolor <br/>sit amet</span>
                            <p className="desc">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="ImageTitle1"><img src="devices.svg" alt="device" /></div>
                    </div>
                    <hr />

                    <div className="InfosTitle1">
                        <div className="Title1">
                            <span>Duis aute irure dolor<br/>
                                in reprehenderit</span>
                                <p className="desc">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.</p>
                        </div>
                        <div className="ImageLocationCall">
                            <img src="map-pin.svg" alt="map"/>
                            <img src="plus.svg" alt="plus"/>
                            <img src="phone-call.svg" alt="phone"/>

                            <h4>00,<sup>00</sup><br/> <p>/mês</p> </h4>
                        </div>
                    </div>
                    <hr />

                    <div className="InfosTitle1">
                        <div className="Title1">
                            <span>Excepteur sint occa<br/>ecat cupidatat </span>
                            <p className="desc">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="Tabela">

                            <Table/>

                        </div>
                    </div>
                 
                </div>


            </div>
        </div>


    );
}