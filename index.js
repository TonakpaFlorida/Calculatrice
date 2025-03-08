const touches = [...document.querySelectorAll('.bouton')]; 
const listeKeycode = touches.map(touche => touche.dataset.key);

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.tiString() 
})
 
document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)
})

const calculer = (valeur) => {
    if(listeKeycode.includes(valeur)) {
        switch(valeur) {
            
        }
        
    }
}
