import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const { id } = body;

        let annonce = await db.Annonce.findUnique({
            where: { id: id }
        });
        

        return NextResponse.json({ annonce: annonce, message: "Annonce bien rendue" }, { status: 201 });
    } catch {
        return NextResponse.json({ message: error }) 
    }
}