import { Router } from "express";
import { peopleControllers } from "../controllers/people.controllers";

const peopleRouter = Router();

peopleRouter.get("/people", peopleControllers.read);

export { peopleRouter };
