import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [nome, setNome] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = nome.trim();
    if (!trimmed) return;

    navigate("/chat", { state: { nome: trimmed } });
  };

  return (
    <div className="site">
      <header>
        <h1>Bem-vindo ao Atendimento Online!</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Digite seu nome:</label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome"
          autoFocus
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
