import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico"
import Cadastro from "./cadastro"

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nVamos iniciar o cadastro do serviço... ( • ᴥ • )`);
        
        let nomeServico = this.entrada.receberTexto('• Por favor, informe o nome do serviço: ')
        let precoServico = this.entrada.receberNumero('• Por gentileza, informe o preço do serviço: ')
        let servico = new Servico()

        servico.nome = nomeServico
        servico.preco = precoServico
        
        this.servicos.push(servico)
        
        console.log(`\nCadastro concluído!   ✓ ( • ᴥ • )\n`);
    }
}