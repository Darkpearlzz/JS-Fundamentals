const { argv } = require('node:process');

if (argv.length === 4){
    console.log(`${argv[2]} is ${argv[3]}`);
}