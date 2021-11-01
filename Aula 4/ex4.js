var nome = "José";
var sobrenome = "da Silva";
var idade = 27;
var peso = 83.5;
var altura = 1.70;
var planoAtivo = true;

function calcularImc(peso, altura) {
var imc = peso/(altura*altura)
return imc;
}



console.log(nome + " " + sobrenome + " seu IMC é: " + calcularImc(peso, altura).toFixed(2));
