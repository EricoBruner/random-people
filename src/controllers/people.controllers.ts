import { Request, Response } from "express";
import { peopleServices } from "../services/people.services";

async function read(req: Request, res: Response) {
  const person = await peopleServices.read();

  return res.status(200).send(person);
}

export const peopleControllers = { read };
