/* Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.*/

// Creo 2 array di nomi e o cognomi
let names = ['aldo', 'giovanni', 'giacomo', 'marina', 'claudia', 'katia']
console.log(names);
let surnames = ['baglio', 'storti', 'poretti', 'massironi', 'giangi', 'conti']
console.log(surnames);

// Creo l'array vuota per la lista di nomi
let list = [];
console.log(list);

// Ciclo per generare la lista random
for (let index = 0; index < names.length; index++) {
    let randNames = names[Math.floor(Math.random() * names.length)];

    let randSurnames = surnames[Math.floor(Math.random() * surnames.length)];

    let guest = randNames + ` ` + randSurnames;
    console.log(guest);
//  Inserisco gli elementi della lista nell'array
    list.push (guest);
}


