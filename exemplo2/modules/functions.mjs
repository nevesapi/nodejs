export const sum = function (nota1, nota2) {
  return nota1 + nota2;
};
export const mult = function (nota1, nota2) {
  return nota1 * nota2;
};
export const sub = function (nota1, nota2) {
  return nota1 - nota2;
};
export const div = function (nota1, nota2) {
  return nota1 / nota2;
};

const operacoes = { soma, mult };

export default operacoes;
