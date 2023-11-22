const io = require("socket.io-client");

const socket = io('http://localhost:3000');
const user = 'teste'
const bidAmount = 10000

socket.emit('serverRequisition', { user, bidAmount });
