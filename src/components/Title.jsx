export default function Title({ titulo, subtitulo }) {
    return (
        <>
        <p>usando props</p>
            <h1>{titulo}</h1>
            <span>{subtitulo}</span>
        </>

    )
}

Title.defaultProps = {
    titulo: 'Titulo Default',
    subtitulo: 'Subtitulo Default'
}