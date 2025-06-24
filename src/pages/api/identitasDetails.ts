import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/services/prisma";

const handlePutMethod = async (req: NextApiRequest, res: NextApiResponse) => {
  const dataUpdate = req.body;
  try {
    await Promise.all(
      dataUpdate.map(({ name, value }: { name: string; value: string }) => {
      return  prisma.identitas.updateMany({
          where: { name: name },
          data: {
            name: name,
            value: value,
          },
        });
      })
    );

    res.status(202).json({ message: "Content updated successfully" });
  } catch (error) {
    console.error("Error updating content:", error);
    res.status(500).json({ error: "Error updating content" });
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "PUT") {
    return handlePutMethod(req, res);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
