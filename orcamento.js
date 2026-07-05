const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

event.preventDefault();

alert("Solicitação enviada com sucesso! Em breve entrarei em contato.");

formulario.reset();

});

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){

e.preventDefault();

const nome = document.querySelector('input[type="text"]').value;
const email = document.querySelector('input[type="email"]').value;
const telefone = document.querySelector('input[type="tel"]').value;
const projeto = document.querySelector("select").value;
const descricao = document.querySelector("textarea").value;

const mensagem =
`*NOVO ORÇAMENTO - PRIMECODE*

👤 Nome: ${nome}

📧 Email: ${email}

📱 Telefone: ${telefone}

💻 Projeto: ${projeto}

📝 Descrição:
${descricao}`;

const numero = "5585982113637"; // Seu WhatsApp

window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`);

});