const nome = document.getElementById("nome");
const atributo = document.getElementById("atributo");
const distancia = document.getElementById("distancia");
const empunhadura = document.getElementById("empunhadura");
const habilidade = document.getElementById("habilidade");

const resultado = document.getElementById("resultado");


// Habilidades disponíveis
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


// Sempre que alguma característica mudar,
// recalculamos as habilidades disponíveis.
nome.addEventListener("input", atualizar);
atributo.addEventListener("change", atualizar);
distancia.addEventListener("change", atualizar);
empunhadura.addEventListener("change", atualizar);


function atualizar() {

    atualizarHabilidades();
    atualizarResultado();

}


function atualizarHabilidades() {

    habilidade.innerHTML = "";

    const valoresPreenchidos =
        atributo.value &&
        distancia.value &&
        empunhadura.value;


    if (!valoresPreenchidos) {

        habilidade.disabled = true;

        const option = document.createElement("option");

        option.value = "";
        option.textContent = "Selecione os valores acima";

        habilidade.appendChild(option);

        return;
    }


    habilidade.disabled = false;


    const primeiraOpcao = document.createElement("option");

    primeiraOpcao.value = "";
    primeiraOpcao.textContent = "Nenhuma";

    habilidade.appendChild(primeiraOpcao);


    const habilidadesDisponiveis =
        obterHabilidadesDisponiveis();


    habilidadesDisponiveis.forEach(habilidadeItem => {

        const option = document.createElement("option");

        option.value = habilidadeItem.valor;
        option.textContent = habilidadeItem.nome;

        habilidade.appendChild(option);

    });

}


function obterHabilidadesDisponiveis() {

    /*
     * É AQUI que vamos colocar as regras
     * do seu sistema.
     *
     * Por enquanto, todas estão disponíveis.
     */

    return habilidades;

}


function atualizarResultado() {

    if (
        !nome.value &&
        !atributo.value &&
        !distancia.value &&
        !empunhadura.value
    ) {

        resultado.textContent =
            "Preencha os campos acima para criar seu item.";

        return;
    }


    resultado.innerHTML = `

        <strong>
            ${nome.value || "Item sem nome"}
        </strong>

        <br><br>

        Atributo:
        ${atributo.options[atributo.selectedIndex]?.text || "-"}

        <br>

        Distância:
        ${distancia.options[distancia.selectedIndex]?.text || "-"}

        <br>

        Empunhadura:
        ${empunhadura.options[empunhadura.selectedIndex]?.text || "-"}

        <br>

        Habilidade:
        ${habilidade.options[habilidade.selectedIndex]?.text || "-"}

    `;
}
