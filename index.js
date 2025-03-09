const touches = [...document.querySelectorAll('.bouton')]; 
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('ecran')

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
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.index0f(valeur);
                const touche = touches [indexKeycode]
                ecran.textContent += touche.innerHTML;
        }
        
    }
}

window.addEventListener('error', (e) => console.log(e))