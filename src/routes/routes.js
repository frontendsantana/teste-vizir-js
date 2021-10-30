import { Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import FinalizarContrato from "../pages/FinalizarContratacao";


export default function Routes () {
    return (
        <BrowserRouter>

        <Route component = {Home} path="/" exact />
        <Route component = {FinalizarContrato} path="/finalizarcontrato" exact />
        </BrowserRouter>
    );
}