const URL = "https://random.dog/woof.json";

//constantes
const btn = document.getElementById('btn');
const mainCards = document.querySelector("main");

array= [];
const getCharacter = async (URL) => {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
}

mainCards.innerHTML = "";
getCharacter(URL);

const generarCard = (character) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const imgH = document.createElement('img');
    imgH.classList.add('img-card');
    imgH.src = character.image;
    imgH.alt = character.name;
    

   
    
    //se agregan los elementos  a la carta
    card.appendChild(imgH);
    
    //y se agrega la carta al main
    mainCards.appendChild(card);
}

const getAllCharacteres = () => {
    const perro = getCharacter(URL);
    
}

btn.addEventListener('click',generarCard);