import { db } from "@/lib/db";
import { NextResponse } from "next/server";

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export async function POST(req) {
    try {
        const body = await req.json();
        const { region } = body;
        console.log("REGION = ", region)

        const annonces = await db.Annonce.findMany({
            where: { region: region }
        });

        return NextResponse.json({ annonces: annonces, message: "Annonce bien rendue" }, { status: 201 });
    } catch {
        return NextResponse.json({ message: error }) 
    }
}