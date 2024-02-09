import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

const session = await getServerSession(authOptions);

export default function Admin() {
    if(session?.user){
        return <h2> Admin page - bon retour {session?.user.username} </h2>;
    }

    return <p>Vous devez vous connecter pour voir cette page.</p>;
  }