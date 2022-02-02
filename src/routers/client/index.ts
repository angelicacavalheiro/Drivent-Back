import { Router } from "express";

import roomRouter from "@/routers/client/room";
import hotelRouter from "@/routers/client/hotel";
import eventRouter from "@/routers/client/event";
import inscriptionRouter from "@/routers/client/inscription";
import userRouter from "@/routers/client/user";
import authRouter from "@/routers/client/auth";
import enrollmentRouter from "@/routers/client/enrollment";

import tokenValidationMiddleware from "@/middlewares/tokenValidationMiddleware";

const router = Router();

router.use("/rooms", roomRouter);
router.use("/hotel", hotelRouter);
router.use("/event", eventRouter);
router.use("/inscription", inscriptionRouter);
router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/enrollments", tokenValidationMiddleware, enrollmentRouter);

export default router;
