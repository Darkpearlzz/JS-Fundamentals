console.log(process.argv);

const { argv } = require('node:process');

if (argv[2] === undefined) {
  console.log("No argument");
} else if (argv[3] === undefined) {
  console.log(argv[2]);
} else {
  console.log(argv[2] + ' ' + argv[3]);
}