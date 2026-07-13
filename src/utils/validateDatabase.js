import { PROPERTIES } from "../config/properties.js";

export function validateDatabase(dataSource) {
  const properties = dataSource.properties;

  if (properties[PROPERTIES.TITLE]?.type !== "title")
    throw new Error(`Missing or invalid property: ${PROPERTIES.TITLE}`);
  if (properties[PROPERTIES.STATUS]?.type !== "status")
    throw new Error(`Missing or invalid property: ${PROPERTIES.STATUS}`);
  if (properties[PROPERTIES.DUE]?.type !== "date")
    throw new Error(`Missing or invalid property: ${PROPERTIES.DUE}`);
  if (properties[PROPERTIES.CREATED]?.type !== "created_time")
    throw new Error(`Missing or invalid property: ${PROPERTIES.CREATED}`);
}
