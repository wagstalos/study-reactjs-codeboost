import { useState } from "react"

export default function Select(){
    const [car,setCar] = useState('Porsche')
    return(
        <div>
            <h2>Select</h2>

            <select value={car} onChange={({target}) => setCar(target.value)}>
                <option value="">Selecione um carro</option>
                <option value="Ferrari">Ferrari</option>
                <option value="Lamborghini">Lamborghini</option>
                <option value="Porsche">Porsche</option>
            </select>
            {car}
        </div>
    )
}