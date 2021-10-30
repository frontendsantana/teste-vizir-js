import "./style.css"
export default function Table () {
    return (
        <table className="TableInfos">
            <tr>
                <th>Origem</th>
                <th>Destino</th>
                <th>$/Min</th>
            </tr>
            <tr>
                <td>011</td>
                <td>016</td>
                <td>1.90</td>
            </tr>
            <tr>
                <td>016</td>
                <td>011</td>
                <td>2.90</td>
            </tr>
            <tr>
                <td>011</td>
                <td>017</td>
                <td>1.70</td>
            </tr>
            <tr>
                <td>017</td>
                <td>011</td>
                <td>2.70</td>
            </tr>
        </table>
    ) ;
}