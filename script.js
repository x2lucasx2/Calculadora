var num1;
var num2;
var operador;
var resultado;

function apagarcampos() {
    num1 = document.querySelector('#num1').value = '';
    num2 = document.querySelector('#num2').value = '';
    document.querySelector('#resultado').innerHTML = '';
}
function calcular() {
    num1 = document.querySelector('#num1');
    num2 = document.querySelector('#num2');
    operador = document.querySelector('#options');
    let result = document.querySelector('#resultado');

    let operacao = operador.value; // Obtendo o valor do <option> selecionado

    let n1 = Number(num1.value);
    let n2 = Number(num2.value);

    switch(operacao){
        case 'soma':
            resultado = n1 + n2;
            break;
        case 'subtracao':
            resultado = n1 - n2;
            break;
        case 'multiplicacao':
            resultado = n1 * n2;
            break;
        case 'divisao':
            if(n1 === 0 && n2 === 0){
                resultado.style.display = 'block'
                resultado = "Erro: Divisao por zero";
            } else {
                resultado = n2 / n1
            }
            break;
        default:
            resultado = "Erro: Não selecionou a operacao";
        }
        result.style.display = 'block'
        result.textContent = `a ${operacao} deu ${resultado}`;
        }

    // if(n1 === NaN && n2 === NaN ){
    //     resultado = "Erro: valor inválido";
    // } else {
    //     if (operacao === 'soma') {
    //         resultado = n1 + n2 + n2;
    //     } else if (operacao === 'subtracao') {
    //         resultado = n1 - n2;
    //     } else if (operacao === 'multiplicacao') {
    //         resultado = n1 * n2;
    //     } else if(operacao === 'divisao') {
    //         if (n2 === '' && n1 === '') {
    //             resultado = "Erro: divisão por zero";
    //         } else if(n2 === 0 && n1 === 0){
    //            resultado = "Erro: Valor vazio"
    //         } else {
    //             resultado = n2 / n1
    //         }
    //     } else {
    //         resultado = "Erro: operador inválido";
    //     }
    // }
    // document.querySelector('#resultado').innerHTML = resultado;
    // }