import { getAsNumbers } from "../util/todaysInput";
const numbers = getAsNumbers(9);

const preambleLength = 25;

let part1 = () => {
  for (let i = preambleLength; i < numbers.length; i++) {
    const number = numbers[i];
    const preamble = numbers.slice(i - preambleLength, i);
    let found;
    for (const first of preamble) {
      for (const second of preamble) {
        if (first + second === number) {
          found = true;
          break;
        }
      }
      if (found) break;
    }
    if (!found) return number;
  }
};

const part1Result = part1();
let part2 = () => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      const preamble = numbers.slice(j, i);
      if (preamble.reduce((a, b) => a + b, 0) === part1Result) {
        return Math.min(...preamble) + Math.max(...preamble);
      }
    }
  }
};
const part2Result = part2();

console.log({ part1: part1Result });
console.log({ part2: part2Result });
