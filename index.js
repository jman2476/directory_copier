// import necessary tools
const inquirer = require('@inquirer/prompts')

// import functions and prompts
const { ls_bash, copy_directory } = require('./assets/functions')

// initializing function
function init(){
    console.log('process initialized')
    // ls_bash()
    copy_directory('~/source_test/.', '~/target_test')
    //process.exit()
}

console.log('Welcome to Directory Copier, please follow the prompts to use the tool')
init()