import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"

export default class EditorCliente {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }

    public editar(cliente: Cliente): void {
        console.log(`\nEditando informações da(o) cliente... ( • ᴥ • )`);
        console.log(`O que gostaria de editar?`)
        console.log(`1 — Nome`)
        console.log(`2 — Nome social`)
        console.log(`3 — Pets`)

        let escolha = this.entrada.receberNumero(`Digite a opção desejada: `)

        switch (escolha) {
            case 1:
                let nome = this.entrada.receberTexto(`• Por favor, informe o novo nome: `)
                cliente.nome = nome

                console.log(`\nEdição concluída!   ✓ ( • ᴥ • )\n`);
                break

            case 2:
                let nomeSocial = this.entrada.receberTexto(`• Por favor, informe o novo nome social: `)
                cliente.nomeSocial = nomeSocial

                console.log(`\nEdição concluída!   ✓ ( • ᴥ • )\n`);
                break

            default:
                console.log('Não existe esta opção!   ⋯ ( • ᴥ • )')
        }
    }
}