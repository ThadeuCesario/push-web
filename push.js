var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys(); // gerar as chaves

let vapidKeys = {
    publicKey: 'BI8zmqqYdbMXr0KOpJZQidi-sMs8QoT5ggB7VwXqnAHHvCRdEwal3XwezBlNa3McUNfW6zJbMpdDQ_YcHlOsOXE',
    privateKey: 'BvLa4APudwyvW0p-1ADNMuE1T-0PFXEHIn67Y4tkhsg'
  };

console.log(vapidKeys);

push.setVapidDetails('mailto:teste@teste.com.br', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {}; // usuario que vão receber a notificaçào
push.sendNotification(sub, 'Mensagem de exemplo');

/*
{
  publicKey: 'BI8zmqqYdbMXr0KOpJZQidi-sMs8QoT5ggB7VwXqnAHHvCRdEwal3XwezBlNa3McUNfW6zJbMpdDQ_YcHlOsOXE',
  privateKey: 'BvLa4APudwyvW0p-1ADNMuE1T-0PFXEHIn67Y4tkhsg'
}
*/