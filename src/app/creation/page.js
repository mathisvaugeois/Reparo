'use client'
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { useState } from "react"

export default async function CreateAnnonce() {
    const session = await getServerSession(authOptions);
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const published = true
    const author = session?.user
    const authorId = session?.user.id;

    const SaveAnnonce = async (e) => {
        e.preventDefault();
        setErrorMessage("")
        setValidationMessage("")

        // Vérification de la longueur minimale du mot de passe
        if (title.length < 1) {
            setErrorMessage("Le titre doit être complèter");
            return;
        }

        if (content.length < 1) {
            setErrorMessage("Le contenu doit être complèter");
            return;
        }
        
        try{
            const response = await fetch('http://localhost:3000/api/annonce/creation', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, content, published, author, authorId}),
            });
            const responseData = await response.json();
            if (response.status === 409) {
                setErrorMessage(responseData.message);
                return;
            }

            if (response.status === 201) {
                setTitle('');
                setContent('');
                setValidationMessage(responseData.message);
                return;
            }

        } catch(e) {
            setErrorMessage(e)
            return;
        }
        
    }
    if (session?.user) {
        return (
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={SaveAnnonce}>
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                                Title
                            </label>
                            <div className="mt-2">
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="content" className="block text-sm font-medium leading-6 text-gray-900">
                                Content
                            </label>
                            <div className="mt-2">
                                <input
                                    id="content"
                                    name="content"
                                    type="text"
                                    value={email}
                                    onChange={(e) => setContent(e.target.value)}
                                    required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <p className="mt-2 text-red-600 text-center">{errorMessage}</p>
                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                        <p className="mt-2 text-green-600 text-center">{validationMessage}</p>
                    </form>
                </div>
            </div>
        )
        }

        return <p>Vous devez vous connecter pour voir cette page.</p>;
}
