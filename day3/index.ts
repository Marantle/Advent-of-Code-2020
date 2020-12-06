import { getLines } from "../util/todaysInput";
const lines = getLines(3);

const part1 = trees(lines, 3, 1);

const part2Slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

let part2 = part2Slopes
  .map(([r, d]) => trees(lines, r, d))
  .reduce((a, b) => a * b);
  
console.log({ part1 });
console.log({ part2 });

function trees(lines: string[], right: number, down: number) {
  let x = 0;
  let trees = 0;
  for (let i = 0; i < lines.length; i += down, x += right) {
    const line = lines[i];
    if (line[x % line.length] === "#") {
      trees++;
    }
  }
  return trees;
}
