const name = "Ahmed";
const yearsOfExperience = 5;
const isLearningNodeJs = true;

function introduceUser(
  userName: string,
  learningNodeJs: boolean
): string {
  return `${userName} is currently learning Node.js: ${learningNodeJs}`;
}

const technologies = ["JavaScript", "TypeScript", "Node.js"];

console.log(name);
console.log(yearsOfExperience);
console.log(isLearningNodeJs);
console.log(introduceUser(name, isLearningNodeJs));

for (const technology of technologies) {
  console.log(technology);
}