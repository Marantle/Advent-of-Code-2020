import { getText } from '../util/todaysInput'
const text = getText(6);

const groups = text.split(/\r?\n\r?\n/).map((group) => group.split(/\r?\n/));
const questions = Object.fromEntries(
  [..."abcdefghijklmnopqrstuvwxyz"].map((q) => [q, 0])
);
const questions2 = Object.assign({}, questions);

for (const answers of groups) {
  for (const question in questions2) {
    const someAnswered = answers.some((answer) => answer.includes(question));
    const allAnswered = answers.every((answer) => answer.includes(question));
    if (someAnswered) questions[question]++;
    if (allAnswered) questions2[question]++;
  }
}

const part1 = Object.values(questions).reduce((a, b) => a + b, 0);
const part2 = Object.values(questions2).reduce((a, b) => a + b, 0);

console.log({ part1 });
console.log({ part2 });
