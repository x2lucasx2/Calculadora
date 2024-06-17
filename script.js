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

    let operacao = operador.value; // Obtendo o valor do <option> selecionado

    var n1 = Number(num1.value);
    var n2 = Number(num2.value);

    if (isNaN(n1) || isNaN(n2)) {
        resultado = "Erro: valor inválido";
    } else {
        if (operacao === 'soma') {
            resultado = n1 + n2;
        } else if (operacao === 'subtracao') {
            resultado = n1 - n2;
        } else if (operacao === 'multiplicacao') {
            resultado = n1 * n2;
        } else if (operacao === 'divisao') {
            if (n2 === 0) {
                resultado = "Erro: divisão por zero";
            } else {
                resultado = n1 / n2;
            }
        } else {
            resultado = "Erro: operador inválido";
        }
    }
    document.querySelector('#resultado').innerHTML = resultado;
}
console.log(operador);