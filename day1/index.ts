import { getLines } from "../util/todaysInput";

const lines = getLines(1).map((l) => parseInt(l));

let part1, part2;
for (const number1 of lines) {
  const number2 = lines.find((line) => number1 + line === 2020);
  if (number2 && !part1) {
    part1 = number1 * number2;
  }
  for (const number2 of lines) {
    const number3 = lines.find((line) => number1 + number2 + line === 2020);
    if (number3 && !part2) {
      part2 = number1 * number2 * number3;
    }
  }
}
console.log({ part1 });
console.log({ part2 });
