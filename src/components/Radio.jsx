import { useState } from "react"

export default function Radio(){
    const [car, setCar] = useState('')

    function handleChangeCar({target}){
        setCar(target.value)
    }

    return(
        <div>
            <h2>Radio</h2>

            <label htmlFor="">
                <input type="radio" 
                        value="ferrari" 
                        checked={car === "ferrari"}
                        onChange={handleChangeCar}
                />
                Ferrari
            </label>

            <label htmlFor="">
                <input type="radio" 
                        value="gol" 
                        checked={car === "gol"}
                        onChange={handleChangeCar}
                />
                Gol
            </label>
            <br />
            valor atual: {car}
        </div>
    )

}