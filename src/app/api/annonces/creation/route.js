import { db } from "@/lib/db";
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";

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
        return NextResponse.json({ message: error})
    }
}




/*
import { multer } from "multer";

const upload = multer({ dest: "./public/uploads/" });

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    const authorId = session?.user.id;
    const body = await req.json();
    const { title, content, region, price } = body;

    if (!req.file) {
      throw new Error("No image provided");
    }

    const imageName = Date.now() + "-" + req.file.filename;
    const imagePath = `./public/uploads/${imageName}`;
    await fs.promises.rename(`/public/uploads/${imageName}`, imagePath); // Move temporary file to permanent storage

    const price_float = parseFloat(price);

    const newAnnonce = await db.annonce.create({
      data: {
        title,
        content,
        published: true,
        author: { connect: { id: authorId } },
        imageUrl: `/public/uploads/${imageName}`,
        region,
        price: price_float,
      },
    });
    const { ...rest } = newAnnonce;

    return {
      status: 201,
      body: { annonce: rest, message: "L'annonce a bien été créée" },
    };
  } catch (error) {
    if (error instanceof MulterError) {
      return {
        status: 400,
        body: { message: "Une erreur s'est produite pendant l'envoi de votre fichier." },
      };
    }
    return {
      status: 500,
      body: { message: error.message || error },
    };
  } finally {
    if (req.file) {
      // await fs.promises.rm('/public/uploads/' + req.file.filename);
    }
  }
}*/