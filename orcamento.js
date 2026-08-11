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

function agendarWhatsApp() {

    // ==========================================
    // NÚMERO DO SEU WHATSAPP
    // ==========================================

    const numeroWhatsApp = "5585982113637";


    // ==========================================
    // CAPTURANDO OS DADOS DO FORMULÁRIO
    // ==========================================

    const nome = document.getElementById("nome").value.trim();

    const telefone = document.getElementById("telefone").value.trim();

    const servico = document.getElementById("servico").value;

    const prazo = document.getElementById("prazo").value;

    const valor = document.getElementById("valor").value;

    const observacao = document.getElementById("obs").value.trim();


    // ==========================================
    // VALIDAÇÃO
    // ==========================================

    if (nome === "") {

        alert("Por favor, informe seu nome.");

        document.getElementById("nome").focus();

        return;
    }


    if (telefone === "") {

        alert("Por favor, informe seu WhatsApp.");

        document.getElementById("telefone").focus();

        return;
    }


    if (servico === "Selecione") {

        alert("Por favor, selecione o projeto desejado.");

        document.getElementById("servico").focus();

        return;
    }


    if (observacao === "") {

        alert("Por favor, descreva seu projeto.");

        document.getElementById("obs").focus();

        return;
    }


    // ==========================================
    // MENSAGEM PARA O WHATSAPP
    // ==========================================

    const mensagem = `Olá, Jairison! 👋

Gostaria de solicitar um orçamento para um projeto.

━━━━━━━━━━━━━━━━━━
📋 *DADOS DO CLIENTE*
━━━━━━━━━━━━━━━━━━

👤 *Nome:* ${nome}

📱 *WhatsApp:* ${telefone}

━━━━━━━━━━━━━━━━━━
💻 *DETALHES DO PROJETO*
━━━━━━━━━━━━━━━━━━

🚀 *Projeto:* ${servico}

⏱️ *Prazo desejado:* ${prazo}

💰 *Orçamento disponível:* ${valor}

📝 *Descrição do projeto:*
${observacao}

━━━━━━━━━━━━━━━━━━

Aguardo seu retorno para conversarmos sobre o projeto. 🚀`;


    // ==========================================
    // CODIFICANDO A MENSAGEM
    // ==========================================

    const mensagemCodificada = encodeURIComponent(mensagem);


    // ==========================================
    // CRIANDO O LINK DO WHATSAPP
    // ==========================================

    const linkWhatsApp =
        `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;


    // ==========================================
    // ABRINDO O WHATSAPP
    // ==========================================

    window.open(linkWhatsApp, "_blank");
}