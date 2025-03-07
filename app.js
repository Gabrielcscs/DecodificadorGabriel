var textoCriptografado;
var textoDescriptografado;
var textoDigitado = document.getElementById("input__texto");
var text__p = document.getElementById("text__p");
var img = document.getElementById("conteudo__boneco");

// verifica se tem caracteres especiais
function verificarCarac (str){
  return /[^a-zA-z0-9\s]/.test(str);
}

// verifica se esta em caixa alta
function verificarCaixa (str){
  return str === str.toLowerCase();
}
var textoTemp = textoDigitado.value;
var textoCarac = verificarCarac(textoTemp);
var text = verificarCaixa(textoTemp);

// Função que Criptografa o texto
function criptografar() {

  var textoTemp = textoDigitado.value;
  var textoCarac = verificarCarac(textoTemp);
  var textoCaixa = verificarCaixa(textoTemp);


   if(textoDigitado.value.length == 0){
    text__p.textContent = "Nenhuma mensagem Encontrada";
  } 
   else if (textoCarac == true){
    text__p.textContent = "Seu texto contem caracteres especiais, nosso decodificador não suporta esses caracteres"
  } 
  else if (textoCaixa == false){
    text__p.textContent = "Seu texto contem letras maiúsculas, nosso decodificador não suporta esses caracteres"
  }
  else {
    var text = textoDigitado.value;
    var textoAlterado = text
        .replace(/i/igm, "imes")
        .replace(/a/igm, "ai")
        .replace(/e/igm, "enter")
        .replace(/o/igm, "ober")
        .replace(/u/igm, "ufat");

    img.style.display = "none";
    text__p.textContent = textoAlterado;
  
  }
}

// Função que descriptografa o texto
function descriptografar(){
  var textDesc = textoDigitado.value;
    var textoNorm = textDesc
        .replace(/ai/igm, "a")
        .replace(/enter/igm, "e")
        .replace(/imes/igm, "i")
        .replace(/ober/igm, "o")
        .replace(/ufat/igm, "u");
    text__p.textContent = textoNorm;

}



