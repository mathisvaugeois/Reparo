'use client'
import Link from "next/link"
import { useState } from "react"
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const { toast } = useToast()

    const loginUser = async (e) => {
        e.preventDefault();

        const signInData = await signIn('credentials', {
            redirect: false,
            email: email,
            password: password,
        });

        if(signInData?.error){
            toast({
                title: "Error",
                description: "Oups, something went wrong",
                variant: "destructive",
              })
            // console.log(signInData.error);
        } else {
            router.push('/admin');
            router.refresh();
        }
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 pt-0">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-auto w-auto" src="/logoReparo.png" alt="Reparo" />
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Connectez-vous !</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={loginUser}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">adresse Email</label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>


                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Se connecter</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Vous n'avez pas encore de un compte ?
                    <Link href="./sign-up" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Inscrivez vous</Link>
                </p>
            </div>
        </div>
    )
}
