import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/services/prisma";

type Faq = {
        question: string;
        answer: string;
    };

const handlePostMethod = async (req: NextApiRequest, res: NextApiResponse) => {
    const questions =req.body;
    try {
    
        const result = await prisma.faq.createMany({
           data:questions.map(({question, answer}:Faq)=>({question, answer})),
        });
        res.status(202).json({message:"Success", result});
    } catch (error) {
        console.log("eror", error);
        res.status(500).json({ error: "Error creating content" });
    }
}

const handleGetMethod = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const result = await prisma.faq.findMany();
        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching content:", error);
        res.status(500).json({ error: "Error fetching content" });
    }
}


const handleDeleteMethod = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const result = await prisma.faq.delete({
            where: { id: req.query.id as string },
        });
        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching content:", error);
        res.status(500).json({ error: "Error fetching content" });
    }
}




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        return handleGetMethod(req, res);
    } if(req.method === "POST"){
        return handlePostMethod(req, res);
    }if(req.method === "DELETE") {
        return handleDeleteMethod(req, res);
    }
        else {
        res.status(405).json({ message: "Method not allowed" });
    }
}