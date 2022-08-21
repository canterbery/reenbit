import { User } from "../mock-data/Users";

export const findUserById = (id: number, users: User[]) => {
  return users.find((item) => item.id === id);
};
