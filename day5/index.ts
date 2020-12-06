import { getLines } from "../util/todaysinput";
const lines = getLines(5)

const binMap: { [key: string]: string } = { F: "0", B: "1", L: "0", R: "1" };
const toBinary = (line: string) => [...line].map((char) => binMap[char]).join("");
const toInt = (bin: string) => parseInt(bin, 2);
const ids = lines.map(toBinary).map(toInt);
const largest = ids.reduce((p, c) => Math.max(p, c));

console.log({ part1: largest });

for (let i = 1; i <= largest; i++) {
  if (!ids.includes(i) && ids.includes(i - 1) && ids.includes(i + 1)) {
    console.log({ part2: i });
  }
}
