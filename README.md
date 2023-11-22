# Sistema de Leilão com Moleculer.js, OpenUI5 e WebSocket

Este é um exemplo de aplicação de leilão que utiliza as tecnologias Moleculer.js, OpenUI5 e WebSocket para proporcionar uma experiência em tempo real.

## Visão Geral

O sistema consiste em três partes principais:

1. **Servidor Moleculer.js:**
   - Um servidor Moleculer.js que gerencia a lógica de leilão e comunicação entre os clientes.
   - Utiliza o transporte WebSocket para permitir uma comunicação bidirecional em tempo real.

2. **Cliente OpenUI5:**
   - Uma interface de usuário desenvolvida usando o framework OpenUI5 da SAP.
   - Permite que os usuários vejam informações do usuário, registrem lances e visualizem lances anteriores.
   - Comunica-se com o servidor Moleculer.js por meio de WebSocket.

3. **Cliente WebSocket (test.js):**
   - Um script Node.js (`test.js`) que utiliza `socket.io-client` para simular o envio de dados de outra página ou aplicação para o servidor.
   - Pode ser utilizado para testar o comportamento em tempo real do sistema, enviando requisições de servidor (`serverRequisition`) com dados simulados de usuários e lances.

## Requisitos

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)
- [Moleculer.js](https://moleculer.services/)
- [OpenUI5](https://openui5.hana.ondemand.com/)
- [Socket.IO](https://socket.io/)

## Configuração e Instalação

1. **Instalação de Dependências:**
   ```bash
   npm install

2. **Execução do servidor Moleculer:**
   ```bash
   npm run server

3. **Execução do Cliente OpenUI5:**
   ```bash
   http://localhost:3000

4. **Execução do Cliente OpenUI5:**
   ```bash
   node test

**Certifique-se de que o terminal esteja dentro dodiretório do projeto antes de executar os comandos**

## Funcionalidades

- **Registro de Lances:**
  - Os usuários podem inserir seu nome e o valor do lance.
  - Ao clicar em "Registrar Lance", o lance é enviado para o servidor e a tabela de lances é atualizada em tempo real.

- **Visualização de Lances Anteriores:**
  - A tabela exibe as informações de data, usuário e valor dos lances anteriores.

- **Simulação de Envio de Dados (test.js):**
  - Utilize o script `test.js` para simular o envio de dados de outra página ou aplicação para o servidor.

- **Comunicação em Tempo Real:**
  - A aplicação utiliza WebSocket para comunicação em tempo real entre o cliente e o servidor.
  - Confirmações de lances e atualizações da tabela são refletidas instantaneamente.

## Contribuição

Sinta-se à vontade para contribuir, relatar problemas ou sugerir melhorias. Abra uma issue ou envie um pull request!

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).