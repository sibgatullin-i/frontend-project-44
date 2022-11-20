import readlineSync from 'readline-sync';

export const correctAnswersRequired = 3;

export function userGreet() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
}

export function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  }
  return userAnswer === correctAnswer;
}

export function endgameMessage(name, state) {
  console.log(state ? `Congratulations, ${name}!` : `Better luck next time, ${name}!`);
  console.log(`Let's try again, ${name}!`);
}

export function randomItem(array) {
  const randomSeed = Math.random();
  for (let i = 1; i <= array.length; i += 1) {
    if (randomSeed <= (i / array.length)) {
      return array[i - 1];
    }
  }
  return null;
}
