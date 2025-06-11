import React, { useState, useRef, useEffect } from "react";
import type { FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./exercicios.css";

interface Mensagem {
  autor: "atendente" | "usuario";
  texto: string;
}

interface LocationState {
  nome?: string;
}

const Chat: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;


  if (!state?.nome) {
    navigate("/");
    return null;
  }

  const nomeUsuario = state.nome;

  const [mensagens, setMensagens] = useState<Mensagem[]>([
    { autor: "atendente", texto: `Olá, ${nomeUsuario}, como vai?` },
    { autor: "atendente", texto: "Como posso te ajudar?" },
  ]);
  const [novaMensagem, setNovaMensagem] = useState("");
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const texto = novaMensagem.trim();
    if (texto === "") return;
    setMensagens((prev) => [...prev, { autor: "usuario", texto }]);
    setNovaMensagem("");
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [mensagens]);

  return (
    <div className="site">
      <header>
        <h1>Atendimento Online!</h1>
        <p>
          Usuário: <strong>{nomeUsuario}</strong>
        </p>
      </header>

      <div className="borda" ref={chatContainerRef}>
        {mensagens.map((msg, index) => (
          <div key={index} className={msg.autor === "atendente" ? "item" : "item2"}>
            <div className="msg-user">
              <strong>{msg.autor === "atendente" ? "Atendente diz:" : `${nomeUsuario} diz:`}</strong>
            </div>
            <div className="msg-chat">{msg.texto}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite sua mensagem"
          value={novaMensagem}
          onChange={(e) => setNovaMensagem(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Chat;
