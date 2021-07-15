/*
Il programma dovrà chiedere all'utente il numero di chilometri
che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il 
prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
*/

var chilometri = parseInt(prompt('Quanti km vuoi percorrere?'));
var eta = parseInt(prompt('Inserisci la tua eta'));
var prezzo = 0.21;

var prezzoTotale = parseInt(chilometri * prezzo);
console.log('Sub Totale ' + prezzoTotale + '€');

if (eta < 18) {
    var sconto = ((prezzoTotale * 20) / 100);
    console.log('Lo sconto è di € ' + sconto);
    var prezzoMinorenne = (prezzoTotale - sconto);
    console.log('Totale da pagare ' + prezzoMinorenne);
} else if (eta >= 65) {
    var sconto = ((prezzoTotale * 40) / 100);
    console.log('Lo sconto è di € ' + sconto);
    var prezzoOver65 = (prezzoTotale - sconto);
    console.log('Totale da pagare ' + prezzoOver65);
}