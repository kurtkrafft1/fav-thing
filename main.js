const storeThings = () => {
    const article = document.getElementById('putEmHere');
    const userThing = document.getElementById('favThing');
    const userPlace = document.getElementById('buyThing');
    const html = `<div class="userInput"><h5>I can get ${userThing.value} at ${userPlace.value}.</h5></div>`
    article.innerHTML += html;
    userThing.value = "";
    userPlace.value="";
}
const submitButton = document.getElementById('submitBtn');
submitButton.addEventListener('click', storeThings);