let nome = parseInt(prompt('digite o seu nome'));
let numero1 = parseInt(prompt('qual o primeiro número'));
let numero2 = parseInt(prompt('qual o segundo número'));
let numero3 = parseInt(prompt('qual o terceiro número'));
let numero4 = parseInt(prompt('qual o quarto número'));

console.log(`Olá, ${nome}`);
operaçãoSecreta(numero1, numero2);
operaçãoSecreta(numero3,numero4);
console.log('Obrigado meu senhor JESUS CRISTO!');

function operaçãoSecreta(a, b) {
    let resultadoSecreto = (a + b);
    console.log(`o resultado de ${a} mais ${b}, é igual a ${resultadoSecreto}`);
}