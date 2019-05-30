const fs = require('fs') 

let textfood = fs.readFileSync('./features/Foodlist.txt') + '';
textfood = textfood.split('\r\n');
console.log(textfood);
textfood = textfood.join('\n');

fs.writeFile('./features/Foodlist.txt', textfood, (err) => {
if (err) console.log(err);
   console.log("Fixed");})