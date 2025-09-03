// 1ª forma de criar um array : array de numeros
let numeros = [10, 20, 30, 40, 50];


// 2ª forma de criar um array : array de frutas
let frutas = new Array("maçã", "banana", "laranja", "uva");


// 3ª duas forma de criar um array vazio : array de carros e array de cidades
let carros = [];
let cidades = new Array();


//Inserindo elementos em um array vazio : carros
carros.push("Toyota");
carros.push("Honda");
carros.push("Ford");
carros.push("Chevrolet");

//Inserir elementos do array pelo índice : cidades
cidades[0] = "São Paulo";
cidades[1] = "Rio de Janeiro";
cidades[2] = "Belo Horizonte";
cidades[3] = "Curitiba";


//Arrays podem conter diferentes tipos de dados
let misturado = [42, "texto", true, null, { nome: "objeto" }, [1, 2, 3]];


//Imprimindo os arrays completo
console.log("Array de Números:", numeros);
console.log("Array de Frutas:", frutas);
console.log("Array de Carros:", carros);
console.log("Array de Cidades:", cidades);
console.log("Array Misturado:", misturado);



//Verificando o tamanho do array
let tamanhoFrutas = frutas.length;
console.log("Tamanho do array de frutas:", tamanhoFrutas);



//Modificando um elemento do array
carros[1] = "Volkswagen"; // Alterando "Honda" para "Volkswagen"
console.log("Array de Carros após modificação:", carros);



//Adicionando um elemento no final do array
cidades.push("Porto Alegre");
console.log("Array de Cidades após adicionar Porto Alegre:", cidades);

//Removendo o último elemento do array
carros.pop();
console.log("Array de Carros após remover o último elemento:", carros);



//Iterando sobre os elementos do array
for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta no índice", i, "é", frutas[i]);
}

//Usando for...of para iterar sobre o array
for (let fruta of frutas) {
    console.log("Fruta:", fruta);
}



//Usando forEach para iterar sobre o array
frutas.forEach(fruta => {
    console.log(fruta);
});
