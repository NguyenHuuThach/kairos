import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import Auth from '../Auth'

export const Login = (props) => {
    const [details, setDetails] = useState({ username: '', password: '' })
    const [err, setErr] = useState(false)
    const [dataUser, setdataUser] = useState({ username: '', password: '' })
    
    
    const history = useHistory()

    useEffect(async () => {
        const respone = await fetch('https://6164054db55edc00175c1cc9.mockapi.io/v1/auth/1')
        const data = await respone.json()
        setdataUser(data)
    }, [])

    const submitHandler = e => {
        e.preventDefault()
        if (details.username === dataUser.username && details.password === dataUser.password) {
            console.log('okkk')
            Auth.login(() => {
                history.push('/page')
            })
        } else {
            console.log('fail')
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
