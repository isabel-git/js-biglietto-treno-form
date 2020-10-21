// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall’utente
// Aggiungiamo una piccola animazione al click su “Crea” e “Annulla”, se clicchiamo su annulla dobbiamo ripulire il form.

// nome passeggero
var tiketNome = document.getElementById("tiketNome");
var nome = document.getElementById("campoNome");
var el = document.getElementById("tiket");
console.log("nome",nome.value);


// km da percorrere
var tiketKm = document.getElementById("tiketKm")
var km = document.getElementById("campoKm");
console.log("km",km.value);

// eta dell'utente
var tiketSelect = document.getElementById("tiketSelect")
var mySelect = document.getElementById("mySelect");
console.log("eta",mySelect.value);


var bottoneGen = document.getElementById("mybutton");

bottoneGen.addEventListener("click",
function() {
  tiketNome.innerHTML = nome.value;
  tiketKm.innerHTML = km.value;
  tiketSelect.innerHTML = mySelect.options[mySelect.selectedIndex].value;
  el.className = "visible";
} );
