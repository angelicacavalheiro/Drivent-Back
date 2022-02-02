import { Request, Response } from "express";
import httpStatus from "http-status";

import * as service from "@/services/client/room";
import ReserveData from "@/interfaces/reserve";
import Enrollment from "@/entities/Enrollment";
import Rooms from "@/entities/Rooms";

export async function get(req: Request, res: Response) {
  const roomsInfo = await service.getRooms();

  res.send(roomsInfo);
}

export async function updateInfos(req: Request, res: Response) {
  const reserveData = req.body as ReserveData;

  const response = await Rooms.addUserToRoom(reserveData);
  await Enrollment.reserveRoom(reserveData);

  res.send(response).status(httpStatus.OK);
}
