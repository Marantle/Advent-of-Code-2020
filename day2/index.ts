import { getText } from "../util/todaysInput";

const lines = getText(2).split(/\r?\n/);
const part1 = lines.map(getParts).filter(checkPasswordPart1).length;

const part2 = lines.map(getParts).filter(checkPasswordPart2).length;

console.log({ part1 });
console.log({ part2 });

type Parts = ReturnType<typeof getParts>;

function getParts(text: string) {
  const match = /(\d+)-(\d+) (\D): ([a-z]+)/gm.exec(text) as RegExpExecArray;

  const min = Number(match[1]);
  const max = Number(match[2]);
  const rule = match[3];
  const pass = match[4];

  return { min, max, rule, pass };
}

function checkPasswordPart1({ min, max, rule, pass }: Parts) {
  const count = (pass.match(new RegExp(rule, "g")) || []).length;
  if (count >= min && count <= max) return true;
  else return false;
}

function checkPasswordPart2({ min, max, rule, pass }: Parts) {
  return (pass[min - 1] === rule) !== (pass[max - 1] === rule);
}
