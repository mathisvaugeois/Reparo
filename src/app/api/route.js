import { NextResponse } from 'next/server'

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export async function GET(){
    return NextResponse.json({message: 'This is a GET REQUEST'})
}

export async function POST(req,res){
    const body = await req.json()
    console.log(body)
    return NextResponse.json({message: 'This is a POST REQUEST'})
}