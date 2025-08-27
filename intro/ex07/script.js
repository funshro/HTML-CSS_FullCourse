function mensagemErro(){
    let erro = document.getElementById("erro").textContent = 'Tá digitando errado isso daí hein.'
    
    let textoDigitado = document.getElementById("texto-digitado").value;
    let respostas = document.getElementById("respostas");
    let listaRespostas = document.createElement("li");

    respostas.appendChild(listaRespostas);
    listaRespostas.textContent = textoDigitado;

}