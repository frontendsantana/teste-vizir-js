import './style.css'

export default function FinalizarContratacao() {
    return (
        <div className="FinalizarWrapper">
            <h1>Finalizar contratação</h1>
            <h4>Dados pessoais</h4>

            <div className="InputsFinalizarWrapper">
                <div className="inputsFinalizar">
                    <span>
                        Nome
                        <input />
                    </span>
                </div>

                <div className="inputsFinalizar">
                    <span>
                        Sobrenome
                        <input />
                    </span>
                </div>
            </div>

            <div className="InputsFinalizarWrapper">
                <div className="inputsFinalizar">
                    <span>
                        Telefone
                        <input />
                    </span>
                </div>

                <div className="inputsFinalizar">
                    <span>
                        Email
                        <input />
                    </span>
                </div>
            </div>
        </div>
    );
}