document
.getElementById("formulario")
.addEventListener("submit",function(e){

e.preventDefault();

const nome=document.getElementById("nome").value;

const telefone=document.getElementById("telefone").value;

const servico=document.getElementById("servico").value;

const data=document.getElementById("data").value;

const hora=document.getElementById("hora").value;

const obs=document.getElementById("obs").value;

const mensagem=
`Olá! Gostaria de agendar um horário.

👤 Nome: ${nome}

📱 WhatsApp: ${telefone}

💅 Serviço: ${servico}

📅 Data: ${data}

🕒 Horário: ${hora}

📝 Observações: ${obs}`;

const numero="5585982113637"; // coloque seu número

const url=`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

window.open(url,"_blank");

});

function agendarWhatsApp() {

    alert("Seja muito bem-vindo!\n\nSerá um prazer te atender. Você será direcionado ao WhatsApp para realizar o seu orçamento");

    window.open(
    "https://wa.me/5585982113637?text=Olá!%20Tudo%20bem?%20Gostaria%20de%20solicitar%20um%20orçamento.%20Poderia%20me%20informar%20o%20Valor%20e%20e%20prazo%20de%20entrega?%20",
    "_blank"
);

}