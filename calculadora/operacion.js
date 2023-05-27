<script>
var operando1 = '';
var operando2 = '';
var operacion = '';

function agregarNumero(numero) {
    if (operacion === '') {
        operando1 += numero;
    } else {
        operando2 += numero;
    }
    document.getElementById('resultado').value += numero;
}

function operacion(op) {
    if (operando1 === '') {
        alert('Ingrese un número primero');
    } else {
        operacion = op;
        document.getElementById('resultado').value += op;
    }
}

function calcular() {
    if (operando2 === '') {
        alert('Ingrese un segundo número');
    } else {
        var resultado = eval(operando1 + operacion + operando2);
        document.getElementById('resultado').value = resultado;
        operando1 = resultado;
        operando2 = '';
        operacion = '';
    }
}
</script>
