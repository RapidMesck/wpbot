
const wppconnect = require('@wppconnect-team/wppconnect');

wppconnect
  .create()
  .then((client) => start(client))
  .catch((error) => console.log(error));


  function start(client) {
    client.onMessage((message) => {
      if (message.body === 'ola' || message.body === 'Ola' || message.body === 'oi' || message.body === 'Oi' || message.body === 'oI' || message.body === 'Bom Dia' || message.body === 'bom dia' || message.body === 'iniciar' || message.body === 'suporte' || message.body === 'alou' || message.body === 'Alou' ) {
        client
          .sendText(message.from, '🔱 *FullRecoil - Suporte* 🔱\n\nOlá,deixe-nos adiantar o seu apoio,diga-nos em que área está interessado.\n\n1- Financeiro\n2- Suporte Tecnico\n3- HWID\n4- Outros\n\nDepois de escolher, responder a algumas perguntas e esperar por apoio.')
          //.then((result) => {
          //  console.log('Result: ', result); //return object success
          //})
     
          //.catch((erro) => {
          //  console.error('Error when sending: ', erro); //return object error
          //});
          //client.onMessage((message) => {
        //});
      }
      if (message.body === '1') {
        client
          .sendText(message.from, '💸 *Suporte Financeiro*\n\nResponda algumas ne nossas perguntas:\n\nA) Qual produto?\nB) Qual valor?\nC) Qual meio de pagamento?\n\n*Conte sobre oque esta acontecendo:*')
      }
      if (message.body === '2') {
        client
          .sendText(message.from, '🛠 *Suporte Tecnico*\n\nResponda algumas de nossas perguntas:\n\nA) Qual produto?\nB) Verificou se esta atualizado?\nC) Esta nas exclusoes de seu anti-virus?\n\n*Conte sobre oque esta acontecendo:*')
      }
      if (message.body === '3') {
        client
          .sendText(message.from, '🖥 *Reset de HWID*\n\nPara solicitar um reset de HWID, nos mande seu email:')
      }
      if (message.body === '4') {
        client
          .sendText(message.from, '*Conte sobre o que esta acontecendo:*')
      }
    });
  
  }