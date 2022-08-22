import { JSONSchema, Model, RelationMappings } from "objection";

export class User extends Model {
  static get tableName(): string {
    return "user";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema(): JSONSchema {
    return {
      type: "object",
      required: [],
      properties: {},
    };
  }

  static get relationMappings(): RelationMappings {
    return {};
  }
}
