'use client'
import { signOut } from 'next-auth/react'


export default function signOutButton(){
    return(
        <button onClick={() => signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}/auth/sign-in`,
        })}>Sign Out</button>
    )
}