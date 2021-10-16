import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"


export const Login = () => {
    const [details, setDetails] = useState({ username: '', password: '' })
    const [err, setErr] = useState(false)
    const [dataUser, setdataUser] = useState(null)
    
    
    const history = useHistory()

    useEffect(async () => {
        const data = await fetch('https://6164054db55edc00175c1cc9.mockapi.io/v1/auth/1')
        const { username, password } = await data.json()
        setdataUser({username, password})
    }, [])

    const submitHandler = e => {
        e.preventDefault()
        if (details.username === dataUser.username && details.password === dataUser.password) {
            history.push('/page')
        } else {
            setDetails({username: '', password: ''})
            setErr(true)
        }
    }

    return (
        <Fragment>
            <div>Login</div>
            <form
                onSubmit={submitHandler}
            >
                <label htmlFor='username'>Name:</label>
                <input type='text' id='username' name='username' onChange={ e => {
                        setDetails({ ...details, username: e.target.value })
                        setErr(false)
                    }
                } 
                    value={details.username}
                />

                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' name='password' onChange={e => {
                        setDetails({ ...details, password: e.target.value })
                        setErr(false)
                    }
                } 
                    value={details.password} 
                />

                <input type='submit' value='Login' />
                {err &&
                    <div>Login Fail</div>
                }
            </form>
        </Fragment>
    )
}
