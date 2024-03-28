function solution(order) {
  const s = new Set("369");
  return order.toString().split("").filter((v) => s.has(v)).length;
}


