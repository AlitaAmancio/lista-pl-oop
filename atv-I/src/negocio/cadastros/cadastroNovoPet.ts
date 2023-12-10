import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Pet from "../../modelo/pet"

export default function cadastrarPet(cliente: Cliente) {
    let entrada = new Entrada()
    let nomePet = entrada.receberTexto('• Por favor, informe o nome do pet: ')
    let especiePet = entrada.receberTexto('• Por gentileza, especifique a espécie do pet: ')
    let racaPet = entrada.receberTexto('• Por favor, informe o raça do pet: ')
    let sexoPet = entrada.receberTexto('• Informe o sexo do pet, por gentileza: ')

    let novoPet = new Pet(nomePet, racaPet, sexoPet, especiePet)
    cliente.adicionarPet(novoPet)
}