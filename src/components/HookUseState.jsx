import { useState } from "react"

export default function HookUseState() {
    const [count, setCount] = useState(0);
    const [isShow, setIsShow] = useState(false)

    function add() {
        setCount(count + 1);
    }

    function sub() {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <>
            <h2>Use state</h2>
            <p>O useState é um hook do React que permite adicionar estado a um componente funcional. O estado é uma forma de armazenar dados que podem ser atualizados e que afetam a renderização do componente.

                O useState retorna um array com dois elementos: o primeiro é o valor atual do estado e o segundo é uma função que permite atualizar o estado. Quando a função setState é chamada, o componente é renderizado novamente com o novo valor do estado.</p>
            <p>contador: {count}</p>
            <button className="btn-rounded" onClick={sub}> -</button>
            <button className="btn-rounded" onClick={add}> +</button>
            <br />
            <button onClick={() => setIsShow(true)}>mostrar Nome</button>
            {
                (isShow) && <p>Wagner silva</p>
            }

        </>
    )
}