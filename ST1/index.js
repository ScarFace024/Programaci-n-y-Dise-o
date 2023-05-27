$("#Calcular").click(ScarFace);

function ScarFace(){
    let texto = ($("#text").val());

    let text = texto.length;
    for (let i = text; i >= 0; i--){
        $("#mensaje").append(texto.charAt(i))
    }
}







