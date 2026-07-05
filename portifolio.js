const skills = document.querySelectorAll(".skill");

skills.forEach(skill=>{

skill.addEventListener("mouseenter",()=>{

skill.style.boxShadow="0 0 25px rgba(212,175,55,.45)";

});

skill.addEventListener("mouseleave",()=>{

skill.style.boxShadow="none";

});

});

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 15px 40px rgba(212,175,55,.2)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="none";

});

});