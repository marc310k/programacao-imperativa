let nome = "José";
let sobrenome = "da Silva";
let idade = 27;
let peso = 83.5;
let altura = 1.70;
let planoAtivo = true;

function calcularImc(peso, altura) {
let imc = peso/(altura*altura)

console.log(imc);
return imc;
}


calcularImc(peso, altura);