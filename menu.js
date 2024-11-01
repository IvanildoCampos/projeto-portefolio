// Inicialize o EmailJS com seu User ID

(function(){
    emailjs.init("u214o-KY6xUsJVFlk");
 })();

 window.onload = function() {
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita o envio padrão do formulário

      const serviceID = "service_tj0yz0q"; // Seu Service ID no EmailJS
      const templateID = "template_a7jjnn9"; // Seu Template ID no EmailJS

      /*const mensagem = document.querySelector('textarea[name="mensagem"]').value;
        console.log("Valor do textarea:", mensagem); // Imprime o valor no console*/
    
      emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
              alert("E-mail enviado com sucesso!");
              document.getElementById("contactForm").reset(); // Limpa o formulário
          }, (error) => {
              alert("Erro ao enviar o e-mail. Tente novamente.");
              console.log("Erro:", error);
          });
  });
}
  //abrir e fechar menu
let btnMenu = document.getElementById('btn_menu')
let menu = document.getElementById('menu_mobile')

btnMenu.addEventListener('click', ()=> {
    menu.classList.add('abrir_menu')
})
menu.addEventListener('click', ()=> {
    menu.classList.remove('abrir_menu')
})
console.log(menu)