// import necessary tools
const inquirer = require('@inquirer/prompts')

// import functions and prompts
const { get_directories, copy_directory } = require('./assets/functions')

// initializing function
async function init(){
    console.log('process initialized')
    
    await get_directories()
    // copy_directory('~/source_test/.', '~/target_test')
    //process.exit()
}

console.log('Welcome to Directory Copier, please follow the prompts to use the tool')
init()