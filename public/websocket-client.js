// Importe a biblioteca socket.io-client
const io = require('socket.io-client');

// Conectar-se ao servidor Moleculer.js via WebSocket
const socket = io('http://localhost:3000'); // Substitua pela URL correta do seu servidor Moleculer.js

// Evento para receber mensagens do servidor
socket.on('bidConfirmation', function (message) {
  console.log(message); // Mensagem de confirmação do servidor
});

// Evento para enviar lances para o servidor
document.getElementById('submitBidButton').addEventListener('click', function () {
  const user = 'John Doe'; // Substitua com os dados do usuário
  const bidAmount = parseFloat(document.getElementById('bidAmountInput').value); // Obtenha o valor do lance do input

  // Enviar o lance para o servidor via WebSocket
  socket.emit('sendBid', { user, bidAmount });
});
