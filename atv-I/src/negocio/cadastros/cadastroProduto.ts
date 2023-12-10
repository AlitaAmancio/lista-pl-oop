import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Cadastro from "./cadastro"

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nVamos iniciar o cadastro do produto... ( • ᴥ • )`);
        
        let nomeProduto = this.entrada.receberTexto('• Por favor, informe o nome do produto: ')
        let precoProduto = this.entrada.receberNumero('• Por gentileza, informe o preço do produto: ')
        let produto = new Produto()

        produto.nome = nomeProduto
        produto.preco = precoProduto
        
        this.produtos.push(produto)
        
        console.log(`\nCadastro concluído!   ✓ ( • ᴥ • )\n`);
    }
}