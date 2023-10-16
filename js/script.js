let listaEl = [];
let input;
let stop = false;

while (!stop) {

    input = prompt("Inserisci un prodotto da acquistare o digita STOP per terminare") 
    if (input.toUpperCase() === "STOP") {
    stop = true;
    }  else if (input !== '') {
        listaEl.push(input);
    }

}
console.log(listaEl);


let li = document.getElementById('list')

for (let i = 0; i < listaEl.length; i++) {
    let listItem = document.createElement('li');
    listItem.innerHTML = listaEl[i];
    li.appendChild(listItem);
}