import { useState } from "react"

export default function Checkbox(){
    const [termos, setTermos] = useState(false)

    function handleChange({target}){
        setTermos(target.checked)
    }

    return(
        <div>
            <h2>Checkbox</h2>
            {
                termos ? <p>Eu aceito os termos</p> : <p>não aceito</p>
            }

            <label htmlFor="">
                <input type="checkbox" value="Termos" checked={termos} onChange={handleChange} />
            </label>
            Aceitar termos de privacidade
        </div>
    )
}