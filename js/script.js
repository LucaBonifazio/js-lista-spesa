// Descrizione:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
// Quindi rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.
// Consigli:
// Come posso ciclare su un array con il ciclo while?

const arrGroceryList = [
    'Pasta',
    'Carne',
    'Pesce',
    'Verdura',
    'Frutta',
];

const eleGroceryList = document.querySelector ('.grocery-list');
let eleListItem = document.createElement("li");
eleListItem.classList.add("list-item");

let i = 0;
while (arrGroceryList[i]) {
    eleListItem.append(arrGroceryList[i]);
    i++;
}
eleGroceryList.append(eleListItem);