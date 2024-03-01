'use client'
import { signOut } from 'next-auth/react'


export default function signOutButton(){
    return(
        <button 
            style={{padding: '3px 10px'}}
        onClick={() => signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}/auth/sign-in`,
        })}>Se déconnecter</button>
    )
}