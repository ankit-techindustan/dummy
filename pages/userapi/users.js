import React from 'react'
import axios from 'axios'
import Link from 'next/link'


class Users extends React.Component{
    constructor(){
        super()
        this.state = {
            users : []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            this.setState({users})
        })
        .catch(err =>{
            console.log('err')
        })
    }

    render() {
        return (
            <div>
                <h3>Total Users -{this.state.users.length} </h3>
                {
                    this.state.users.map(user => {
                        return <li>{user.name} </li>
                    })
                }

                <br/>
                <Link href="/">Back to Home</Link>
            </div>
        )
    }
}

export default Users