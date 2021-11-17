/*- Precisamos desenvolver um menu para um microondas super veloz, onde teremos
 5 opções de comida com seus respectivos tempos pré-definidos. 
      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 
- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo 
com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir 
mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir 
a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, 
bom apetite!!!".*/


//PIPOCA
function pipoca(tempoUsuario){
    if((tempoUsuario) > (2*tempoPadrao)){
        console.log('A comida queimou');
    }
    if((tempoUsuario) < tempoPadrao){
        console.log('Tempo insuficiente')
    }
    if((tempoUsuario) > (3*tempoPadrao)){
        console.log('Kabum!')
    }
    if((tempoUsuario) == (tempoPadrao)){
        console.log('Prato pronto!')
    }
}
var tempoPadrao = 10;
pipoca(5);

//MACARRAO
function macarrao(tempoUsuario){
    if((tempoUsuario) > (2*tempoPadrao)){
        console.log('A comida queimou');
    }
    if((tempoUsuario) < tempoPadrao){
        console.log('Tempo insuficiente')
    }
    if((tempoUsuario) > (3*tempoPadrao)){
        console.log('Kabum!')
    }
    if((tempoUsuario) == (tempoPadrao)){
        console.log('Prato pronto!')
    }
}
var tempoPadrao = 8;
macarrao(8);

//CARNE
function carne(tempoUsuario){
    if((tempoUsuario) > (2*tempoPadrao)){
        console.log('A comida queimou');
    }
    if((tempoUsuario) < tempoPadrao){
        console.log('Tempo insuficiente')
    }
    if((tempoUsuario) > (3*tempoPadrao)){
        console.log('Kabum!')
    }
    if((tempoUsuario) == (tempoPadrao)){
        console.log('Prato pronto!')
    }
}
var tempoPadrao = 15;
carne(31);

//FEIJAO
function feijao(tempoUsuario){
    if((tempoUsuario) > (2*tempoPadrao)){
        console.log('A comida queimou');
    }
    if((tempoUsuario) < tempoPadrao){
        console.log('Tempo insuficiente')
    }
    if((tempoUsuario) > (3*tempoPadrao)){
        console.log('Kabum!')
    }
    if((tempoUsuario) == (tempoPadrao)){
        console.log('Prato pronto!')
    }
}
var tempoPadrao = 12;
feijao(8);

//BRIGADEIRO
function brigadeiro(tempoUsuario){
    if((tempoUsuario) > (2*tempoPadrao)){
        console.log('A comida queimou');
    }
    if((tempoUsuario) < tempoPadrao){
        console.log('Tempo insuficiente')
    }
    if((tempoUsuario) > (3*tempoPadrao)){
        console.log('Kabum!')
    }
    if((tempoUsuario) == (tempoPadrao)){
        console.log('Prato pronto!')
    }
}
var tempoPadrao = 8;
brigadeiro(17);