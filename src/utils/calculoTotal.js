import { ValoresCalculo } from "../mock/valoresCalculo"


export const CalculoTotal = (origemCall, destinoCall, tempoCall, planos) => {

    let total = 0



    function CalcularAcrescimo(sobra, taxa) {
        let primeira = sobra * taxa
        let segunda = primeira * 10
        let terceira = segunda / 100
        let resultado = primeira + terceira
        return resultado
    }


    if (origemCall[0] && destinoCall[0] && tempoCall[0]) {

        let OrigemEDestino = origemCall[0].value + destinoCall[0].value
        
        const ExistData = ValoresCalculo.find(element => element.OrigemDestino === OrigemEDestino)

        if (ExistData) {
            if (planos[0]) {
                let maiorPlano = Math.max(...planos)
                let sobra = tempoCall[0].value - maiorPlano
                total = tempoCall[0].value < maiorPlano ? total = 0 : CalcularAcrescimo(sobra, ExistData.value)
                return total
            }
            let valorTotal = ExistData.value * tempoCall[0].value
            total = valorTotal
        }
    }

    return total
}
