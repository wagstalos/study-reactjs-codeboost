import { useState } from 'react'
import { StylesCard } from './styles'

export default function Card() {
    const [isChangeColor, setIsChangeColor] = useState(true)
    return (
        <StylesCard titleChangeColor={isChangeColor}>
            <h2>Style Components</h2>
            <h3>Titulo do card</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam usandae id vero ex.</p>
            <button onClick={() => setIsChangeColor(!isChangeColor)}>Trocar cor do título</button>
        </StylesCard>
    )
}