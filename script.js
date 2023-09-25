let num1;
let num2;
let operador;
let resultado;

function apagarcampos() {
    num1 = document.querySelector('#num1').value = '';
    num2 = document.querySelector('#num2').value = '';
}
function calcular() {
    num1 = document.querySelector('#num1');
    num2 = document.querySelector('#num2');
    operador = document.querySelector('#options');

    operador = operacao.value; //Obtendo o valor do <option> selecionado

    var n1 = Number(num1.value);
    var n2 = Number(num2.value);

    if (operador == 'soma') {
        resultado = n1 + n2;
    }
    if (operador == 'subtracao') {
        resultado = n1 - n2;
    }
    if (operador == 'multiplicacao') {
        resultado = n1 * n2;
    }
    if (operador == 'divisao') {
        resultado = n1 / n2;
    }
    document.querySelector('#resultado').innerHTML = resultado;
}






console.log(operador);




















/*function calcular() {
    num1 = document.querySelector(".num1").value;
    num2 = document.querySelector(".num2").value;
    var resultado = parseInt(num1) + parseInt(num2);
    document.querySelector(".resultado").innerHTML = resultado;
}
function options() {
    let select = document.querySelector("#options").value;
    switch (options) {
        case soma:
            num1 = document.querySelector(".num1").value;
            num2 = document.querySelector(".num2").value;
            var resultado = parseInt(num1) + parseInt(num2);
            document.querySelector(".resultado").innerHTML = resultado;
            break;

        case subtracao:
            num1 = document.querySelector(".num1").value;
            num2 = document.querySelector(".num2").value;
            var resultado = parseInt(num1) - parseInt(num2);
            document.querySelector(".resultado").innerHTML = resultado;
            break;

        case divisao:
            num1 = document.querySelector(".num1").value;
            num2 = document.querySelector(".num2").value;
            var resultado = parseInt(num1) / parseInt(num2);
            document.querySelector(".resultado").innerHTML = resultado;
            break;
        case multiplicacao:
            num1 = document.querySelector(".num1").value;
            num2 = document.querySelector(".num2").value;
            var resultado = parseInt(num1) * parseInt(num2);
            document.querySelector(".resultado").innerHTML = resultado;
            break;
    }

}*/



