import { db } from "@/lib/db";
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export async function POST(req) {
    try {
        const session = await getServerSession(authOptions);
        const authorId = session?.user.id;
        const body = await req.json();
        const { title, content, imgUrl, region, price} = body;
        const price_float = parseFloat(price)

        const newAnnonce = await db.annonce.create({
            data: {
                title,
                content,
                published : true,
                author: { connect: { id: authorId } },
                imageUrl: imgUrl,
                region, 
                price: price_float
            }
        })
        const {...rest } = newAnnonce

        return NextResponse.json({ annonce: rest, message: "L'annonce a bien été créé" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: error + 'T'}) //"Something went wrong."
    }
}