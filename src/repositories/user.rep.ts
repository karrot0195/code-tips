import { User } from "@models/user.model";
import { UserSchema } from "@schemas/user.schema";
import { QueryBuilder } from "objection";

export class UserRepository {
  private static get query(): QueryBuilder<any> {
    return User.query();
  }

  static async truncate() {
    return this.query.truncate();
  }

  static async getAll() {
    return this.query;
  }

  static async create(data: UserSchema | UserSchema[]) {
    return this.query.insert(data);
  }
}
