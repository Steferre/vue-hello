/*
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
*/
// per iniziare bisogna istanziare Vue
const app = new Vue(
    {
        el: '#container',
        data: {
            title: (prompt('Inserisci un titolo a tua scelta!')).toUpperCase()
        }
    }
)