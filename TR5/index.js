$("#Calcular").click(TomarDatos);

function TomarDatos() {
    let n1 = Number($("#num1").val());
    let n2 = Number($("#num2").val());
    let n3 = Number($("#num3").val());

    if (n1 > n2){
        let n = n1;
        n1 = n2;
        n2 = n;
    }
    for( let i = n1; i <= n2; i ++){
        if(i % n3 == 0){
            $("#mensaje").append(i + "<br>");
        }
    }
}


