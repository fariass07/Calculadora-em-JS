console.log('Olá, tudo bem-vindo à minha primeira aplicação em JS!');
// Mensagem de apresentação no console;

let num1 = 15; // Atribui um valor para a variável num1.
let num2 = 10; // Atribui um valor para a variável num2.

function somar() // Função utilizada para fazer a somatória das variáveis;
{
    return num1 + num2; // Ação em que é calculada a soma dos dois valores
}

const resultado = somar(); // A variável resultado guarda o valor da soma em uma variável CONST, acredito que seja uma forma mais fácil de entender o código;

console.log('A soma dos números:', num1, 'e', num2, 'resulta em: ', resultado);
// Impressão do resultado da função 'somar'

// Eu usei LET para poder fazer a alteração mais tarde caso seja necessário, mas caso haja um momento que o valor
// tenha de ser fixo, substituiria LET por CONST.

// Caso tenha feito alguma alteração no código, utilize CTRL + S para salvar alterações, então poderá rodar o código da forma certa. :)