import React from 'react'
import { useRouter } from 'next/router'

export default function Details(){
    const router = useRouter();
    const {name , city , aim } = router.query
    return(
        <div>
            <h2>My Name is {name}, and i live in {city}. I want to become {aim} . </h2>
        </div>
    )
}