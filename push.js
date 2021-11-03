var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys(); // gerar as chaves

let vapidKeys = {
    publicKey: 'BI8zmqqYdbMXr0KOpJZQidi-sMs8QoT5ggB7VwXqnAHHvCRdEwal3XwezBlNa3McUNfW6zJbMpdDQ_YcHlOsOXE',
    privateKey: 'BvLa4APudwyvW0p-1ADNMuE1T-0PFXEHIn67Y4tkhsg'
  };

// console.log(vapidKeys);

push.setVapidDetails('mailto:teste@teste.com.br', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/cx1UsP2ORZ0:APA91bH5vGQ2HhFrjqAaOlS2HrkDFOCocjxmRWRgUvKX-TWwC5_hSuMuSCLe1Z1tREZRwvUWjMoFjsxwAAY8PPlX9uswat7li4SH97B21t1NB_M5UkpeTgjIZbM6MB9E8j7P0kcIvcut","expirationTime":null,"keys":{"p256dh":"BDxCJQhrP9brX46vhmPrs6-_JTTyn1xCNjm531keHSPVOqY8CD5e1XwKVlYk0futRqhy6f0Ew4tSJUYSF0cfQGo","auth":"_HmeU0gMkKQYoYjuCE8XKw"}} // usuario que vão receber a notificaçào
push.sendNotification(sub, 'Mensagem de exemplo');

/*
{
  publicKey: 'BI8zmqqYdbMXr0KOpJZQidi-sMs8QoT5ggB7VwXqnAHHvCRdEwal3XwezBlNa3McUNfW6zJbMpdDQ_YcHlOsOXE',
  privateKey: 'BvLa4APudwyvW0p-1ADNMuE1T-0PFXEHIn67Y4tkhsg'
}
*/

//Assim que o usuario me da permissão
//{"endpoint":"https://fcm.googleapis.com/fcm/send/cx1UsP2ORZ0:APA91bH5vGQ2HhFrjqAaOlS2HrkDFOCocjxmRWRgUvKX-TWwC5_hSuMuSCLe1Z1tREZRwvUWjMoFjsxwAAY8PPlX9uswat7li4SH97B21t1NB_M5UkpeTgjIZbM6MB9E8j7P0kcIvcut","expirationTime":null,"keys":{"p256dh":"BDxCJQhrP9brX46vhmPrs6-_JTTyn1xCNjm531keHSPVOqY8CD5e1XwKVlYk0futRqhy6f0Ew4tSJUYSF0cfQGo","auth":"_HmeU0gMkKQYoYjuCE8XKw"}}