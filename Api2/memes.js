const button = document.querySelector('#changeMeme');

async function logMemes() {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const memes = await response.json();
    return memes
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

async function writeMeme() {
    const memes = await logMemes();
    const number = getRandomInt(0, memes.data.memes.length);
    const memeToShow = memes.data.memes[number].url;
    document.getElementById('meme').src = memeToShow;
    console.log(memeToShow);
}

button.addEventListener('click', writeMeme);




