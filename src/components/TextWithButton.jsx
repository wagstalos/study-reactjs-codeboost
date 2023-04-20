import React, { useState } from "react";

function TextoComBotao() {
  const [texto, setTexto] = useState("Texto original");

  const alterarTexto = () => {
    setTexto("Novo texto");
  };

  return (
    <div>
      <p>{texto}</p>
      <button onClick={alterarTexto}>Alterar texto</button>
    </div>
  );
}

export default TextoComBotao;