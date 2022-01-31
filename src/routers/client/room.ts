import { Router } from "express";

import * as controller from "@/controllers/client/room";

const router = Router();

router.get("/", controller.get);

router.post(
  "/",
  controller.updateInfos
);

export default router;
