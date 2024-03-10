var nomeGlobal;
var mensagemGlobal;
var total;

function comecar(){
    var nome = document.getElementById("exampleFormControlInput1").value; 
    show(nome);
}

function show(nome){
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div"); 
    if(nome && nome.trim() !== ""){
    div.style.display = "flex"
    document.getElementById("exampleFormControlInput1").style.background = "lightgreen"
    var mostrardiv = document.getElementById("selects");
    mostrardiv.style.display = "flex";

    var h2refeicao = document.getElementById("h2-refeicao")
    h2refeicao.style.display = "flex"

    }else{
        document.getElementById("error")
        document.getElementById("exampleFormControlInput1").style.background = "lightpink"
        var mostrardiv = document.getElementById("selects");
        mostrardiv.style.display = "none";

        var h2refeicao = document.getElementById("h2-refeicao")
        h2refeicao.style.display = "none"
    }
}

function fechar(){
    document.getElementById("error").style.display = "none";
    document.getElementById("exampleFormControlInput1").style.background = "lightpink"
}

function calcularTotal() {
    var selectPratos = document.getElementById("selectPrato");
    var selectBebidas = document.getElementById("selectBebida");
    var selectSobremesas = document.getElementById("selectSobremesa");
    var resultadoSpan = document.getElementById("resultado");

    var total = 0;

    switch (selectPratos.value) {
        case "AK":
            total += 650;
            break;
        case "M4A1":
            total += 320;
            break;
        case "AWP":
            total += 1000;
            break;
        case "Faca":
            total += 3300;
            break;
        case "Luva":
            total += 720;
            break;
    }

    // Restante do seu código...

    resultadoSpan.textContent = "O total é: " + total;
}

function showTotal() {
    var AK = 650;
    var M4A1 = 320;
    var AWP = 1000;
    var Faca = 3300;
    var Luva = 720;

    var total = AK + M4A1 + AWP + Faca + Luva;
    document.getElementById("total").textContent = "A soma total é: " + total;
}


var nomeGlobal;
var mensagemGlobal;

function enviar(){
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;

    nomeGlobal = nome;
    mensagemGlobal = mensagem;

    document.getElementById("confNome").textContent = nome;
    document.getElementById("confMsg").textContent = mensagem;
}

function enviar(){
    var numeroTelefone = "5541988725555";
    console.log(nomeGlobal, mensagemGlobal)
    var linkWhatsApp = 
    "https://wa.me/" + 
    numeroTelefone + 
    "?text=Valor total da compra: R$5990,00     /  Data da aquisição 11/03/2024" 

    mensagemGlobal;

    window.open(linkWhatsApp, "_blank")
}