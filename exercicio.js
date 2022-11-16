let nome = "victor";

let nomeArray = nome.toUpperCase().split("");

let arrayVazio = [];

console.log(nomeArray);

for (i = 0; i < nomeArray.length; i++) {
    arrayVazio[nomeArray[i]] = arrayVazio[nomeArray[i]] || 0;
    arrayVazio[nomeArray[i]]++;
}

for (let i in arrayVazio) {
    console.log(`A letra ${i} foi repetida ${arrayVazio[i]} `)
}


