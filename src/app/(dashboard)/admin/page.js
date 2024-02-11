import User from "@/components/User";
import Link from 'next/link'
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"


export default async function Admin() {
    const session = await getServerSession(authOptions);

    if (session?.user) {
        return (
        <>
            <h2> Admin page - bon retour {session?.user.username} </h2>;
            <Link href="/creation">Création d'annonce</Link>
            <h2>Client Session</h2>
            <User />
            <h2> Server Session </h2>
            {JSON.stringify(session)}
        </>)
    }

    return <p>Vous devez vous connecter pour voir cette page.</p>;
}