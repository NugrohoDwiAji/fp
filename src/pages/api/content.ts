import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/services/prisma";

async function handdlePostMethod(req: NextApiRequest, res: NextApiResponse) {
  const { title, value } = req.body;
  try {
    const result = await prisma.content.create({
      data: {
        title: title,
        value: value,
      },
    });
    res.status(202).json(result);
  } catch (error) {
    console.log("eror", error);
    res.status(500).json({ error: "Error creating content" });
  }
}
async function handleGetMethod(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await prisma.content.findMany();
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching content:", error);
    res.status(500).json({ error: "Error fetching content" });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    return handleGetMethod(req, res);
  }
  if (req.method === "POST") {
    return handdlePostMethod(req, res);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
