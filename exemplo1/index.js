// console.log("Hello World!");

const aluno = "Você";
const escola = "Senãpo Penhapo";

let nota1 = 8.7;
let nota2 = 2.5;
let media = (nota1 + nota2) / 2;

console.log(`Aluno: ${aluno}`);
console.log(`Escola: ${escola}`);

console.log(`Nota1: ${nota1}\nNota2: ${nota2}`);
console.log(`media: ${media}`);

console.log(
  `-------------------------- Exemplo de OBJETO -------------------------------`
);
let dados = {
  nome: "Melson Nandela",
  idade: 79,
};
console.log(dados.nome);
console.log(dados.idade);
console.table(dados);

console.log(
  `-------------------------- OUTRO EXEMPLO RUIM -------------------------------`
);

let situacao;

media >= 7 ? (situacao = "aprovado") : (situacao = "reprovado");

console.log(`O aluno ${aluno} está ${situacao}.\nMédia: ${media}`);
