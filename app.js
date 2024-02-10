const passwordDay = document.querySelector('.passwordDay');

let data = new Date();
let dia = String(data.getDate()).padStart(2, '0');
let mes = String(data.getMonth() + 1).padStart(2, '0');

let dataAtual = Number(dia + mes) ;
let senhaDoDia = dataAtual + 2011;


passwordDay.textContent = senhaDoDia;

console.log(dataAtual);