// Imprimir 5 numeros usando o loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("==================");

//Imprimir na ordem decrescente 5 numeros
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// Somar 5 numeros que serão digitados no terminal
// primeiro precisamos instalar a biblioteca readline-sync: npm install readline-sync

const readLine = require("readline-sync"); //importa a biblioteca

let soma = 0;

for (let i = 1; i <= 5; i++) {
  let valor = readLine.question(`Digite o ${i}º numero inteiro: `); //pergunta o valor
  valor = parseInt(valor); //converte o valor para inteiro
  soma = soma + valor;
}

console.log("==============================");
console.log("O valor total da soma é " + soma);
console.log("============================== ");

var totalDeNumerosPares = 0;

for (let i = 1; i <= 10; i++) {
  var numero = readLine.question(`Digite o ${i}º numero inteiro: `); 
  numero = parseInt(numero); 
  if (numero % 2 === 0) {
    totalDeNumerosPares++;
  }
}

console.log("==============================");
console.log("Dos números digitados apenas " + totalDeNumerosPares + " são pares.");
console.log("============================== \n \n \n ");