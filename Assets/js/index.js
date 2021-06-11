/**
 * Grid layout
 */
import Portafolio from '../Api/Porfolio.json';

const cards = document.getElementById('cards');
const cards1 = document.getElementById('cards1');
const cards2 = document.getElementById('cards2');

let render = null;

Portafolio.forEach(item => {
    if(item.card_1 != undefined){
        for(let i = 0; i < item.card_1.length; i++){
            cards.innerHTML += `
            <div class="card_${ item.card_1[i].id }">
                <img src="${item.card_1[i].image}" alt="" id="image">
                <div class="hover_card${item.card_1[i].id}">
                    <div>
                        <h4 class="text-white title-card">${item.card_1[i].title}</h4>
                        <p class="text-white subtitle-card">${item.card_1[i].subtitle}</p>
                    </div>
                </div>
            </div>`;
        }
    }
});

Portafolio.forEach(item => {
    if(item.card_2 != undefined) {
        for(let i = 0; i < item.card_2.length; i++){
            cards1.innerHTML += `
            <div class="card_${ item.card_2[i].id }">
                <img src="${item.card_2[i].image}" alt="" id="image">
                <div class="hover_card${item.card_2[i].id}">
                    <div>
                        <h4 class="text-white title-card">${item.card_2[i].title}</h4>
                        <p class="text-white subtitle-card">${item.card_2[i].subtitle}</p>
                    </div>
                </div>
            </div>`;
        }
    }
});

Portafolio.forEach(item => {
    if(item.card_3 != undefined) {
        for(let i = 0; i < item.card_3.length; i++){
            cards2.innerHTML += `
            <div class="card_${ item.card_3[i].id }">
                <img src="${item.card_3[i].image}" alt="" id="image">
                <div class="hover_card${item.card_3[i].id}">
                    <div>
                        <h4 class="text-white title-card">${item.card_3[i].title}</h4>
                        <p class="text-white subtitle-card">${item.card_3[i].subtitle}</p>
                    </div>
                </div>
            </div>`;
        }
    }
});

/**
 * Function Menú
 */
document.getElementById('hamburger').addEventListener('click', openMenu)

let bandera = false;
function openMenu(){
    if (bandera){
        document.getElementById('menu').style.display = 'none'
        bandera = false
    }else {
        document.getElementById('menu').style.display = 'block'
        bandera = true
    }
}