import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/services/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress) as string;
  const userAgent = req.headers['user-agent'] || '';
  const url = req.query.url as string;

  try {
    await prisma.visit.create({
      data: {
        ipAddress: ip,
        userAgent,
        url,
      },
    });
    res.status(200).json({ message: 'Tracked' });
  } catch (error) {
    console.error('Tracking error:', error);
    res.status(500).json({ message: 'Error tracking visit' });
  }
}