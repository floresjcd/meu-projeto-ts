import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(texto: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(texto, (resposta: string) => resolve(resposta));
  });
}

async function main() {
    let continuar = true;

    while (continuar) {
        console.clear();

        console.log("=================================");
        console.log("       MENU INTERATIVO");
        console.log("=================================");
        console.log("1 - Somar dois números");
        console.log("2 - Verificar se é par ou ímpar");
        console.log("3 - Calcular fatorial");
        console.log("4 - Mostrar tabuada");
        console.log("5 - Sair");
        console.log("=================================");

        const opcao = await question('Escolha uma opção (1-5): ');

        switch (opcao.trim()) {
            case '1': await somar(); break;
            case '2': await parOuImpar(); break;
            case '3': await fatorial(); break;
            case '4': await tabuada(); break;
            case '5':
                console.log('\n👋 Saindo do programa...');
                continuar = false;
                break;
            default:
                console.log('\n❌ Opção inválida!');
        }

        if (continuar) {
            await question('\nPressione ENTER para voltar ao menu...');
        }
    }

    rl.close();
}

async function somar() {
    console.log('\n--- Soma de números ---');
    const num1 = parseFloat(await question('Digite o primeiro número: '));
    const num2 = parseFloat(await question('Digite o segundo número: '));
    console.log(`\nResultado: ${num1} + ${num2} = ${num1 + num2}`);
}

async function parOuImpar() {
    console.log('\n--- Par ou Ímpar ---');
    const num = parseInt(await question('Digite um número: '));
    if (isNaN(num)) return console.log('❌ Número inválido.');
    console.log(`\n${num} é ${num % 2 === 0 ? 'PAR' : 'ÍMPAR'}`);
}

async function fatorial() {
    console.log('\n--- Fatorial ---');
    const num = parseInt(await question('Digite um número inteiro positivo: '));
    if (isNaN(num) || num < 0) return console.log('❌ Número inválido.');

    let resultado = 1;
    for (let i = 2; i <= num; i++) resultado *= i;
    console.log(`\nFatorial de ${num} é ${resultado}`);
}

async function tabuada() {
    console.log('\n--- Tabuada ---');
    const num = parseInt(await question('Digite um número: '));
    if (isNaN(num)) return console.log('❌ Número inválido.');

    console.log(`\nTabuada do ${num}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

main().catch(console.error);