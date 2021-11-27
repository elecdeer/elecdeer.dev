// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiHandler, NextApiResponse } from "next";

export default function handler(req: NextApiHandler, res: NextApiResponse) {
  res.status(200).json({ name: "John Doe" });
}
