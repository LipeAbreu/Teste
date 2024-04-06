let nome = prompt('digite o seu nome');
let numero1 = parseInt(prompt('qual o primeiro número'));
let numero2 = parseInt(prompt('qual o segundo número'));
let numero3 = parseInt(prompt('qual o terceiro número'));
let numero4 = parseInt(prompt('qual o quarto número'));
let protagonista = prompt('Digite o nome de um protagonista');
let rival = prompt('Digite o nome de um rival');
let pet = prompt('Digite o nome de um pet');
let figurante = prompt('Digite o nome de um figurante');
let poder1 = prompt('Digite o nome de um poder ou habilidade');
let poder2 = prompt('Digite o nome de mais um poder ou habilidade');
let poder3 = prompt('Digite o nome de outro um poder ou habilidade');
let poder4 = prompt('Digite o nome do ultimo poder ou habilidade');
let personagens = [protagonista, rival, pet, figurante];
let poderes = [poder1, poder2, poder3, poder4];
let Observação = ('O Dia Está Lindo!')

console.log(`Olá, ${nome}`);
console.log(Observação);
operaçãoSecreta(numero1, numero2);
operaçãoSecreta(numero3,numero4);
console.log('Obrigado meu senhor JESUS CRISTO!');
sorteio(personagens);
console.log(`O seu personagem é o ${resultado}`);
sorteio(poderes);
console.log(`O seu poder é o ${resultado}`);

function operaçãoSecreta(a, b) {
    let resultadoSecreto = (a + b);
    console.log(`o resultado de ${a} mais ${b}, é igual a ${resultadoSecreto}`);
}

function sorteio(lista){
    let quantidadeDeElementos = lista.lenght;
    let resultadoDoSorteio = parseInt(Math.random() * quantidadeDeElementos + 1);
    console.log(`${resultadoDoSorteio}, ${lista[resultadoDoSorteio]}`);
    let resultado = lista[resultadoDoSorteio];
    return resultado;
}

//Obrigado JESUS !!!