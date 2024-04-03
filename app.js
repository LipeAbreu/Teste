let protagonista = parseFloat(prompt('Digite o nome de um protagonista bom'));
let rival = parseFloat(prompt('Digite o nome de um rival'));
let mascote = parseFloat(prompt('Digite o nome de um mascote'));
let figurante = parseFloat(prompt('Digite o nome de um figurante'));
let poder1 = parseFloat(prompt('Digite o nome de um poder'));
let poder2 = parseFloat(prompt('Digite o nome de mais um poder'));
let poder3 = parseFloat(prompt('Digite o nome de mais um poder'));
let poder4 = parseFloat(prompt('Digite o nome de outro poder'));
let personagens = [protagonista, rival, mascote, figurante];
let poderes = [poder1, poder2, poder3, poder4]

Sorteio(personagens);
console.log(`O seu personagem é ${personagens[resultadoDoSorteio]}`);
Sorteio(poderes);
console.log(`O seu poder é ${poderes[resultadoDoSorteio]}`);


function Sorteio(lista){
let tamanhoDaLista = lista.length;
let resultadoDoSorteio = parseInt(Math.random() * tamanhoDaLista + 1);
 return resultadoDoSorteio;
}