let idade = 17;

if (idade >= 18) {
    console.log("Você é obrigatório a votar nas eleições.");
} else if (idade >= 16 && idade < 18) {
    console.log("Você pode votar nas eleições, porém não é obrigatório.")
} else {
    console.log("Você não pode votar.")
}

let temperatura = 30;

if (temperatura < 15) {
    console.log("Está frio.");
} else if (temperatura < 25) {
    console.log("Clima agradável.");
} else {
    console.log("Está quente!");
}

let diaDaSemana = 3;
let dia;

switch (diaDaSemana) {
    case 1:
        dia = "Domingo";
        break;
    case 2:
        dia = "Segunda-feira";
        break;
    case 3:
        dia = "Terça-feira";
        break;
    case 4:
        dia = "Quarta-feira";
        break;
    case 5:
        dia = "Quinta-feira";
        break;
    case 6:
        dia = "Sexta-feira";
        break;
    case 7:
        dia = "Sábado";
        break;
    default:
        dia = "Dia inválido";
}

console.log("Hoje é " + dia);
