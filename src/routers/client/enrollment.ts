import { Router } from "express";

import * as controller from "@/controllers/client/enrollment";
import * as inscription from "@/controllers/client/inscription";

import schemaValidatingMiddleware from "@/middlewares/schemaValidatingMiddleware";

import enrollmentSchema from "@/schemas/enrollmentSchema";
import planSchema from "@/schemas/planSchema";

const router = Router();

router.post(
  "/",
  schemaValidatingMiddleware(enrollmentSchema),
  controller.saveEnrollmentInfo
);

router.get("/", controller.getEnrollmentInfos);

router.post(
  "/plan",
  schemaValidatingMiddleware(planSchema),
  controller.saveNewPlan
);

export default router;
