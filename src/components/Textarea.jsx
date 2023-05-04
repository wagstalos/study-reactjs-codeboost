import { useState } from "react"

export default function TextArea(){

    const [message, setMessage] = useState('')
    return(
        <div>
            <h2>Text Area</h2>

            <textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            cols={30}
            rows={5}
            />

            {message}
        </div>
    )
}