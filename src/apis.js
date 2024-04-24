import { type } from '@testing-library/user-event/dist/type'
import { toast } from 'react-toastify'

export function signin(username, password){
    return fetch('/auth/token/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        }).then(data => {
            console.log(data)

            if(data.ok){
                return data.json()
            }

            return data.json().then(data => {
                // handle json error form server
                if (data.status === 400) {
                    const errors = Object.keys(data).map(key => `${data[key].join(" ")}`)
                    throw new Error(errors.join("\n"))
                }
                throw Error(JSON.stringify(data))
            }).catch(err => {
                if (err.name === 'SyntaxError') {
                    throw new Error(data.statusText)
                }
                throw new Error(err)
            })

        }).then(data => {
            toast(JSON.stringify(data), { type: 'success' })
        }).catch(err => {
            toast(err.message, { type: 'error' })
        })
    })
}