//Declarar função sem parâmetros e sem retorno
function exibirMensagemBoasVindas(){
  console.log("Seja bem vindo(a) ao curso de JavaScript!");
}

exibirMensagemBoasVindas();

//Declarar função com parâmetros e sem retorno
function exibirMensagemPersonalizada(nome){
  console.log(`Seja bem vindo(a) ao curso de JavaScript, ${nome}!`);
}

exibirMensagemPersonalizada("Ana");
exibirMensagemPersonalizada("João");
exibirMensagemPersonalizada("Maria");


//Declarar função com parâmetros e com retorno
function calcularMediaAritmetica(n1, n2, n3){
  const soma = n1 + n2 + n3;
  const media = soma / 3;
  return media;
}

const mediaAluno1 = calcularMediaAritmetica(7, 8, 6);
console.log(`Média do Aluno 1: ${mediaAluno1}`);

const mediaAluno2 = calcularMediaAritmetica(5, 9, 10);
console.log(`Média do Aluno 2: ${mediaAluno2}`);


/* function quantificaNumerosPares(lista){
  let totalDePares = 0;
  for(let i = 0; i < lista.length; i++){
    if(lista[i] % 2 == 0){
      totalDePares++;
    }
  }

  return totalDePares;
}

const lista = [22, 15, 81, 14, 77, 26, 66, 88, 2];

let resultado = quantificaNumerosPares(lista);
console.log(resultado); */