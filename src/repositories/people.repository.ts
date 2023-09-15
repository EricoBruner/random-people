import { db } from "../database/database";
import { People } from "../protocols";

function read() {
  return db.query<People>(`SELECT * FROM people`);
}

export const peopleRepository = { read };
