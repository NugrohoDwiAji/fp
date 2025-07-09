import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/services/prisma";


const handleGetMethod = async (req: NextApiRequest, res: NextApiResponse) => {
    const { homebase } = req.query;
    try {
        const result = await prisma.dosen.findMany({
            where: { jenis_dosen: homebase as string },
            orderBy: { create_at: 'desc' }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: "Error Deleting content" });
    }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        return handleGetMethod(req, res);
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}