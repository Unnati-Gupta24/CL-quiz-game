#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

console.log(chalk.bgYellow('YO WELCOME'));

let playerName;

const sleep = (ms=2000)=> new Promise((r)=>setTimeout(r,ms));

async function welcome(){
   const rainbowTitle = chalkAnimation.rainbow(
    'Get ready to play a really cool quiz!!!!\n'
   );

   await sleep();
   rainbowTitle.stop();

   console.log(`
    ${chalk.bgBlue('HOW TO PLAY')}
    I am dino.
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    So get all the questions right 🥺...
    `);
}
await welcome();

async function askName(){
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
        default(){
            return 'Player';
        },
    });
    playerName = answers.player_name;
}

await askName();

async function question1(){
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'Which one of these is the smallest computer? \n',
        choices: [
            'Mainframe computer',
            'Laptop',
            'Tablet',
            'Computers',
        ],
    });
    return handleAnswer1(answers.question_1);
}

async function handleAnswer1(isCorrect1){
    const spinner = createSpinner('Checking answer...').start();
    await sleep();
    if(isCorrect1=='Tablet'){
        spinner.success({test: `Nice work ${playerName}. That's a legit answer`});
    }else{
        spinner.error({text: `Game over, you lose ${playerName}`});
        process.exit(1);
    }
}
await question1();

async function question2(){
    const answers = await inquirer.prompt({
        name: 'question_2',
        type: 'list',
        message: 'Who invented the first mechanical computer?\n',
        choices: [
            'Charles Babbage',
            'Lady ada lovelace',
            'Benjamin franklin',
            'None',
        ],
    });
    return handleAnswer(answers.question_2);
}

async function handleAnswer(isCorrect){
    const spinner = createSpinner('Checking answer...').start();
    await sleep();
    if(isCorrect=='Charles Babbage'){
        spinner.success({test: `Nice work ${playerName}. That's a legit answer`});
    }else{
        spinner.error({text: `Game over, you lose ${playerName}`});
        process.exit(2);
    }
}
await question2();

async function question3(){
    const answers = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: 'Which one of these components keeps the computer running when the power supply goes?\n',
        choices: [
            'CPU',
            'UPS',
            'Monitor',
            'None',
        ],
    });
    return handleAnswer2(answers.question_3);
}

async function handleAnswer2(isCorrect2){
    const spinner = createSpinner('Checking answer...').start();
    await sleep();
    if(isCorrect2=='UPS'){
        spinner.success({test: `Nice work ${playerName}. That's a legit answer`});
    }else{
        spinner.error({text: `Game over, you lose ${playerName}`});
        process.exit(3);
    }
}
await question3();


async function question4(){
    const answers = await inquirer.prompt({
        name: 'question_4',
        type: 'list',
        message: 'When was first computer invented?\n',
        choices: [
            '1639',
            '1973',
            '1537',
            '1837',
        ],
    });
    return handleAnswer2r(answers.question_4);
}

async function handleAnswer2r(isCorrect2r){
    const spinner = createSpinner('Checking answer...').start();
    await sleep();
    if(isCorrect2r=='1837'){
        spinner.success({test: `Nice work ${playerName}. That's a legit answer`});
    }else{
        spinner.error({text: `Game over, you lose ${playerName}`});
        process.exit(4);
    }
}
await question4();

async function question5(){
    const answers = await inquirer.prompt({
        name: 'question_5',
        type: 'list',
        message: 'Is this game fun?\n',
        choices: [
            'Yes',
            'No',
            'Maybe',
            'None',
        ],
    });
    return handleAnswerg(answers.question_5);
}

async function handleAnswerg(isCorrect6){
    const spinner = createSpinner('Checking answer...').start();
    await sleep();
    if(isCorrect6){
        spinner.success({test: `Nice work ${playerName}. That's a legit answer`});
    }else{
        spinner.error({text: `Game over, you lose ${playerName}`});
        process.exit(5);
    }
}
await question5();



function winner(){
    console.clear();
    const msg = `Congrats, you won ${playerName}! \n `;

    figlet(msg, (err,data)=>{
        console.log(gradient.pastel.multiline(data));
    });
}

await winner();