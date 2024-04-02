let nome = prompt('digite o seu nome');
let numero1 = prompt('qual o primeiro número')
let numero2 = prompt('qual o segundo número')
let numero3 = prompt('qual o terceiro número')
let numero4 = prompt('qual o quarto número')

console.log(`Olá, ${nome}`);
operaçãoSecreta(numero1, numero2);
operaçãoSecreta(numero3,numero4)

function operaçãoSecreta() {
    let resultadoSecreto = (a + b);
    console.log(`o resultado de ${a} vezes ${b}, é igual a ${resultadoSecreto}`);
}