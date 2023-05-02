// 1

const title1 = document.querySelector("#gen-1");

title1.innerHTML = "Generasión 1 Pokimon"

// 2

const title2 = document.querySelectorAll("#gen-1 + .infocard-list-pkmn-lg > .infocard");

title2.forEach(element => element.style.backgroundColor = '#D4E015');

// 3

console.log(window.location.href)

// 4

console.log(window.location.hostname)

// 5

const images = document.querySelectorAll("img");

// console.log(images)

// images.forEach(element => console.log(element))

// Uno de esos dos debería ser lo que se pide en el enunciado. No lo entendí muy bien

// 6

images.forEach(element => element.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif")