let nome = "victor";

let nomeArray = [...nome];

console.log(nomeArray);

for (i = 0; i < nomeArray.length; i++) {
 
    if (nomeArray[i].indexOf("a") != -1){
    console.log("seu nome possui a letra 'a'");
  }

}
