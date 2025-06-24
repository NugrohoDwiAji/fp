import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt';
import prisma from '@/services/prisma';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {password, username} = req.body;

    const passwordhash = await bcrypt.hash(password, 10);
    try {
        const result = await prisma.user.create({
            data: {
                username : username,
                password: passwordhash
            },
            select:{
                username: true,
                password: true,
            }
        });
        res.status(202).json("Created");
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Error creating user' });

    }
}