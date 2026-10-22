/** Object key order can differ between a saved Convex manifest and local data. */
export function stableContent(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(stableContent).join(",")}]`;
  if (value && typeof value === "object")
    return `{${Object.entries(value)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, item]) => `${JSON.stringify(key)}:${stableContent(item)}`)
      .join(",")}}`;
  return JSON.stringify(value) ?? "";
}
