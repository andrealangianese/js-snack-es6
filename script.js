// Snack 1
//  Creare un array di oggetti: 
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.


const biciDaCorsa = [
  {
    nome: "Bianchi Oltre",
    peso: 7.2
  },
  {
    nome: "Pinarello Dogma",
    peso: 6.8
  },
  {
    nome: "Specialized Tarmac",
    peso: 7.0
  },
  {
    nome: "Trek Emonda",
    peso: 6.9
  },
  {
    nome: "Cannondale SuperSix EVO",
    peso: 6.7
  },
  {
    nome: "Colnago V3Rs",
    peso: 6.5
  },
  {
    nome: "Scott Addict RC",
    peso: 6.6
  },
  {
    nome: "Wilier Zero SLR",
    peso: 6.9
  }
];

console.log(biciDaCorsa);

// non posso assegnare un array vuoto, perchè devo fare un confronto con qualcosa
let biciLighter = biciDaCorsa[0];

//cicliamo la lista delle bici

for (let i =  0; i < biciDaCorsa.length; i++) {

    // se la bici che stiamo confrontando ha un peso inferiore della bici più leggera trovata finora
    if (biciDaCorsa[i].peso < biciLighter.peso) {
        // la bici più leggera sarà la bici [i]
        biciLighter = biciDaCorsa[i];
    }
}

console.log(biciLighter);

// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// BONUS 
 
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.