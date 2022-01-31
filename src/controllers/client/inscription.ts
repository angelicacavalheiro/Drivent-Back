import { Request, Response } from "express";

import * as service from "@/services/client/inscription";

export async function postUserInscription(req: Request, res: Response) {
  const userInscriptions = await service.postUserInscription(
    req.body.enrollmentsId,
    req.body.activitiesId
  );
  res.send(userInscriptions);
}
