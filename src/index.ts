import useObjection from "@configuration/objection.conf";
import { buildUsers } from "@libs/faker.util";
import { UserRepository } from "@repositories/user.rep";

console.info("ts running");
useObjection();

(async function () {
  await UserRepository.truncate();
  await UserRepository.create(buildUsers(10));
  const users = await UserRepository.getAll();
  console.info(users);
})();
