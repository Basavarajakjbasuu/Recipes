export const cardQueries: [string, string][] = [
  ["field", "uri"],
  ["field", "label"],
  ["field", "image"],
  ["field", "totalTime"],
];

export const defaultQuires: string[][] = [
  ["mealType", "breakfast"],
  ["mealType", "dinner"],
  ["mealType", "lunch"],
  ["mealType", "snack"],
  ["mealType", "teatime"],
  ...cardQueries
];

export function queryParamsString(queries: string[][] | '') {
  const query: string = queries
  ? queries
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`) 
    .join("&")
  : "";

  return query;
}