const passwordDay = document.querySelector('.passwordDay');

let data = new Date();
let dia = String(data.getDate());
let mes = String(data.getMonth() + 1);

let dataAtual = Number(dia + mes) ;

function calcularSoma() {
  // Obtém o valor inserido pelo usuário
  var numeroInserido = document.getElementById("numeroUsuario").value;
  
  // Número estático
  var numeroEstatico = dataAtual; // Você pode alterar esse valor conforme necessário
  
  // Calcula a soma
  var soma = parseInt(numeroInserido) + numeroEstatico;
  
  // Exibe o resultado
  if(soma) {
    document.getElementById("resultado").innerText = "Resultado: " + soma;
  } else {
    document.getElementById("resultado").innerText = "Resultado: ";
  }
}
