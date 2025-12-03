export function formatText(text) {
  if (!text) return "";

  return text
    .replace(/\. +/g, ".\n")
    .replace(/(\n)?[-*]\s+/g, "\n• ")
    .trim();
}
