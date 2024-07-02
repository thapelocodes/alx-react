import { normalize, schema } from "normalizr";

const courses = new schema.Entity(
  "courses",
  {},
  { processStrategy: (value) => ({ ...value, isSelected: false }) }
);
export default function coursesNormalizer(data) {
  const normalized = normalize(data, [courses]);
  return normalized.entities.courses;
}
