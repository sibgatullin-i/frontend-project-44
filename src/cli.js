import readlineSync from 'readline-sync';

export function userGreet() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
}

export function dummy() {}
