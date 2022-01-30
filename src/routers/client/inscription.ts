import { Router } from "express";

import * as controller from "@/controllers/client/inscription";

const router = Router();

router.post("/", controller.postUserInscription);

export default router;
