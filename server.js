require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000;

app.use(express.json());

const transport = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
})

app.post('/enviar-email', (req, res) => {
    const {nome, email, telefone, mensagem} = req.body;

    const mailOptions = {
        from:'ivanildocampos88@gmail.com',
        to: 'ivanildocampos88@gmail.com',
        subject: 'Nova mensagem do formulario de contato',
        text: `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`,
    }

    transport.sendMail(mailOptions, (error, info) => {
        if(error) {
            return res.status(500).send('Erro ao enviar o email.');
        }
        res.status(200).send('Enviado com sucesso!');
    });
});

app.listen(PORT, ()=> {
    console.log(`servidor rodando na porta ${PORT}`)
});