let listaEl = [];
let input;
let stop = false;

while (!stop) {

    input = prompt("Inserisci un prodotto da acquistare o digita STOP per terminare") 

    if (input.toUpperCase() === "STOP") {
    stop = true;
    }
    listaEl.push(input);
}
console.log(listaEl);

