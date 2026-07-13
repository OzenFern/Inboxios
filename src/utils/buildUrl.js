export default function buildUrl(route = "/", params = {}) {
  const query = new URLSearchParams(params).toString();
  return query ? `${route}?${query}` : route;
}
