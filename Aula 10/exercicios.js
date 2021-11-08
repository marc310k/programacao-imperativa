let minhaLista = ['pão', 'queijo', 'presunto', 'maionese', 'alface', 'tomate'];

// Join
let porVirgula = minhaLista.join();
console.log('O método Join junta os elementos de um array');
console.log(porVirgula);

// Pop
let ultimoItem = minhaLista.pop();
console.log('O método Pop elimina o útimo elemento de um array');
console.log(minhaLista);
console.log(ultimoItem);

// Push
console.log('O método Push adiciona um ou mais elementos no final do array');
minhaLista.push('coca-cola');
console.log(minhaLista);

// Shift
let primeiroItem = minhaLista.shift();
console.log('O método Shift elimina o primeiro elemento do array');
console.log(minhaLista);
console.log(primeiroItem);

// Unshift 
console.log('O método Unshift adiciona um ou mais elementos ao início do array');
minhaLista.unshift('bolo');
console.log(minhaLista);