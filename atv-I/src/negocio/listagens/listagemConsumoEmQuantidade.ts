import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientesDezMais extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public listar(): void {
        console.log('\nEsses são os dez clientes que mais adquiriram em termos de quantidade:\n')

        this.clientes.forEach(cliente => {
            let quantidadeProdutosConsumidos = cliente.getProdutosConsumidos.length
            let quantidadeServicosConsumidos = cliente.getServicosConsumidos.length
            let quantidadeTotalConsumida = quantidadeProdutosConsumidos + quantidadeServicosConsumidos

            cliente.quantidadeTotalConsumida = quantidadeTotalConsumida
        })

        const clientesOrdenados = this.clientes.sort((a, b) => b.quantidadeTotalConsumida - a.quantidadeTotalConsumida)
        const dezMais = clientesOrdenados.slice(0, 10)

        dezMais.forEach((cliente, indice) => {
            console.log(`${indice + 1} - ${cliente.nome}: ${cliente.quantidadeTotalConsumida} produtos e/ou serviços consumidos.\n`)
        })
    }

    public listarPorEspecieRaca(): void {
        console.log('\nEsses são os dez produtos e/ou serviços mais consumidos por espécie e raça de Pets:\n')

        let input = this.entrada.receberTexto('Listar por espécie ou por raça? Escolha uma opção: ')
        this.clientes.forEach(cliente => {
            let pets = cliente.getPets

            pets.forEach(pet => {
                let quantidadeProdutosConsumidosPet = pet.getProdutosConsumidos.length
                let quantidadeServicosConsumidosPet = pet.getServicosConsumidos.length
                let quantidadeTotalConsumidaPet = quantidadeProdutosConsumidosPet + quantidadeServicosConsumidosPet

                pet.quantidadeTotalConsumida = quantidadeTotalConsumidaPet
            })
        })
    }
}