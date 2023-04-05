/* Máscara para formatar CEP */

const cep = document.getElementById("cep");
cep.addEventListener("keyup", formatarCEP);

function formatarCEP(e) {
  var v = e.target.value.replace(/\D/g, "");
  v = v.replace(/^(\d{5})(\d{3})/, "$1-$2");
  e.target.value = v;
}

/* Máscara para formatar Data */
const data = document.getElementById("data");
data.addEventListener("keyup", formatarData);

function formatarData(e) {
  var v = e.target.value.replace(/\D/g, "");
  v = v.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
  e.target.value = v;
}

/* Máscara para formatar CPF */
const cpf = document.getElementById("cpf");
cpf.addEventListener("keyup", formatarCPF);

function formatarCPF(e) {
  var v = e.target.value.replace(/\D/g, "");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  e.target.value = v;
}
