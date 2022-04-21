const userName = document.querySelector('#name').value;
const userEmail = document.querySelector('#email').value;
const userMessage = document.querySelector('#message').value;


const SendMessage = (userName, userEmail, userMessage) => {
    Email.send({
        SecureToken: '7244f41c-0e4c-437f-a56e-820987871848',
        To: 'facundo.rocha@outlook.com',
        From: userEmail,
        Subject: "Nuevo mensaje",
        Body: `Nombre: ${userName}`
            + `<br> Email: ${userEmail}`
            + `<br> Mensaje: ${userMessage}`
    }).then(
        message => alert(message)
    );
}