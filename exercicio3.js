function transformaNome(nome) {
  let nomeArray = nome.toUpperCase().split("");
  let nomeLength = nomeArray.filter((nomeArr) => nomeArr === "A");
  console.log(nomeLength);
  
  if (nomeLength.length > 0) {
    console.log("Existe A na palavra");
  } else {
    console.log("Não existe A na palavra");
  }

  console.log(`A letra A está sendo chamada: ${nomeLength.length} vezes`);
}

let alfabeto = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

transformaNome("alves");
