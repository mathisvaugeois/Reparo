import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const { region } = body;

        let annonces;
        if (region === "France") {
            annonces = await db.Annonce.findMany({});
        } else {
            annonces = await db.Annonce.findMany({
                where: { region: region }
            });
        }
        

        return NextResponse.json({ annonces: annonces, message: "Annonce bien rendue" }, { status: 201 });
    } catch {
        return NextResponse.json({ message: error }) 
    }
}