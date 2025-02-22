// list of prompts
/* TODO:
    - Prompt for source and target paths in text
    - Prompt to select drive for source/target before inputing directory
    - Prompt for selecting directory in command line (*definitely need to look up how to do/which types of prompts to use*)
*/

directoriesArray = [{
    // type: 'input',
    // name: 'source directory path',
    message: 'What is the source directory path?'
},{
    // type: 'input',
    // name: 'target directory path',
    message: 'What is the target directory path?'
}]

module.exports = {directoriesArray}