import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/services/prisma";


const handlePostMethod = async (req: NextApiRequest, res: NextApiResponse) => {
    const selectedProdi =req.body;
    console.log(req.body);
    try {
    
        const result = await prisma.prodi.createMany({
            data:selectedProdi,
        });
        res.status(202).json({message:"Success", result});
    } catch (error) {
        console.log("eror", error);
        res.status(500).json({ error: "Error creating content" });
    }
}

const handlegetMethod = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const result = await prisma.prodi.findMany();
        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching content:", error);
        res.status(500).json({ error: "Error fetching content" });
    }
}

const handleDeleteMethod = async (req: NextApiRequest, res: NextApiResponse) => {

    try {
        const result = await prisma.prodi.deleteMany();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: "Error Deleting content" });
    }
}




export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        return handlePostMethod(req, res);
    }
    if(req.method === "GET") {
        return handlegetMethod(req, res);
    }
    if(req.method === "DELETE") {
        return handleDeleteMethod(req, res);
    }
    else {
        res.status(405).json({ message: "Method not allowed" });
    }
}