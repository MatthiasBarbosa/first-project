var lista = document.querySelector("#list");
console.log(lista);

function addItem() {
    /**Pegando valor digitados nos inputs */
    // Valor de item
    var item = document.querySelector("#new-item").value;
    console.log(item)

    // Valor de input valor (R$)
    var valor = document.querySelector ("#value-item").value;
    console.log(valor);

    /** Criando Elemento tr */
    var tr = document.createElement("tr");
    console.log(tr);

    /** Criando td Item */
    var tdItem = document.createElement("td");

    /** Criando td Valor (R$) */
    var tdValue = document.createElement("td");
    console.log(tdItem);
    console.log(tdValue);

    /** Adicionando id na td */
    tdValue.id = "valor";
    console.log(tdValue);

    /** Adicionando texto na td Item */
    tdItem.textContent = item;
    console.log(tdItem);

    /** Adicionando texto na td Valor */
    tdValue.textContent = valor;
    console.log(tdValue);

    /** Adicionando tdItem na tr */
    tr.appendChild(tdItem);
    /** Adicionando tdValue na tr */
    tr.appendChild(tdValue);
    console.log(tr);

    /** Adicionando tr dentro da lista */
    lista.appendChild(tr);

    /** Adicionando função de somar itens */
    somaLista()
}

function somaLista() {
    /** Pegando tds com valores dos itens */
    let tdValue = document.querySelector("#valor");
    console.log(tdValue);

    /** Estrutura condicional para verificar e setar valores na array */
    for (let index = 0; index < index.length; index++) {
        value[index] = parseFloat (tdValue[index].textContent);
        /** Somando valor da variável valorTotal com o valor da td */
        valorTotal +=
        parseFloat (values[index]);

    /** Pegando td de valor Total */
    var tdValorTotal = document.querySelector("#soma");

    /** Adicionando soma de valores na td */
    tdValorTotal.textContent = valorTotal;
    }
}