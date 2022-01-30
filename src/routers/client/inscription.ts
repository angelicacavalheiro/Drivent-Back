import { Router } from "express";

import * as controller from "@/controllers/client/inscription";

const router = Router();

router.post("/inscription", controller.postUserInscription);

export default router;
