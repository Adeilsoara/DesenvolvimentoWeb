/* Arrays em JavaScript */

let arr = new Array();
let arr2 = [];

let frutas = ["Maçã", "Laranja", "Tomate"];

document.write(frutas[0]);
document.write(frutas[2]);

let numeros = [5, 4, 3, 2, 1];
/* inserir elementos no array - push*/
numeros.push(7);
numeros.pop();
numeros.unshift(0);
/* document.write(numeros.length) */

var arrayLetras = [];
while (arrayLetras.length <= 5) {
  arrayLetras.push(prompt("Letras: "));
}

document.write(`${arrayLetras}`);

let letras = ["m", "a", "n", "o", "e", "l"];

let maiusculas = letras.map((letra) => letra.toUpperCase());
document.write(`Letras MAIÚSCULAS: ${maiusculas}`);

let outrosNumeros = [1, 2, 3, 4, 5];
let dobro = [];

for (let i = 0; i < outrosNumeros.length; i++) {
  dobro.push(outrosNumeros[i] * 2);
}

document.write(`Array com os valores dobrados: ${dobro}`);

let pessoas = ["Maria", "João", "Pedro", "Josefa"];
for (let i = 0; i < pessoas.length; i++) {
  document.write(`${pessoas[i]} ${i} <br>`);
}
