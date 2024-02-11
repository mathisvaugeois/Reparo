import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export async function POST(req) {
    try {
        const body = await req.json();
        const {  title, content, published, author, authorId } = body;

        const newAnnonce = await db.annonce.create({
            data: {
                title,
                content,
                published,
                author,
                authorId
            }
        })
        const {...rest } = newAnnonce


        return NextResponse.json({ user: rest, message: "Le profil a bien été créé" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: error }) //"Something went wrong."
    }
}