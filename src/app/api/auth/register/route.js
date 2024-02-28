import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const { email, username, password } = body;

        //check if email already exists
        const existingUserByEmail = await db.user.findUnique({
            where: { email: email }
        });
        if (existingUserByEmail) {
            return NextResponse.json({ user: null, message: "Un utilisateur a déjà cet adresse email" }, { status: 409 })
        }

        //check if username already exists
        const existingUserByUsername = await db.user.findUnique({
            where: { username: username }
        });
        if (existingUserByUsername) {
            return NextResponse.json({ user: null, message: "Un utilisateur a déjà cet username" }, { status: 409 })
        }

        const hashedPassword = await hash(password, 10)
        const newUser = await db.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        })
        const { password: newUserPassword, ...rest } = newUser


        return NextResponse.json({ user: rest, message: "Le profil a bien été créé" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: error })
    }
}