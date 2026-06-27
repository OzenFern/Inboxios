export default function buildQuery(params) {
  return `/?${new URLSearchParams(params).toString()}`;
}
