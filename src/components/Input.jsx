import React, { useState } from 'react';

export default function Input() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [errorName, setErrorName] = useState('');

    const [errorEmail, setErrorEmail] = useState('');

    function handleSubmit(event) {
        event.preventDefault()
        console.log(`Nome: ${name}, email: ${email}`)

        if (name === '') {
            setErrorName('*Favor preencher o nome');
        }

        if (email === '') {
            setErrorEmail('*Favor preencher o email');
        }

    }
    return (
        <div>
            <form action='' onSubmit={handleSubmit} >
                <input
                    type='text'
                    value={name}
                    onChange={event => {
                        setName(event.target.value)
                        setErrorName('')
                    }}
                    
                    onBlur={(event) =>{
                        if(event.target.value === ''){
                            setErrorName('Favor preencher o nome')
                        }
                    }}
                />
                {errorName}
                <br />
                <input
                    type='email'
                    value={email}
                    onChange={event =>{
                        setEmail(event.target.value)
                        setErrorEmail('')
                    }} 

                    onBlur={(event) =>{
                        if(event.target.value === ''){
                            setErrorEmail('Favor preencher o email')
                        }
                    }}
                />
                {errorEmail}

                <br />

                <button type="submit"> Enviar dados</button>
            </form>

            <p>name: {name}</p>
            <p>email: {email}</p>

        </div>
    )
}