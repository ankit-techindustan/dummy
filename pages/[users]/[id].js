import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function Id({ ownersList }){
    console.log(ownersList,'ownersList2')
    const router = useRouter();
    return <div>
        <h2>{ownersList.name} Details:-</h2>
        <h4>UserName :- {ownersList.username}</h4>
        <h4>Email :- {ownersList.email}</h4>
        <h4>Address :- {ownersList.address.street}, {ownersList.address.suite}, {ownersList.address.city}, {ownersList.address.zipcode}.</h4>
        <h4>Website :- {ownersList.website}</h4>
        <h4>Mobile No. :- {ownersList.phone}</h4>
        <br/><br/>
        <Link href="/list" >Back to User</Link>
    </div>;
}

Id.getInitialProps = async ctx => {
    const { query } = ctx;
    console.log(query,'query')
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${query.id}`)

    const ownersList = await response.json();
    return{ownersList:ownersList};
}

