export function normalizeId(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "_") // espaços viram underline
    .replace(/[^\w_]/g, ""); // remove caracteres não alfanuméricos
}