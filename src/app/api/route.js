import { getServerSession } from 'next-auth'
import { authOptions } from "@/lib/auth"
import { NextResponse } from 'next/server'

export async function GET(req){
    const session = await getServerSession(authOptions);

    // savoir si l'utilisateur est connecté 
    return NextResponse.json({authentificated: !!session})
}

// Exemple d'appel d'api : 
// export async function GET(){
//     return NextResponse.json({message: 'This is a GET REQUEST'})
// }

// export async function POST(req,res){
//     const body = await req.json()
//     console.log(body)
//     return NextResponse.json({message: 'This is a POST REQUEST'})
// }