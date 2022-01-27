import { Request, Response } from "express";

import * as service from "@/services/client/event";

export async function getEventInfo(req: Request, res: Response) {
  const eventInfo = await service.getEventInfo();
  res.send(eventInfo);
}

export async function getEventList(req: Request, res: Response) {
  const eventList = await service.getEventList();
  res.send(eventList);
}
