import { artists } from "./desafio1/index.mjs";

artists.forEach((artist) => {
  console.log(`Nome do artista: ${artist}`);
});

for (const element of artists) {
  console.log(`Nome do artista: ${element}`);
}