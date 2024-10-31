//abrir e fechar menu
let btnMenu = document.getElementById('btn_menu')
let menu = document.getElementById('menu_mobile')
let overlay = document.getElementById('overlay_menu')//clicar no overlay opacidade e fechar

btnMenu.addEventListener('click', ()=> {
    menu.classList.add('abrir_menu')
})
menu.addEventListener('click', ()=> {
    menu.classList.remove('abrir_menu')
})

// Inicialize o EmailJS com seu User ID
//https://cdn.emailjs.com/dist/email.min.js
(function(){
    emailjs.init("u214o-KY6xUsJVFlk");
 })();
 
 document.getElementById("contactForm").addEventListener("submit", function(event) {
   event.preventDefault(); // Evita o envio padrão do formulário
 
   const serviceID = "service_tj0yz0q"; // Seu Service ID no EmailJS
   const templateID = "template_a7jjnn9"; // Seu Template ID no EmailJS
 
   const templateParams = {
     name: document.getElementById("name").value,
     email: document.getElementById("email").value,
     telefone: document.getElementById("telefone").value,
     message: document.getElementById("message").value,
   };
 
   emailjs.sendForm(serviceID, templateID, templateParams)
     .then(response => {
       alert("E-mail enviado com sucesso!");
       document.getElementById("contactForm").reset(); // Limpa o formulário
     }, error => {
       alert("Erro ao enviar o e-mail. Tente novamente.");
       console.log("Erro:", error);
     });
 });