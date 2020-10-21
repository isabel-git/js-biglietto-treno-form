// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall’utente
// Aggiungiamo una piccola animazione al click su “Crea” e “Annulla”, se clicchiamo su annulla dobbiamo ripulire il form.
var costo;
var tiketNome = document.getElementById("tiketNome"); // nome passeggero
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

// bottone genera
var bottoneGen = document.getElementById("mybutton");

bottoneGen.addEventListener("click",
function() {
  el.className = "visible";
  tiketNome.innerHTML = nome.value;
  tiketKm.innerHTML = km.value;
  tiketSelect.innerHTML = mySelect.options[mySelect.selectedIndex].value;

  // numero carozza
  document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;


  // codice del biglietto
  document.getElementById('codiceCP').innerHTML = range(90000,100000);
  function range(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// costo base
costo = (0.21 * parseInt(km.value));
console.log("costo base",costo);

// condizioni eta utente
if (mySelect.value == "Minorenne") {
  // se l'utente è minorenne
  costo = costo - ((costo * 20) / 100);
  console.log("costo scontato del 20%: ",costo);
}  else if (mySelect.value === "Over 65") {
  // se l'utente è over 65
  costo = costo - ((costo * 40) / 100);
  console.log("costo scontato del 40%: ",costo);
}

// dire all'utente il costo del biglietto
document.getElementById("costo").innerHTML = costo.toFixed(2) + "&#8364;";
} );

// bottone annulla
var bottoneRes = document.getElementById("myResetbutton");

bottoneRes.addEventListener("click",
  function() {
    document.getElementById("myForm").reset();
    el.className = "hidden";
});
