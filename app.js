let data = new Date();
let dia = String(data.getDate());
let mes = String(data.getMonth() + 1);

let dataAtual = Number(dia + mes) ;

function calcularSoma() {
  // Obtém o valor inserido pelo usuário
  const numeroInserido = document.getElementById("numeroUsuario").value;
  
  // Número estático
  let numeroEstatico = dataAtual; // Você pode alterar esse valor conforme necessário
  
  // Calcula a soma
  let soma = parseInt(numeroInserido) + numeroEstatico;
  
  // Exibe o resultado
  if(soma) {
    document.getElementById("resultado").innerText = "pdv@" + soma;
  } else {
    document.getElementById("resultado").innerText = "pdv@";
  }
}
function copyToClipboard() {
  const content = document.getElementById('resultado').innerText;
  
  navigator.clipboard.writeText(content)
  .then(() => {
      alert('Texto copiado para a área de transferência!');
  })
  .catch(err => {
      console.error('Erro ao copiar texto: ', err);
  });

}