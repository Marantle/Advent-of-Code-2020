import { getLines } from "../util/todaysInput";
​
const instructions = getLines(8).map((line) => {
  const op = line.split(" ")[0];
  return {
    op: op,
    value: parseInt(line.split(" ")[1]),
    replaced: op === "jmp" ? "nop" : op === "nop" ? "jmp" : op,
  };
});
​
const part1 = () => {
  let i = 0;
  let acc = 0;
  const visited: Record<number, any> = {};
  while (!visited[i]) {
    visited[i] = i;
    const { op, value } = instructions[i];
    if (op === "acc") {
      i++;
      acc += value;
    } else if (op === "nop") {
      i++;
    } else if (op === "jmp") {
      i += value;
    }
  }
  return acc;
};
​
const part2 = () => {
  let currentLine = 0;
  do {
    let i = 0;
    let acc = 0;
    let failed = false;
    const visited: Record<number, any> = {};
    while (i < instructions.length) {
      if (visited[i] || i < 0) {
        failed = true;
        break;
      }
      visited[i] = i;
      const instruction = instructions[i];
​
      const { value } = instruction;
      const op = currentLine === i ? instruction.replaced : instruction.op;
      if (op === "acc") {
        i++;
        acc += value;
      } else if (op === "nop") {
        i++;
      } else if (op === "jmp") {
        i += value;
      }
    }
    if (!failed) {
      return acc;
    }
  } while (currentLine++ < instructions.length);
};
​
console.log({ part1: part1() });
console.log({ part2: part2() });