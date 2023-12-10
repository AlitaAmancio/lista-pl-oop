import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Telefone from "../../modelo/telefone";

export default function cadastrarTelefone(cliente: Cliente) {
    let entrada = new Entrada()

    let ddd = entrada.receberTexto(`• Por favor, informe o DDD de seu telefone: `);
    let numeroTelefone = entrada.receberTexto(`• Informe o número de telefone, por favor: `);

    let telefone = new Telefone(ddd, numeroTelefone)
    cliente.adicionarTelefone(telefone)
}