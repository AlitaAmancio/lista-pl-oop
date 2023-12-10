import Cliente from "../../modelo/cliente";

export default function listarServicosAtribuidos(cliente: Cliente) {
    console.log(`\nRegistro dos serviços atribuidos ao cliente. ${cliente.nome}`)

    for (let x = 0; x < cliente.getServicosConsumidos.length; x++) {
        console.log(`${x + 1} - ${cliente.getServicosConsumidos[x].nome}`)
    }
}