// MD1

function teste1(x, y){
return console.log(x - y)
}
teste1(1, 4);

// MD2

function teste2(x, y){
    return console.log(x * 2, x / 2)


}
teste2(10)

// EX1

function polegadaCentimetro(polegada, centimetro){
    return console.log(polegada * 2.54)
    
    }
    polegadaCentimetro(5)

// EX2

    function stringUrl(string){
return console.log( "http://www." + string + ".com.br")
    }
stringUrl("playground");

// EX3

    function frase(string2){
        return console.log(string2 + "!")
            }
        frase("playground");

// EX4

function idadeCachorros(idade) {
    return console.log(idade*7);
}
idadeCachorros(10);

// EX5

function horaTrabalho(salario) {
    return console.log(salario/160);
}

horaTrabalho(3000)

// EX6

function imc(alturacm, pesokg){
    return console.log(pesokg / (alturacm / 100 * alturacm / 100));
}

imc(173, 90);

// EX 7

console.log('alfabeto'.toUpperCase())

// EX 8

console.log(typeof 37);
console.log(typeof "etc");
console.log(typeof true);
console.log(typeof Math.sin);

// EX 9
    function calcularCicunferencia(raio){
      return 2 * Math.PI * raio;
  }
       console.log(calcularCicunferencia(25))


// EXTRAS

console.log( Math.random() );

//

function cumprimentar() {
    console.log("Olá, seja bem vindo!");
   }
   
   cumprimentar()

//

function cumprimentarA(nome) {
    const mensagem = "Olá, seja bem vindo! "
    console.log(mensagem + nome);
   }
   
   cumprimentarA("William")
   cumprimentarA("Danilo")

   //

   function multiplicarPorDoisESomarCinco(x) {
    return 2 * x + 5
   }
   multiplicarPorDoisESomarCinco(1)
   multiplicarPorDoisESomarCinco(5)
   //multiplicarPorDoisESomarCinco(Erick) // Erick não é um número
  // const Erick= 5
   //multiplicarPorDoisESomarCinco(Erick) //agora sim

   console.log(multiplicarPorDoisESomarCinco(5));

   const valor = multiplicarPorDoisESomarCinco(Erick)
console.log(valor);