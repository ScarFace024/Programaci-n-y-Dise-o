/*Implementar una función que dados dos parámetros numéricos, llamados num1 y num2,
retorne los números impares que hay entre esos dos valores (inclusive).*/

$("#Calcular").click(ScarFace);

function ScarFace(){
    let num1 = Number($("#num1").val());
    let num2 = Number($("#num2").val());
    let result = impares(num1,num2);
    
    $("#mensaje").html(result);
}
   

function impares(num1,num2){
    let mult = "";
    if (num1 > num2){
        let n = num1;
        num1 = num2;
        num2 = n;
    }

    for( let i = num1; i <= num2; i ++){
        if(i % 2 != 0){    
            mult += i + " ";
        }
    }
    return mult;
}





