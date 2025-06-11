import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/login";
import Chat from "../components/chat";

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/chat" element={<Chat />} />
  </Routes>
);

export default App;
