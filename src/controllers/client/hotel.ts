import { Request, Response } from "express";

import * as service from "@/services/client/hotel";

export async function get(req: Request, res: Response) {
  const hotelsInfo = await service.getHotels();

  res.send(hotelsInfo);
}
