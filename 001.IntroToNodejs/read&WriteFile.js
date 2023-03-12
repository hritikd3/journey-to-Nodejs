const fs = require('fs');

//it takes two parameter -> path , and character encoding(which usually is UTF-8)
const textIn = fs.readFileSync(`${__dirname}/txt/text.txt`, "utf-8");
console.log(textIn);

const textOut= `This is sample txt which we write ${textIn} and also let's see the ${textOut} `;
fs.writeFileSync(`${__dirname}/txt/output.txt`, textOut)
console.log('file written ')
