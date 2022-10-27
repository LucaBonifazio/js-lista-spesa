// Descrizione:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
// Quindi rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.
// Consigli:
// Come posso ciclare su un array con il ciclo while?

const arrShoppingList = [
    'Antipasti',
    'Pasta',
    'Carne',
    'Pesce',
    'Verdura',
    'Frutta',
    'Dolce',
];

const eleShoppingList = document.querySelector ('.shopping-list');

let i = 0;
while (i < arrShoppingList.length) {
    const eleListItem = document.createElement("li");
    eleListItem.classList.add("list-item");
    eleListItem.append(arrShoppingList[i]);
    eleShoppingList.append(eleListItem);
    i++;
}
