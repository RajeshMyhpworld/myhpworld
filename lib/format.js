// Format a number as Indian Rupees — 64990 becomes "₹ 64,990"
export function inr(n) {
  return `₹ ${Number(n).toLocaleString("en-IN")}`;
}
