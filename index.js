// import necessary tools
const inquirer = require('@inquirer/prompts')

// import functions and prompts
const { write_bash } = require('./assets/functions')

// initializing function
async function init(){
    console.log('process initialized')
    await write_bash()
    //process.exit()
}

console.log('Welcome to Directory Copier, please follow the prompts to use the tool')
init()