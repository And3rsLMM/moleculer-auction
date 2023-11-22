module.exports = {
  nodeID: "node-1",
  transporter: "WebSocket",
  // Restante da sua configuração
  transporter: {
    type: "WebSocket",
    options: {
      url: "ws://localhost:3000", // Configurar a URL do WebSocket
    },
  },
};
