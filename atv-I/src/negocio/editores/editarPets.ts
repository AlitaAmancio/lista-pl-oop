import Entrada from "../../io/entrada"
import Pet from "../../modelo/pet"

export default class EditorPets {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }

    public editar(pet: Pet): void {
        console.log(`\nEditando informações do pet... ( • ᴥ • )`);
        console.log('O que gostaria de editar?')
        console.log('1 — Nome')
        console.log('2 — Especie')
        console.log('3 — Raça')
        console.log('4 — Gênero')

        let escolha = this.entrada.receberNumero('\nDigite a opção desejada: ')

        switch (escolha) {
            case 1:
                let nome = this.entrada.receberTexto(`• Por favor, informe o novo nome do pet: `)
                pet.setNome(nome)

                console.log(`\nEdição concluída!   ✓ ( • ᴥ • )\n`);
                break

            case 2:
                let especie = this.entrada.receberTexto(`• Por favor, informe a nova especie do pet: `)
                pet.setEspecie(especie)

                console.log(`\nEdição concluída!   ✓ ( • ᴥ • )\n`);
                break

            case 3:
                let raca = this.entrada.receberTexto(`• Por favor, informe a nova raça do pet: `)
                pet.setRaca(raca)

                console.log(`\nEdição concluída!   ✓ ( • ᴥ • )\n`);
                break

            case 4:
                let sexo = this.entrada.receberTexto(`• Por favor, informe o novo sexo do pet: `)
                pet.setSexo(sexo)

                console.log(`\nEdição concluída!   ✓ ( • ᴥ • )\n`);
                break

            default:
                console.log('Não existe esta opção!   ⋯ ( • ᴥ • )')
        }
    }
}