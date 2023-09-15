import { peopleRepository } from "../repositories/people.repository";

function genRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function read() {
  const { rows: people } = await peopleRepository.read();

  const randomIndex = genRandomNumber(0, people.length - 1);

  return people[randomIndex];
}

export const peopleServices = { read };
