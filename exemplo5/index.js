import chalk from "chalk";

console.log("Sextou");
console.log("Gerenciando pacotes com NPM");

const nome = "Kbc";
const idade = 2;

if (idade >= 18) {
  console.log(chalk.blue(`O ${nome} tem ${idade} anos. É maior de idade`));
} else {
  console.log(chalk.yellow(`O ${nome} tem ${idade} anos. É menor de idade`));
}
