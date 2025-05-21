import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  mensagens: { autor: 'atendente' | 'voce', texto: string }[] = [
    { autor: 'atendente', texto: 'Bom dia, tudo certo?' },
    { autor: 'atendente', texto: 'Como posso te ajudar hoje?' },
    { autor: 'voce', texto: 'Bom dia, tudo certo!' },
    { autor: 'voce', texto: 'Gostaria de fazer um pedido.' },
  ];

  novaMensagem: string = '';

  enviarMensagem() {
    const texto = this.novaMensagem.trim();
    if (!texto) return;

    this.mensagens.push({ autor: 'voce', texto });
    this.novaMensagem = '';

    setTimeout(() => {
      const chatInner = document.querySelector('.chat-inner');
      if (chatInner) {
        chatInner.scrollTop = chatInner.scrollHeight;
      }
    });
  }
}
