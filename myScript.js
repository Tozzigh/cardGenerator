var arraySeeds = ["\u2660", "\u2663", "\u2665", "\u2666"];
var arrayNumber =["1","2","3","4","5","6","7","8","9","10","J","Q","K"];

window.onload = () =>{
    createCard();
}      

function createCard(){
    let number = random(arrayNumber);
    let seed = random(arraySeeds);
    let coloR = (seed == "\u2660") || (seed == "\u2663") ? "black" : "red";

    let seedCard = document.querySelectorAll("span")[0]; seedCard.style.color = coloR; seedCard.innerHTML = seed;
    let numberCard = document.querySelectorAll("span")[1].innerHTML = number; 
    let seedCard1 = document.querySelectorAll("span")[2]; seedCard1.style.color = coloR; seedCard1.innerHTML = seed;
    
}
function random(a){
    return a[Math.floor(Math.random() * a.length)]
}