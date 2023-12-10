import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto";

export default class EditorProduto {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }

    public editar(produto: Produto): void {
        console.log(`\nEditando informações do produto... ( • ᴥ • )`);
        let nome = this.entrada.receberTexto(`• Por favor, informe o novo nome do produto: `)
        let preco = this.entrada.receberNumero(`• Por favor, informe o novo preço do produto: `)

        produto.nome = nome
        produto.preco = preco

        console.log(`\nEdição concluída!   ✓ ( • ᴥ • )\n`);
    }
}