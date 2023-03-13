// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../config/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { playerName } = req.body;

  const result = await prisma.ranking.create({
    data: {
      playerName,
      score: 0
    },
  });
  res.json(result);
}
