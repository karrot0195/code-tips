import { UserSchema } from "@schemas/user.schema";

export const buildUsers = (maxItem = 10): UserSchema[] =>
  Array.from(Array(maxItem).keys()).map((idx) => ({
    id: idx.toString(),
    email: `example${idx}@gmail.com`,
    name: `example${idx}`,
  }));
