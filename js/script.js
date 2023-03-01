// CONSEGNA
// Data una lista della spesa (memorizzata in un array), stampare sulla pagina (anche brutalmente, basta che si vedano) 
// gli elementi della lista individualmente con un ciclo while.

// PSEUDOCODICE
/*

x creo un array di stringhe contenenti la lista della spesa
x seleziono la mia lista <ul>
- finché non popolo tutta la lista con tutti i valori dell'array
    ° creo un tag <li>
    ° ci inserisco l'elemento dell'array
    ° aumento una variabile indice per uscire dal ciclo


*/

// - creo un array di stringhe contenenti la lista della spesa
let shoppingList = ['latte', 'pane', 'pasta', 'mele', 'acqua', 'pomodori'];

// - seleziono la mia lista <ul>
const listEl = document.getElementById('list');
let i = 0;


// - finché non popolo tutta la lista con tutti i valori dell'array
do {
    // ° creo un tag <li>
    let newLiEl = document.createElement('li');
    listEl.append(newLiEl);
    // ° ci inserisco l'elemento dell'array
    newLiEl.innerHTML = shoppingList[i];
    // ° aumento una variabile indice per uscire dal ciclo
    i++; 
} while(i<shoppingList.length)

