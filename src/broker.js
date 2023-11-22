const { ServiceBroker } = require("moleculer");
const { Server } = require("socket.io");
const http = require("http");
const io = require("moleculer-io"); // Importe o módulo moleculer-io

// Configuração do servidor HTTP
const server = http.createServer();

// Crie uma instância do ServiceBroker com o transporte WebSocket
const broker = new ServiceBroker({
  nodeID: "node-1",
  // Restante da sua configuração
});

broker.createService({
  name: "websocket",
  started() {
    // Inicialize o serviço de WebSocket usando o moleculer-io
    this.io = new Server(server, {
      cors: {
        origin: "*",
      },
    });

    // Eventos do serviço de WebSocket
    this.io.on("connection", (socket) => {
      // Evento quando um cliente se conecta
      this.logger.info("Cliente WebSocket conectado:", socket.id);

      // Evento para receber lances do frontend
      socket.on("sendBid", ({ user, bidAmount }) => {
        // Você pode processar os dados do lance aqui
        this.logger.info("Lance recebido de", user, "no valor de", bidAmount);

        // Enviar uma confirmação de volta para o frontend, se necessário
        socket.emit("bidConfirmation", "Lance registrado com sucesso");
      });

      socket.on("serverRequisition", async ({user, bidAmount }) => {
          try{
            let data = {date: new Date().toLocaleString(),
                     user,
                     bidAmount,
                   }
            console.log(data)

            //this.logger.info("Resultado do serviço tableService:", result);
            this.io.emit("insertOnTable", data);
            socket.emit("bidConfirmation", "Lance registrado com sucesso");
          } catch (error) {
            this.logger.error("Erro ao chamar o serviço tableService:", error.message);
            socket.emit("bidConfirmation", "Erro ao processar a requisição");
          }
        });
        

      // Evento quando um cliente se desconecta
      socket.on("disconnect", () => {
        this.logger.info("Cliente WebSocket desconectado:", socket.id);
      });
    });
  },
});



// Inicie o servidor HTTP
server.listen(3000);

// Inicie o ServiceBroker
broker.start();
module.exports = broker;
