/*
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/
// per iniziare bisogna istanziare Vue
const app = new Vue(
    {
        el: '#container',
        data: {
            title: (prompt('Inserisci un titolo a tua scelta!')).toUpperCase(),
            titleStyle: 'titleStyle',
            newImg: 'img/bridge.jpg',
            jsWrapper: 'wrapper',
            imgDimension: 'imgDim'
        },
    }
)