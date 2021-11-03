self.addEventListener('push', () => {
    self.registration.sendNotification('Mensagem Teste', {});
});