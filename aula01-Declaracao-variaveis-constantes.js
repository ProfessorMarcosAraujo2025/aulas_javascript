// Declaração de variáveis com diversos tipos de dados
let nomeDoAluno = "Marcos Araujo"; // String (texto)
let idadeDoAluno = 15; // Número Inteiro
let alturaDoAluno = 1.60; // Número Real
var alunoTrabalha = false; // Dado booleano

nomeDoAluno = "Felipe Araujo"; // mostra que a variavel pode ser alterada

//Declarar constante
const maxFaltas = 0.25;

//maxFaltas = 0.30; // A linguagem nao permite alterar um dado declarado como constante

//Imprimir os resultados
console.log(nomeDoAluno);
console.log(idadeDoAluno);
console.log(alturaDoAluno);
console.log(alunoTrabalha);
console.log(maxFaltas);

//Modelo personalizado de impressão
console.log("Nome do aluno: ", nomeDoAluno);
console.log("Idade: ", idadeDoAluno);
console.log("Altura: ", alturaDoAluno);
console.log("aluno trabalha? ", alunoTrabalha);
console.log("Percentual máximo de faltas: ", maxFaltas);

//Outra forma de personalizar a impressão
console.log(`O aluno ${nomeDoAluno} tem ${idadeDoAluno} anos de idade, sua altura é ${alturaDoAluno}m e atualmente ${alunoTrabalha} trabalha.`)

// Para rodar o código execute: node nome_do_arquivo.js