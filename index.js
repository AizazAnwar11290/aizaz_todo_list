#! /user/bin/env node
import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10);
console.log(systemGeneratedNo);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "write your guess b/w 1 to 10:"
    }
]);
const { userGuess } = answers;
console.log(userGuess, "userGuess", systemGeneratedNo, `Sys`);
if (userGuess === systemGeneratedNo) {
    console.log("yahooo Your answer is correct\n You Win!");
}
else {
    console.log("Please try again Better luck next time!");
}
