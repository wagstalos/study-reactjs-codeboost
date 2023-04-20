import React, { useContext } from "react";

import UserContext from "../context/UserContext";

export default function User() {
    const { count, handleCount } = useContext(UserContext)
    return(
        <>
        <p>O useContext é um hook do React que permite que você consuma dados de um contexto (context) em componentes filhos sem precisar passar as informações por meio de props em cada nível da hierarquia de componentes.</p>
          {count}
          <button onClick={handleCount}> Contar usando useContext</button>
        </>
    )
}