let a = 7;
let b = 22;

//Operadores Aritméticos
let soma = a + b;
let subtracao = a - b;
let produto = a * b;
let divisao = b / a;
let resto = b % a;

console.log("======== Operadores Aritméticos ========");
console.log(`A soma de ${a} + ${b} = ${soma}`);
console.log(`A subtracao de ${a} - ${b} = ${subtracao}`);
console.log(`O produto de ${a} x ${b} = ${produto}`);
console.log(`A divisão de ${b} / ${a} = ${divisao}`);
console.log(`O resto da divisao de ${b} / ${a} é igual a ${resto} \n`);

//Operadores Relacionais
console.log("======== Operadores Relacionais ========");
let resultado1 = a > b;   //maior
let resultado2 = a < b;   //menor 
let resultado3 = a >= b;  //maior ou igual
let resultado4 = a <= b;  //menor ou igual
let resultado5 = a != b;  //diferente
let resultado6 = a == b;  //igual

console.log(`${a} > ${b} = ${resultado1}`);
console.log(`${a} < ${b} = ${resultado2}`);
console.log(`${a} >= ${b} = ${resultado3}`);
console.log(`${a} <= ${b} = ${resultado4}`);
console.log(`${a} != ${b} = ${resultado5}`);
console.log(`${a} == ${b} = ${resultado6} \n`);


console.log("======== Operadores Lógicos ========");
//Operador 'e' usa-se: && 
//Operador 'ou' usa-se: ||
//Operador 'negação' sua-se: !

//Obs: consultar tabela verdade

//Operador lógico 'E'
console.log(`${a} > 4 e ${b} < 30 = ${a > 4 && b < 30}`);
console.log(`${a} > 4 e ${b} > 30 = ${a > 4 && b > 30}`);
console.log(`${a} < 4 e ${b} < 30 = ${a < 4 && b < 30}`);
console.log(`${a} < 4 e ${b} > 30 = ${a < 4 && b > 30} \n`);

//Operador lógico 'OU'
console.log(`${a} > 4 ou ${b} < 30 = ${a > 4 || b < 30}`);
console.log(`${a} > 4 ou ${b} > 30 = ${a > 4 || b > 30}`);
console.log(`${a} < 4 ou ${b} < 30 = ${a < 4 || b < 30}`);
console.log(`${a} < 4 ou ${b} > 30 = ${a < 4 || b > 30} \n`);

// Operador Negação
console.log(`Negar essa expressão: ${a} > 5 é dizer que ela é ${!(a > 5)}`);
console.log(`Negar essa expressão: ${b} > 45 é dizer que ela é ${!(b > 45)} \n`);