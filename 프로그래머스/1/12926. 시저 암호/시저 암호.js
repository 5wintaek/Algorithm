function solution(s, n) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = upper.toLowerCase();

  return s
    .split("")
    .map((char) => {
      if (char === " ") {
        return " ";
      }

      const charArr = upper.includes(char) ? upper : lower;

      let index = charArr.indexOf(char) + n;
      if (index >= charArr.length) {
        index -= charArr.length;
      }

      return charArr[index];
    })
    .join("");
}