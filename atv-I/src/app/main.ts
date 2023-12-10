import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastros/cadastroCliente";
import CadastroProduto from "../negocio/cadastros/cadastroProduto";
import CadastroServico from "../negocio/cadastros/cadastroServicos";
import EditorCliente from "../negocio/editores/editorCliente";
import EditorProduto from "../negocio/editores/editorProduto";
import ListagemClientes from "../negocio/listagens/listagemClientes";
import ListagemProdutos from "../negocio/listagens/listagemProdutos";
import ListagemServicos from "../negocio/listagens/listagemServicos";
import Selecionador from "../negocio/buscas/selecionador";
import SelecionadorProduto from "../negocio/buscas/selecionadorProduto";
import SelecionadorServico from "../negocio/buscas/selecionadorServico";
import EditorServico from "../negocio/editores/editorServico";
import cadastrarRG from "../negocio/cadastros/cadastroNovoRG";
import cadastrarPet from "../negocio/cadastros/cadastroNovoPet";
import cadastrarTelefone from "../negocio/cadastros/cadastroNovoTelefone";
import listarProdutosConsumidos from "../negocio/listagens/listagemConsumoProduto";
import listarServicosAtribuidos from "../negocio/listagens/listagemServicosAtribuidos";
import ListagemClientesCincoMais from "../negocio/listagens/listagemConsumoEmValor";
import ListagemClientesDezMais from "../negocio/listagens/listagemConsumoEmQuantidade";
import ListagemProdutosServicosMaisConsumidos from "../negocio/listagens/listagemProdutosServicosMaisConsumidos";
import SelecionadorPet from "../negocio/buscas/selecionadorPet";
import EditorPets from "../negocio/editores/editarPets";

console.log(`\nBem-vinda(o) ao PetLovers!   ♡ ( • ᴥ • )\nEsse é nosso sistema de gerenciamento de pet shops e clínicas veterinarias.`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Selecione uma das opções abaixo para prosseguir:`);
    console.log('\nSobre os clientes')
    console.log('━━━━━━ • ᴥ • ━━━━━━')
    console.log('• Operações Base')
    console.log(`1 — Cadastrar cliente`);
    console.log(`2 — Editar um cliente`);
    console.log(`3 — Excluir um cliente`);
    console.log(`4 — Listar todos os clientes`);
    console.log('\n• Operações Complementares (ATENÇÃO: operações exclusivas para clientes já cadastrados!)')
    console.log('5 — Cadastrar pet')
    console.log(`6 — Editar pet`);
    console.log('7 — Adicionar RG')
    console.log('8 — Adicionar telefone')
    console.log('━━━━━━ • ᴥ • ━━━━━━')

    console.log('\nSobre os produtos')
    console.log('━━━━━━ • ᴥ • ━━━━━━')
    console.log(`9 — Cadastrar produto`);
    console.log(`10 — Editar um produto`);
    console.log(`11 — Excluir um produto`);
    console.log(`12 — Listar todos os produtos`);
    console.log('━━━━━━ • ᴥ • ━━━━━━')

    console.log('\nSobre os serviços')
    console.log('━━━━━━ • ᴥ • ━━━━━━')
    console.log(`13 — Cadastrar serviço`);
    console.log(`14 — Editar um serviço`);
    console.log(`15 — Excluir um serviço`);
    console.log(`16 — Listar todos os serviços`);
    console.log('━━━━━━ • ᴥ • ━━━━━━')

    console.log('\nAções (ATENÇÃO: operações exclusivas para clientes, produtos e serviços já cadastrados!)')
    console.log('━━━━━━ • ᴥ • ━━━━━━')
    console.log('17 — Atribuir produto')
    console.log('18 — Solicitar serviço')
    console.log('━━━━━━ • ᴥ • ━━━━━━')

    console.log('\nListagens específicas')
    console.log('━━━━━━ • ᴥ • ━━━━━━')
    console.log('19 — Listar produtos e serviços mais consumidos')
    console.log('20 — Listar top cinco clientes que mais consumiram produtos e serviços (em valor)')
    console.log('21 — Listar top dez clientes que mais consumiram produtos e serviços (em quantidade)')
    console.log('━━━━━━ • ᴥ • ━━━━━━')

    console.log(`\n0 — Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, selecione uma das opções disponíveis: `)
    console.log('━━━━━━ • ᴥ • ━━━━━━')

    switch (opcao) {
        // ᨆ CRUD - Cliente ᨆ
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;

        case 2:
            let cpfEditar = entrada.receberTexto('Informe o CPF do cliente que será editado: ')
            let selecionadorClienteEditar = new Selecionador(empresa.getClientes)
            let clienteEditar = selecionadorClienteEditar.selecionar(cpfEditar)

            let editor = new EditorCliente()
            editor.editar(clienteEditar)

            console.log('\nCliente editado com sucesso!   ✓ ( • ᴥ • )')
            break

        case 3:
            let cpf = entrada.receberTexto('Informe o CPF do cliente que será excluído: ')
            let selecionadorCliente = new Selecionador(empresa.getClientes)
            let cliente = selecionadorCliente.selecionar(cpf)

            console.log(`Nome do cliente selecionado: ${cliente.nome}`);

            let indice = empresa.getClientes.indexOf(cliente)
            delete empresa.getClientes[indice]

            console.log('\nCliente exluído com sucesso.   ✓ ( • ᴥ • )');

            break

        case 4:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;


        // ᨆ CRUD - Cadastros Complementares ᨆ
        case 5:
            let cpfCliente = entrada.receberTexto('Informe o CPF do cliente para adicionar um novo pet: ')
            let selecionarCliente = new Selecionador(empresa.getClientes)
            let clienteSelecionado = selecionarCliente.selecionar(cpfCliente)

            console.log(`Nome do cliente selecionado: ${clienteSelecionado.nome}`);

            cadastrarPet(clienteSelecionado)

            console.log(`\nPet adicionado com sucesso ao cliente ${clienteSelecionado.nome}!   ✓ ( • ᴥ • )`)
            break

        case 6:
            let cpfEditarPet = entrada.receberTexto('Informe o CPF do cliente para editar um Pet: ')
            let selecionaCliente = new Selecionador(empresa.getClientes)
            let cliente_buscado = selecionaCliente.selecionar(cpfEditarPet)

            console.log('Nome do cliente: ' + cliente_buscado.nome)

            let pet = entrada.receberTexto('Informe o nome do Pet que gostaria de editar: ')
            let selecionaPet = new SelecionadorPet(cliente_buscado.getPets)
            let petEncontrado = selecionaPet.selecionar(pet)

            console.log(`Pet selecionado: ${petEncontrado.getNome}`)

            let editorPet = new EditorPets()
            editorPet.editar(petEncontrado)
            break

        case 7:
            let rgCliente = entrada.receberTexto('Informe o CPF do cliente para adicionar um RG: ')
            let selecionarClienteRG = new Selecionador(empresa.getClientes)
            let clienteSelecionadoRG = selecionarClienteRG.selecionar(rgCliente)

            console.log(`\nNome do cliente selecionado: ${clienteSelecionadoRG.nome}`);

            cadastrarRG(clienteSelecionadoRG)

            console.log(`\nRG adicionado com sucesso ao cliente ${clienteSelecionadoRG.nome}!   ✓ ( • ᴥ • )`)
            break

        case 8:
            let clienteCpf = entrada.receberTexto('Informe o CPF do cliente para adicionar um telefone: ')
            let selecionarClienteTelefone = new Selecionador(empresa.getClientes)
            let clienteSelecionadoTelefone = selecionarClienteTelefone.selecionar(clienteCpf)

            console.log(`Nome do cliente selecionado: ${clienteSelecionadoTelefone.nome}`);

            cadastrarTelefone(clienteSelecionadoTelefone)

            console.log(`\nTelefone adicionado com sucesso ao cliente ${clienteSelecionadoTelefone.nome}!   ✓ ( • ᴥ • )`)
            console.log(clienteSelecionadoTelefone.getTelefones)
            break


        // ᨆ CRUD - Produto ᨆ
        case 9:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break

        case 10:
            let produtoNome = entrada.receberTexto('Informe o nome do produto que você gostaria de modificar: ')
            let selecionadorProdutoEditar = new SelecionadorProduto(empresa.getProdutos)
            let produtoEditar = selecionadorProdutoEditar.selecionar(produtoNome)

            let editorProduto = new EditorProduto()
            editorProduto.editar(produtoEditar)
            console.log('\nProduto editado com sucesso!   ✓ ( • ᴥ • )')
            break

        case 11:
            let nomeProduto = entrada.receberTexto('Informe o nome do produto que você gostaria de excluir: ')
            let selecionadorProduto = new SelecionadorProduto(empresa.getProdutos)
            let produto = selecionadorProduto.selecionar(nomeProduto)

            console.log(`Nome do produto selecionado: ${produto.nome}`);

            let indiceProduto = empresa.getProdutos.indexOf(produto)
            delete empresa.getProdutos[indiceProduto]

            console.log('\nProduto excluído com sucesso.   ✓ ( • ᴥ • )');
            break

        case 12:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break


        // ᨆ CRUD - Serviço ᨆ
        case 13:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break

        case 14:
            let nomeServico = entrada.receberTexto('Informe o nome do serviço que você gostaria de modificar: ')
            let selecionadorServicoEditar = new SelecionadorServico(empresa.getServicos)
            let novoServico = selecionadorServicoEditar.selecionar(nomeServico)

            let editarServico = new EditorServico()
            editarServico.editar(novoServico)
            console.log('\nServiço editado com sucesso!   ✓ ( • ᴥ • )')
            break

        case 15:
            let servicoNome = entrada.receberTexto('Informe o nome do serviço que você gostaria de excluir: ')
            let selecionadorServico = new SelecionadorServico(empresa.getServicos)
            let servico = selecionadorServico.selecionar(servicoNome)

            console.log(`Serviço selecionado: ${servico.nome}`)

            let indiceServico = empresa.getServicos.indexOf(servico)
            delete empresa.getServicos[indiceServico]
            console.log('\nServiço excluído com sucesso.   ✓ ( • ᴥ • )')
            break

        case 16:
            let listagemServicos = new ListagemServicos(empresa.getServicos)
            listagemServicos.listar()
            break


        // ᨆ Atribuições de Produtos e Serviços ᨆ

        case 17:
            let input = entrada.receberTexto('Informe o CPF do cliente a quem gostaria de atribuir um produto: ')
            let encontraCliente = new Selecionador(empresa.getClientes)
            let clienteEncontrado = encontraCliente.selecionar(input)

            let inputPetProduto = entrada.receberTexto('Informe o nome do Pet a que o produto está atribuído: ')
            let selecionarPetProduto = new SelecionadorPet(clienteEncontrado.getPets)
            let petFiltradoProduto = selecionarPetProduto.selecionar(inputPetProduto)

            console.log(`\nNome do cliente selecionado: ${clienteEncontrado.nome}`);

            let inputProduto = entrada.receberTexto('Informe o nome do produto que será atribuído: ')
            let buscaProduto = new SelecionadorProduto(empresa.getProdutos)
            let produtoEncontrado = buscaProduto.selecionar(inputProduto)

            clienteEncontrado.consumirProduto(produtoEncontrado)
            petFiltradoProduto.consumirProduto(produtoEncontrado)
            listarProdutosConsumidos(clienteEncontrado)
            break

        case 18:
            let input_cpf = entrada.receberTexto('Informe o CPF do cliente que gostaria de solicitar um serviço: ')
            let encontrarCliente = new Selecionador(empresa.getClientes)
            let cliente_encontrado = encontrarCliente.selecionar(input_cpf)

            let inputPetServico = entrada.receberTexto('Informe o nome do Pet para o qual deseja solicitar o serviço: ')
            let selecionarPetServico = new SelecionadorPet(cliente_encontrado.getPets)
            let petFiltradoServico = selecionarPetServico.selecionar(inputPetServico)

            console.log(`\nNome do cliente selecionado: ${cliente_encontrado.nome}`);

            let inputServico = entrada.receberTexto('Informe o nome do serviço que gostaria de solicitar: ')
            let buscaServico = new SelecionadorServico(empresa.getServicos)
            let servicoEncontrado = buscaServico.selecionar(inputServico)

            cliente_encontrado.solicitarServico(servicoEncontrado)
            petFiltradoServico.solicitarServico(servicoEncontrado)
            listarServicosAtribuidos(cliente_encontrado)
            break

        // ᨆ Listagens Específicas ᨆ

        case 19:
            let listagemProdutoServicos = new ListagemProdutosServicosMaisConsumidos(empresa.getClientes)
            listagemProdutoServicos.listar()
            break

        case 20:
            let listagemCincoMais = new ListagemClientesCincoMais(empresa.getClientes)
            listagemCincoMais.listar()
            break

        case 21:
            let listagemDezMais = new ListagemClientesDezMais(empresa.getClientes)
            listagemDezMais.listar()
            break

        // ᨆ Encerrar ᨆ

        case 0:
            execucao = false
            console.log(`Obrigada por utilizar o PetLovers! Até mais!   ♡ ( • ᴥ • )\n`)
            break;

        default:
            console.log(`Operação não entendida!   ⋯ ( • ᴥ • )`)
    }
}