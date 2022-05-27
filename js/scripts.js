const frutis = {
    'Grapefruit':"https://cdn.pixabay.com/photo/2016/02/24/17/31/fruit-1220367_960_720.png",
    'Orange':'https://cdn.pixabay.com/photo/2016/01/02/01/59/oranges-1117628_960_720.jpg',
    'Lime': 'https://cdn.pixabay.com/photo/2021/04/29/07/36/lime-6215762_960_720.jpg',
    'Apricot': 'https://cdn.pixabay.com/photo/2017/07/20/18/40/apricots-2523272_960_720.jpg',
    'Peach': 'https://cdn.pixabay.com/photo/2017/08/11/17/41/peach-2632182_960_720.jpg',
    'Plum':'https://cdn.pixabay.com/photo/2016/11/29/17/48/plums-1870672_960_720.jpg',
    'Apple': 'https://cdn.pixabay.com/photo/2016/08/12/22/38/apple-1589874_960_720.jpg',
    'Grapes': 'https://cdn.pixabay.com/photo/2018/09/13/17/20/grapes-3675295_960_720.jpg',
    'Pineapple':'https://cdn.pixabay.com/photo/2016/11/18/13/03/pineapple-1834329_960_720.jpg',
    'Strawberry': 'https://cdn.pixabay.com/photo/2021/09/23/05/30/strawberry-6648685_960_720.jpg',
    'Cherry': 'https://cdn.pixabay.com/photo/2017/10/31/17/44/cherries-2905964_960_720.jpg',
    'Pear': 'https://cdn.pixabay.com/photo/2017/04/13/23/02/pear-2228918_960_720.jpg',
};
const vegetables = [
    { word: 'Tomatoes', url:'https://cdn.pixabay.com/photo/2016/08/01/17/08/tomatoes-1561565_960_720.jpg'},
    { word: 'Celery', url:'https://cdn.pixabay.com/photo/2019/04/04/01/02/celery-juice-4101755_960_720.jpg'},
    { word: 'Carrots', url:'https://cdn.pixabay.com/photo/2017/06/09/16/39/carrots-2387394_960_720.jpg'},
    { word: 'Potatoes', url:'https://cdn.pixabay.com/photo/2016/08/11/08/43/potatoes-1585060_960_720.jpg'},
    { word: 'Pumpkin', url:'https://cdn.pixabay.com/photo/2019/09/05/18/20/harvest-4454745_960_720.jpg'},
    { word: 'Artichoke', url:'https://cdn.pixabay.com/photo/2019/10/18/17/17/artichoke-4559730_960_720.jpg'},
    { word: 'Spinach', url:'https://cdn.pixabay.com/photo/2017/04/09/21/35/spinach-2216967_960_720.jpg'},
    { word: 'Onions', url:'https://cdn.pixabay.com/photo/2016/05/16/22/47/onions-1397037_960_720.jpg'},

];



const container = document.querySelector('main');

function speakerWord (text) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}

function createDiv(word){
    const div = document.createElement('div');
    div.className = 'voice';
    const text = document.createElement('p');
    text.id = 'text';
    text.textContent = word;
    const speaker = document.createElement('img');
    speaker.src = './images/voice.svg';
    speaker.alt = 'speaker';
    speaker.className = 'speaker';

    speaker.addEventListener('click', ()=>{
        speakerWord(word);    
    });

    div.append(text, speaker);

    return div;
}

function checkWord(word, button, input) {
    const userWord = input.value.toLowerCase();

    console.log(userWord);

    const title = document.createElement('h2');
    title.className = 'result';
    const p = document.createElement('p');
    p.className = 'pResult';
    p.textContent = `La paralabra era ${ word }`;

    if (userWord === word.toLowerCase()) {
        title.textContent = 'CORRECT';   
    }
    else {
        title.textContent = 'INCORRECT'; 
    }

    button.textContent = 'Next Word';

    const divContainer = document.createElement('div');
    divContainer.className = 'word';
    divContainer.append(title, p, button);

    container.innerHTML = '';
    container.appendChild(divContainer);

}

function writes(word, button) {
    const voice = document.querySelector('.voice');
    voice.innerHTML = '';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'remember?'
    input.id = 'userWord';

    button.textContent = 'Check';

    button.addEventListener('click', ()=>{
        checkWord(word, button, input);    
    });

    voice.appendChild(input);
}

function start(category){

    const word = vegetables[1].word;
    const url = vegetables[1].url;  
    
    const divContainer = document.createElement('div');
    divContainer.className = 'word';
    const image = document.createElement('img');
    image.src = url;
    image.alt = word;
    
    const div = createDiv(word);

    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Writes';

    button.addEventListener('click', ()=>{
        writes(word, button);    
    });

    divContainer.append(image, div, button);

    container.innerHTML = '';
    container.appendChild(divContainer);



}
