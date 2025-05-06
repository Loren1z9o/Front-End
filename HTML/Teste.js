document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const input = form.querySelector('input');
    const chatContainer = document.querySelector('.borda');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // impede o recarregamento da página

        const mensagem = input.value.trim();

        if (mensagem === '')return;
       

        // Cria o container da mensagem
        const item = document.createElement('div');
        item.classList.add('item2');

        // Cria o autor da mensagem
        const msgUser = document.createElement('div');
        msgUser.classList.add('msg-user');
        msgUser.innerHTML = '<strong>Você diz:</strong>';

        // Cria o balão da mensagem
        const msgChat = document.createElement('div');
        msgChat.classList.add('msg-chat');
        msgChat.textContent = mensagem;

        // Adiciona tudo na estrutura
        item.appendChild(msgUser);
        item.appendChild(msgChat);
        chatContainer.appendChild(item);

        // Rola a div para mostrar a última mensagem
        chatContainer.scrollTop = chatContainer.scrollHeight;

        // Limpa o campo de entrada
        input.value = '';
    });
});