var arrayColors = ["red", "black"];
var arraySeeds = ["\u2660", "\u2663", "\u2665", "\u2666"];
var arrayNumber =["1","2","3","4","5","6","7","8","9","10","J","Q","K"];

window.onload = () =>{

        var randColor = random(arrayColors);
        var randSeed = random(arraySeeds);
        var randNumb = random(arrayNumber);

	    card = document.createElement("div");       
        card.className = "cards";
        card.style.height = "740px";
        card.style.width = "550px";
        card.style.borderRadius = "10%";
        card.style.backgroundColor = "white";        

        seed = document.createElement("div");   
        seed.className = "seed";     
        seed.style.fontSize = "200px";
        colore = document.createTextNode(randSeed); 
        seed.appendChild(colore);
        seed.style.color = randColor;

        seed2 = document.createElement("div");   
        seed2.className = "seed2";
        seed2.style.fontSize = "200px";
        colore2 = document.createTextNode(randSeed);        
        seed2.appendChild(colore2);
        seed2.style.color = randColor;

        numb = document.createElement("div");   
        numb.className = "numb";
        numb.style.fontSize = "300px";
        numero = document.createTextNode(randNumb);        
        numb.appendChild(numero);
        numb.style.color = "black";

        card.appendChild(numb);
        card.appendChild(seed);
        card.appendChild(seed2);
        document.body.appendChild( card );
    }   

function random(a){
    return a[Math.floor(Math.random() * a.length)]
}