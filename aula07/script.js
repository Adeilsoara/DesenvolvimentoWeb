/* Laço de repetição while e do while */

/* Faça um script usando o while que imprima os números de 1 à 10 */
var cont = 1;
while (cont <= 10) {
  document.write(`${cont} olá mundo <br>`);
  cont++;
}

/* Faça um script que some os valores de 1 à 5, saída esperada: 1 + 2 + 3 + 4 + 5 = 15 */

var num = 0;
var contador = 0;
while (num <= 5) {
  num = num + 1;
  document.write(`${num}`);
}

/* Faça um script que enquanto o salário for menor que 5000 ele vá aumentando
  de 100 em 100 e pare quando atigir esse valor */

var salario = 1000;
while (salario < 5000) {
  salario = salario + 100;
  document.write(`O salário ainda é: R$ ${salario} <br>`);
}

/* Imprima os números pares de 1 até 10 usando while */
var contador = 0;
var num = 20;
while (num < 20 && num % 2 == 0) {
  document.write(`${num}`);
  contador++;
}
