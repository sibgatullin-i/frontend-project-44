/* import readlineSync from 'readline-sync';

export function oddEven(name) {
  let successCounter = 0;
  const correctAnswersRequired = 3;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (successCounter < correctAnswersRequired){
    let randomNum = Math.floor(Math.random() * 1000);
    console.log(`Question: ${randomNum}`);
    let userAnswer = readlineSync.question('Your answer: ');
    if ( (randomNum % 2 === 0 && userAnswer === 'yes') || ( randomNum % 2 !== 0 && userAnswer === 'no') ) {
        //corect
        successCounter++;
        console.log('Correct!');
    }
    else {
        //incorrect
        console.log( userAnswer === 'yes' ? `\'${userAnswer}\' is wrong answer ;(. Correct answer was \'no\'.` : `\'${userAnswer}\' is wrong answer ;(. Correct answer was \'yes\'.` )
//        if (userAnswer === 'yes') { console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.')}
//        else { console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.')}
        break;
    }
  }
  if (successCounter === 3) {
      console.log(`Congratulations, ${name}!`);
      return true;
  }
  console.log(`Let\'s try again, ${name}`);
  return false;
} */