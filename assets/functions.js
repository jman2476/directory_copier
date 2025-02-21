// import inquirer and other necessary tools
const inquirer = require('@inquirer/prompts')
const child_process = require('node:child_process')

// write basic Bash script to open a folder
function write_bash(args) {
    const ls = child_process.spawn('ls', ['~/.'])
    console.log('writing bash etc')
    ls.stdout.on('data', (data) => {
        console.log(`stdout: \n ${data}`)
    })
}

module.exports = {
    write_bash
}