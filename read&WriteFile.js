const readFileSync = require("readFileSync");

//it takes two parameter -> path , and character encoding(which usually is UTF-8)
const textIn = fs.readFileSync('./firstProg.js', "utf-8");
console.log(textIn);
