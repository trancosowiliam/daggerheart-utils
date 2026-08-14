const nome = document.getElementById("nome");
const atributo = document.getElementById("atributo");
const distancia = document.getElementById("distancia");
const empunhadura = document.getElementById("empunhadura");
const habilidade = document.getElementById("habilidade");

const itens = document.getElementById("itens");


// ========================================
// HABILIDADES
// ========================================

const habilidades = [
    {
        nome: "Inconveniente",
        valor: "inconveniente"
    },
    {
        nome: "Confiável",
        valor: "confiavel"
    },
    {
        nome: "Pesado",
        valor: "pesado"
    },
    {
        nome: "Enorme",
        valor: "enorme"
    }
];


// ========================================
// EVENTOS
// ========================================

nome.addEventListener("input", atualizar);

atributo.addEventListener("change", atualizar);

distancia.addEventListener("change", atualizar);

empunhadura.addEventListener("change", atualizar);

habilidade.addEventListener("change", atualizar);


// ========================================
// ATUALIZAR TUDO
// ========================================

function atualizar() {

    atualizarHabilidades();

    atualizarTabela();

}


// ========================================
// ATUALIZAR HABILIDADES
// ========================================

function atualizarHabilidades() {

    habilidade.innerHTML = "";


    // Ainda não selecionou os campos necessários

    if (
        !atributo.value ||
        !distancia.value ||
        !empunhadura.value
    ) {

        habilidade.disabled = true;

        const option = document.createElement("option");

        option.value = "";

        option.textContent =
            "Selecione os valores anteriores";

        habilidade.appendChild(option);

        return;
    }


    habilidade.disabled = false;


    // Opção nenhuma

    const nenhuma = document.createElement("option");

    nenhuma.value = "";

    nenhuma.textContent = "Nenhuma";

    habilidade.appendChild(nenhuma);


    // Pega as habilidades disponíveis

    const disponiveis =
        obterHabilidadesDisponiveis();


    disponiveis.forEach(item => {

        const option =
            document.createElement("option");

        option.value = item.valor;

        option.textContent = item.nome;

        habilidade.appendChild(option);

    });

}


// ========================================
// HABILIDADES DISPONÍVEIS
// ========================================

function obterHabilidadesDisponiveis() {

    /*
     * POR ENQUANTO:
     * todas as habilidades estão disponíveis.
     *
     * Depois vamos colocar aqui
     * as regras do seu sistema.
     */

    return habilidades;

}


// ========================================
// ATUALIZAR TABELA
// ========================================

function atualizarTabela() {

    // Limpa a tabela

    itens.innerHTML = "";


    // Se não tiver nenhum campo preenchido,
    // não mostra nada.

    if (
        !nome.value &&
        !atributo.value &&
        !distancia.value &&
        !empunhadura.value
    ) {

        return;
    }


    // ========================================
    // VALORES
    // ========================================

    const nomeValor =
        nome.value || "Item sem nome";


    const atributoValor =
        atributo.value
            ? atributo.options[
                atributo.selectedIndex
            ].text
            : "-";


    const distanciaValor =
        distancia.value
            ? distancia.options[
                distancia.selectedIndex
            ].text
            : "-";


    const empunhaduraValor =
        empunhadura.value
            ? empunhadura.options[
                empunhadura.selectedIndex
            ].text
            : "-";


    const habilidadeValor =
        habilidade.value
            ? habilidade.options[
                habilidade.selectedIndex
            ].text
            : "—";


    // ========================================
    // CRIAR LINHA
    // ========================================

    const linha =
        document.createElement("tr");


    linha.innerHTML = `

        <td>
            ${nomeValor}
        </td>

        <td>
            ${atributoValor}
        </td>

        <td>
            ${distanciaValor}
        </td>

        <td>
            -
        </td>

        <td>
            ${empunhaduraValor}
        </td>

        <td>
            ${habilidadeValor}
        </td>

    `;


    itens.appendChild(linha);

}