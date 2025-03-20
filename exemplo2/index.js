import { div, sub, sum, mult } from "./modules/functions.mjs";

let resultadoSoma = sum(2, 4);
let resultadoMult = mult(25, 5);
let resultadoSub = sub(25, 5);
let resultadoDiv = div(25, 5);

console.log(`Soma: ${resultadoSoma}`);
console.log(`Multiplicação: ${resultadoMult}`);
console.log(`Subtração: ${resultadoSub}`);
console.log(`Divisão: ${resultadoDiv}`);
