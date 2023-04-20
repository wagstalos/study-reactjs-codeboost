import { useState, useEffect } from "react"

export default function HookUseState() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `title ${count} `;
    });

    return (
        <>
            <h2>Use Effect</h2>
            <p>O useEffect é um hook do React que permite executar efeitos colaterais em componentes funcionais. Efeitos colaterais são ações que ocorrem fora do escopo normal de renderização do componente, como buscar dados de uma API, manipular o DOM ou adicionar e remover event listeners.

O useEffect é executado após cada renderização do componente e pode ser usado para lidar com ações que ocorrem depois que o componente é exibido na tela, como uma resposta a uma ação do usuário ou a atualização de um valor assíncrono.

O useEffect recebe dois argumentos: uma função de efeito e uma lista de dependências opcionais. A função de efeito é executada após cada renderização do componente e pode retornar uma função de limpeza opcional que é executada antes da próxima renderização.

A lista de dependências é uma array opcional que define quando o efeito deve ser executado. Se a lista de dependências estiver vazia, o efeito será executado após cada renderização do componente. Se a lista de dependências contiver valores específicos, o efeito será executado apenas quando esses valores forem alterados.</p>
            <strong>{count}</strong>

            <button onClick={() => setCount(count + 1)}>Adicionar</button>
        </>
    )
}
