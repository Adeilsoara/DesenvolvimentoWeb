function ola() {
  alert("Olha aí um evento em JS!!O onclick");
}

function over() {
  document.write("Mouse over");
}

function out() {
  document.write("Mouse out");
}

function carregarPagina() {
  alert("Página Carregada!");
}

function mudarTexto() {
  var x = document.getElementById("fname")
  x.value  = x.value.toUpperCase()
}
/* Manipulação do DOM -> Document Object Model */
function somar() {
  var num1 = document.getElementById("num1").value
  var num2 = document.getElementById("num2").value

  var resultado = parseInt(num1) + parseInt(num2)
  document.querySelector(".resultado").innerHTML = resultado
}