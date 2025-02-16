import { type SchemaTypeDefinition } from "sanity";

import { startup } from "./startup";
import { author } from "./author";
import { playlist } from "@/sanity/schemaTypes/playlist";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup, playlist],
};
