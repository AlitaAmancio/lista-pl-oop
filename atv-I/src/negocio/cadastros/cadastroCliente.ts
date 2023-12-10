import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"
import Pet from "../../modelo/pet"
import Cadastro from "./cadastro"
import RG from "../../modelo/rg"
import Telefone from "../../modelo/telefone"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nVamos iniciar o cadastro do cliente... ( • ᴥ • )`);
        let nome = this.entrada.receberTexto(`• Por favor, informe o nome completo do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`• Caso haja um nome social a ser registrado, favor informar: `)
        let valor = this.entrada.receberTexto(`• Informe o número do CPF do cliente: `);
        let data = this.entrada.receberTexto(`• Por gentileza, informe a data de nascimento do cliente (no formato dd/mm/yyyy): `);
        let valorRG = this.entrada.receberTexto(`• Agora, informe o número do RG do cliente: `)
        let dataRG = this.entrada.receberTexto(`• E a data de emissão do RG (no formato dd/mm/yyyy): `);
        let ddd = this.entrada.receberTexto(`• Para contato telefônico, informe o DDD do telefone do cliente: `);
        let numeroTelefone = this.entrada.receberTexto(`• Agora, informe o número de telefone do cliente: `);

        console.log(`\nAgora, informações sobre o animal de estimação... ( • ᴥ • )`);

        let nomePet = this.entrada.receberTexto('• Informe o nome do pet: ')
        let especiePet = this.entrada.receberTexto('• Qual é a espécie do pet? ')
        let racaPet = this.entrada.receberTexto('• E qual é a raça do pet? ')
        let sexoPet = this.entrada.receberTexto('• Por fim, informe o sexo do pet: ')

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let partesDataRG = dataRG.split('/')
        let anoRG = new Number(partesDataRG[2].valueOf()).valueOf()
        let mesRG = new Number(partesDataRG[1].valueOf()).valueOf()
        let diaRG = new Number(partesDataRG[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let dataEmissaoRG = new Date(anoRG, mesRG, diaRG)


        let cpf = new CPF(valor, dataEmissao);
        let rg = new RG(valorRG, dataEmissaoRG)
        let telefone = new Telefone(ddd, numeroTelefone)
        let pet = new Pet(nomePet, racaPet, sexoPet, especiePet)
        let cliente = new Cliente(nome, nomeSocial, cpf);

        cliente.adicionarPet(pet)
        cliente.adicionarRG(rg)
        cliente.adicionarTelefone(telefone)
        
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído!   ✓ ( • ᴥ • )\n`);
    }
}