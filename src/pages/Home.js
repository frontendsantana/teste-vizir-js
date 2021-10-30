import Calculo from "../components/calculo";
import Middle from '../components/middle';
import Top from '../components/top';
import Planos from '../components/planos';
import BottomBar from "../components/bottomBar";

export default function Home() {
    return (
        <>
            <Top />
            <Middle />
            <Calculo />
            <Planos/>
            <BottomBar/>
        </>
    );
}