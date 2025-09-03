// Imprimir 5 numeros inteiros na ordem crescente usando while
let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}

console.log();

// Imprimir 5 numeros inteiros na ordem decrescente usando while
contador = 5;

while (contador >= 1) {
    console.log(contador);
    contador--;
}

console.log();
// Ler numeros do usuario e imprimir na tela, o loop deve parar quando o usuario digitar 0
const input = require('readline-sync');

while (true) {
    let numero = input.questionInt("Digite um número (ou 0 para sair): ");
    console.log(numero);
    if (numero === 0) {
        console.log("Saindo do loop.");
        break; // Sai do loop quando o número 0 é digitado
    }
}

const readline = require("readline-sync");

let soma = 0;
contador = 0;

do {
  let valor = parseInt(readline.question("Digite um numero inteiro: "));
  soma += valor;
  contador++;
} while (contador < 5);

console.log("O valor total da soma é " + soma);
