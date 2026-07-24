const text = document.getElementById('input-text');
const adc = document.getElementById('adc');
const list = document.getElementById('list');
const campoTotal = document.getElementById('totalGeral');

let itens = JSON.parse(localStorage.getItem('lista')) || [];


// Salva os dados
function salvarLista() {
    localStorage.setItem('lista', JSON.stringify(itens));
}


// Atualiza o total geral
function atualizarTotal() {

    let total = 0;

    itens.forEach(item => {
        total += item.total;
    });

    campoTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
}



// Cria item na tela
function criarItem(item) {

    const novoItem = document.createElement('li');
    const checkItem = document.createElement('input');
    const p = document.createElement('p');
    const qtd1 = document.createElement('input');
    const qtd2 = document.createElement('input');
    const calc = document.createElement('button');
    const resultado = document.createElement('span');
    const botaoExcluir = document.createElement('button');


    novoItem.classList.add('tarefa');


    // Checkbox
    checkItem.type = 'checkbox';
    checkItem.checked = item.concluido;


    checkItem.addEventListener('change', () => {

        item.concluido = checkItem.checked;

        if(checkItem.checked){
            p.classList.add('concluido');
        } else {
            p.classList.remove('concluido');
        }

        salvarLista();
    });



    // Texto
    p.textContent = item.texto;
    p.classList.add('tarefa-texto');


    if(item.concluido){
        p.classList.add('concluido');
    }



    // Quantidade
    qtd1.type = 'number';
    qtd1.placeholder = 'Quantidade';
    qtd1.classList.add('qtd');
    qtd1.value = item.quantidade || '';



    // Valor
    qtd2.type = 'number';
    qtd2.placeholder = 'Valor';
    qtd2.classList.add('qtd');
    qtd2.value = item.valor || '';



    // Resultado
    resultado.textContent = item.total 
        ? `R$ ${item.total.toFixed(2)}`
        : '';



    // Botão calcular
    calc.textContent = "Calcular";


    calc.addEventListener('click', () => {


        const quantidade = Number(qtd1.value);
        const valor = Number(qtd2.value);


        item.quantidade = quantidade;
        item.valor = valor;
        item.total = quantidade * valor;


        resultado.textContent = `R$ ${item.total.toFixed(2)}`;


        salvarLista();
        atualizarTotal();

    });



    // Excluir
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.classList.add('botao-excluir');


    botaoExcluir.addEventListener('click', () => {


        const index = itens.indexOf(item);


        if(index !== -1){
            itens.splice(index,1);
        }


        salvarLista();

        atualizarTotal();

        novoItem.remove();

    });



    // Montagem
    novoItem.appendChild(checkItem);
    novoItem.appendChild(p);
    novoItem.appendChild(qtd1);
    novoItem.appendChild(qtd2);
    novoItem.appendChild(calc);
    novoItem.appendChild(resultado);
    novoItem.appendChild(botaoExcluir);


    list.appendChild(novoItem);

}



// Adicionar novo item
adc.addEventListener('click', () => {


    const texto = text.value.trim();


    if(texto !== ''){


        const novoObjeto = {

            texto: texto,
            quantidade: 0,
            valor: 0,
            total: 0,
            concluido: false

        };


        itens.push(novoObjeto);


        salvarLista();


        criarItem(novoObjeto);


        text.value = '';

        text.focus();


    }

});



// Carregar itens salvos
function carregarLista(){

    itens.forEach(item => {

        criarItem(item);

    });


    atualizarTotal();

}


carregarLista();