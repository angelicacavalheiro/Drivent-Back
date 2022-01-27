import { Router } from "express";

import * as controller from "@/controllers/client/event";

const router = Router();

router.get("/info", controller.getEventInfo);

router.get("/list", controller.getEventList);

export default router;
