const patamar = document.getElementById("patamar");
const nome = document.getElementById("nome");
const atributo = document.getElementById("atributo");
const distancia = document.getElementById("distancia");
const dano = document.getElementById("dano");
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

patamar.addEventListener("change", atualizar);

nome.addEventListener("input", atualizarTabela);

atributo.addEventListener("change", atualizarTabela);

distancia.addEventListener("change", atualizar);

dano.addEventListener("change", atualizar);

empunhadura.addEventListener("change", atualizar);

habilidade.addEventListener("change", atualizarTabela);


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


    const distanciaPontos = {
        "cac": 0,
        "muito-perto": 1,
        "perto": 2,
        "distante": 3,
        "muito-distante": 4
    }[distancia.value];

    const empunhaduraPontos = {
        "1": 2,
        "2": 0
    }[empunhadura.value];

    const danoPontos = dano.value;

    const totalPontos = {
        "1": 8,
        "2": 14
    }[patamar.value];

    const somaPontos =
        distanciaPontos +
        empunhaduraPontos +
        danoPontos

    const pontosRestantes = totalPontos - somaPontos;

    console.log("distanciaPontos:", distanciaPontos);
    console.log("empunhaduraPontos:", empunhaduraPontos);
    console.log("danoPontos:", danoPontos);
    console.log("totalPontos:", totalPontos);
    console.log("pontosRestantes:", pontosRestantes);
    console.log("somaPontos:", somaPontos);

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

    const patamarValor =
        patamar.value || "-";

    const nomeValor =
        nome.value || "";


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

    const danoValor = dano.options[
            dano.selectedIndex
        ].text + (pontosRestantes >= 0 ? ` +${pontosRestantes}` : ` ${pontosRestantes}`);


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
            ${patamarValor}
        </td>

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
            ${danoValor}
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