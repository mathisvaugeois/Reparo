import { db } from "@/lib/db";
import { NextResponse } from "next/server";

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export async function POST(req) {
    try {
        const body = await req.json();
        const { title, content, authorId, imgUrl, region, price} = body;

        const newAnnonce = await db.annonce.create({
            data: {
                title,
                content,
                published : true,
                author: { connect: { id: authorId } },
                imgUrl,
                region, 
                price
            }
        })
        const {...rest } = newAnnonce

        return NextResponse.json({ annonce: rest, message: "L'annonce a bien été créé" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: error }) //"Something went wrong."
    }
}