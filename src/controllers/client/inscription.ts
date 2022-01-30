import { Request, Response } from "express";

import * as service from "@/services/client/inscription";

export async function postUserInscription(req: Request, res: Response) {
  const userInscription = await service.postUserInscription(
    req.body.enrollmentsId,
    req.body.activitiesId
  );
  res.send(userInscription);
}
