import React from 'react'
import Link from 'next/link'
import { useEffect , useState } from 'react'

export default function List({ownersList}) {
    // console.log(ownersList,'ownersList1')
    // const [ owners , setOwners ] = useState([]);
    // useEffect(() => {
    //     async function loadData() {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //         const ownersList = await response.json();
    //         setOwners(ownersList);
    //     }
    //     loadData();
    // }, []);

    return(
        <div>
            <h2>Total Users - {ownersList.length}</h2>
            <ol>
                {ownersList.map((e,i) => (
                    <div key={i}>
                        <Link as={`/users/${e.id}`} href="/[users]/[id]">
                        <a> <li> {e.name}</li> </a> 
                        </Link>
                    </div>
                ))}
            </ol>
            <br/><br/>
            <Link href="/">Back to Home</Link>

        </div>
    );
}

List.getInitialProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(response,'response')
    const ownersList = await response.json();
    console.log(ownersList,'ownersList')
    return{ownersList : ownersList }
}