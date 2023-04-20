import logo from "./logo.svg";
import "./App.css";

import Title from "./components/Title";
import Header from "./components/Header";
import HookUseState from "./components/HookUseState";
import HookUseEffect from "./components/HookUseEffect";
import HookuseRef from "./components/useRef";
import TextoComBotao from "./components/TextWithButton";

import UserContext from "./context/UserContext";
import User from "./components/User";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleCount(){
    setCount(count + 1)
  }
  return (
    <>
      <Header />
      <Title titulo="titulo 1" subtitulo="sub 01" />
      <Title titulo="titulo 2" subtitulo="sub 02" />
      <Title />

      <hr />

      <h2>imagem</h2>
      <img src={logo} alt="" width="50px" />

      <hr />
      <h2>OnClick</h2>
      <button onClick={(event) => alert(event.type)}>button</button>
      <hr />
      <HookUseState />
      <hr />
      <HookUseEffect />
      <hr />
      <HookuseRef />
      <TextoComBotao />

      <h2>User Comtext</h2>
      <UserContext.Provider value={{ count, handleCount}}>
        <User/>
      </UserContext.Provider>
    </>
  );
}

export default App;
