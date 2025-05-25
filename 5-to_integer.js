console.log(process.argv);

let mint = parseInt(process.argv[2]);

if(isNaN(mint)){
    console.log("Not a number");
} else {
    console.log("My number:" + mint);
}