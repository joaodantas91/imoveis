import clientPromise from '@/lib/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';


const schema = z.object({
  name: z.string().max(10),
  phone: z.string(),
  email: z.string().email(),
  message: z.string().max(10),
});

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { query, method, body } = req;
  const dbName = process.env.MONGODB_DB as string;
  const client = await clientPromise;
  const db = client.db(dbName);

  switch (method) {
    case 'POST':
      // Get data from your database
      const parsedBody = schema.parse(body);

      db.collection("contact").insertOne(parsedBody);

      res.status(200).json(parsedBody);
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}