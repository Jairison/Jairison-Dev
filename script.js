const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 0 25px rgba(212,175,55,.5)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="none";

});

});

const titulo=document.querySelector("h1");

setInterval(()=>{

titulo.style.textShadow="0 0 25px #d4af37";

setTimeout(()=>{

titulo.style.textShadow="none";

},800);

},2500);