# directory_copier
Tool to easily copy files from an external storage source to a local directory, that allows the user to specify the source and destination, then runs a bash script after user confirmation

## Goal
The goal of this application is to write and run a bash script of the form 
> cp {-r} ./SourceFolder ./DestinationFolder

with the future possibility of adding options for targeting one or more specific file extensions.

## Research & TODO
- Figure out how to use `node.child_process.spawn()` to run bash commands
- Figure out how to target specific file extensions with the `cd` command
- Write command to a save file so that it may be viewed before running
- Provide option to delete data from source directory after copying
- Create robust CLI using `@inquirer/prompts` to allow fine customization to the process being run