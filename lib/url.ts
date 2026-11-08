/** Tags http(s) links only; `mailto:` and relative paths pass through. */
export const addQueryParams = (
  urlString: string,
  query: Record<string, string>
): string => {
  if (!/^https?:\/\//.test(urlString)) {
    return urlString
  }

  const url = new URL(urlString)

  for (const [key, value] of Object.entries(query)) {
    url.searchParams.set(key, value)
  }

  return url.toString()
}
