import { JSONSchema, Model, RelationMappings } from "objection";

export class UserComment extends Model {
  static get tableName(): string {
    return "user_comment";
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
