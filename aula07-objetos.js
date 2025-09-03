// 1ª forma de cirar um objeto
const pessoa1 = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

// 2ª forma de criar um objeto
let pessoa2 = new Object();

pessoa2.nome = "Maria";
pessoa2.idade = 25;
pessoa2.cidade = "Rio de Janeiro";

console.log(pessoa1);
console.log(pessoa2);

// Acessando propriedades do objeto
console.log(pessoa1.nome); // João
console.log(pessoa2["idade"]); // 25

// Adicionando novas propriedades
pessoa1.profissao = "Engenheiro";
pessoa2["profissao"] = "Médica";

console.log(pessoa1);
console.log(pessoa2);

// Modificando propriedades existentes
pessoa1.idade = 31;
pessoa2["cidade"] = "Belo Horizonte";

console.log(pessoa1);
console.log(pessoa2);

// Removendo propriedades
delete pessoa1.cidade;
delete pessoa2["profissao"];

console.log(pessoa1);
console.log(pessoa2);

// Iterando sobre as propriedades do objeto
for (let chave in pessoa1) {
    console.log(chave + ": " + pessoa1[chave]);
}

for (let chave in pessoa2) {
    console.log(chave + ": " + pessoa2[chave]);
}

console.log()

const alunoA = {nome: "Marcos", notas: [5.5, 6.5, 8.8]};
const alunoB = {nome: "Ana", notas: [3.5, 6.0, 7.5]};
const alunoC = {nome: "Jéssica", notas: [4.0, 8.0, 7.8]};
const alunoD = {nome: "Théo", notas: [8.0, 3.5, 9.8]};

const alunos = [alunoA, alunoB, alunoC, alunoD];    // Lista de Objetos

alunos.forEach(aluno => {
    console.log(`Notas do aluno ${aluno.nome} : ${aluno.notas}`);
})

