// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../config/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { playerName, score } = req.body;

  const result = await prisma.ranking.update({
    where: {
      playerName: playerName as string,
    },
    data: {
      score
    },
  });
  res.json(result);
}
