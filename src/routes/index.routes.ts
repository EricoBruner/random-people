import { Router } from "express";
import { peopleRouter } from "./people.routes";

const indexRouter = Router();

indexRouter.use(peopleRouter);

export { indexRouter };
