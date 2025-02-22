// import inquirer and other necessary tools
const { input } = require('@inquirer/prompts')
const child_process = require('node:child_process')
const { directoriesArray } = require('./prompts.js')

function ls_bash(args) {
    const ls = child_process.spawn('ls', ['~/.'])
    console.log('writing bash etc')
    ls.stdout.on('data', (data) => {
        console.log(`stdout: \n ${data}`)
    })
}

// basic Bash script to open a folder
//  - source: full path of source directory
//  - target: full path of target directory
function copy_directory(source, target){
    const cp = child_process.spawn('cp', [source, target, '-r'])

    console.log('copying directory')

    // cp.stdout.on('data', (data) => {
    //     console.log('copying complete')
    // })
}

// function to prompt the user for source and destination directories
async function get_directories() {
    try {
        console.log(directoriesArray)
        const dirs = {
            source: await input(directoriesArray[0]),
            target: await input(directoriesArray[1])
        }

        copy_directory(dirs.source, dirs.target)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    ls_bash,
    copy_directory,
    get_directories
}