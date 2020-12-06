import { getLines } from "../util/todaysInput";

const lines = getLines(4)
let best: [number?, number?, number?] = [];

for (let down = 1; down < 100; down++) {
  for (let right = 1; right < 100; right++) {
    const count = trees(lines, right, down);
    if (best.length === 0 || best[2] > count) best = [right, down, count];
    console.log([right, down, count]);
  }
}
console.log({ best });

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
