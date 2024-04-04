let nome = parseInt(prompt('digite o seu nome'));
let numero1 = parseInt(prompt('qual o primeiro número'));
let numero2 = parseInt(prompt('qual o segundo número'));
let numero3 = parseInt(prompt('qual o terceiro número'));
let numero4 = parseInt(prompt('qual o quarto número'));
let protagonista = parseFloat(prompt('Digite o nome de um protagonista'));
let rival = parseFloat(prompt('Digite o nome de um rival'));
let pet = parseFloat(prompt('Digite o nome de um pet'));
let figurante = parseFloat(prompt('Digite o nome de um figurante'));
let poder1 = parseFloat(prompt('Digite o nome de um poder ou habilidade'));
let poder2 = parseFloat(prompt('Digite o nome de mais um poder ou habilidade'));
let poder3 = parseFloat(prompt('Digite o nome de outro um poder ou habilidade'));
let poder4 = parseFloat(prompt('Digite o nome do ultimo poder ou habilidade'));
let personagens = [protagonista, rival, pet, figurante];
let poderes = [poder1, poder2, poder3, poder4];

console.log(`Olá, ${nome}`);
operaçãoSecreta(numero1, numero2);
operaçãoSecreta(numero3,numero4);
console.log('Obrigado meu senhor JESUS CRISTO!');
sorteio(personagens);
console.log(`O seu personagem é o ${personagens[resultadoDoSorteio]}`);
sorteio(poderes);
console.log(`O seu poder é o ${poderes[resultadoDoSorteio]}`);

function operaçãoSecreta(a, b) {
    let resultadoSecreto = (a + b);
    console.log(`o resultado de ${a} mais ${b}, é igual a ${resultadoSecreto}`);
}

function sorteio(lista){
let quantidadeDeElementos = lista.lenght;
let resultadoDoSorteio = parseInt(Math.random() * quantidadeDeElementos + 1);
return resultadoDoSorteio;
}