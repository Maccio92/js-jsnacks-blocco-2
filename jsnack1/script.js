/* Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.*/

let names = ['aldo', 'giovanni', 'giacomo', 'marina', 'claudia', 'katia']
console.log(names);
let surnames = ['baglio', 'storti', 'poretti', 'massironi', 'giangi', 'conti']
console.log(surnames);

// let randNames = names[Math.floor(Math.random() * names.length)];
// console.log(randNames);

// let randSurnames = surnames[Math.floor(Math.random() * surnames.length)];
// console.log(randSurnames);

let list = [];
console.log(list);

for (let index = 0; index < names.length; index++) {
    let randNames = names[Math.floor(Math.random() * names.length)];

    let randSurnames = surnames[Math.floor(Math.random() * surnames.length)];

    // console.log(randNames);
    // console.log(randSurnames);
    
    let guest = randNames + ` ` + randSurnames;
    console.log(guest);

    list.push (guest);
}


