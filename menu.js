let btnMenu = document.getElementById('btn_menu')
let menu = document.getElementById('menu_mobile')
let overlay = document.getElementById('overlay_menu')//clicar no overlay opacidade e fechar

btnMenu.addEventListener('click', ()=> {
    menu.classList.add('abrir_menu')
})
menu.addEventListener('click', ()=> {
    menu.classList.remove('abrir_menu')
})

//captura de dados do formulário e envio
document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const formData = {
      nome: event.target[0].value,
      email: event.target[1].value,
      celular: event.target[2].value,
      mensagem: event.target[3].value,
    };
  
    try {
      const response = await fetch('/enviar-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('E-mail enviado com sucesso!');
      } else {
        alert('Erro ao enviar o e-mail.');
      }
    }
     catch (error) {
      alert('Erro ao enviar o e-mail.');
    }
  });