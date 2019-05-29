const fs = require('fs') 

function UpFirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const feature = {
    help: "__Hungerbot 0.2 *by 4shin*__\n**Hungry**: Give you a random meal\n**AddFood**: Add a new meal\n**Delfood**: Remove a meal\n**Foodlist**: The list of meal\n\n**Avatar**: Give your avatar in a 256px res\n**Ping**: Pong",
    hungry() {
        let textfood = fs.readFileSync('./features/Foodlist.txt') + '';
        textfood = textfood.split('\n');
        return(textfood[Math.floor(Math.random() * textfood.length)]);},

    addFood(newfood) {
        let textfood = fs.readFileSync('./features/Foodlist.txt') + '';
        let foodboard = [];
        foodboard = textfood.split('\n');
        foodboard.push(newfood);
        textfood = foodboard.join('\n');
        fs.writeFile('./features/Foodlist.txt', textfood, (err) => {
        if (err) console.log(err);
            console.log(newfood + " added");}
        )},

    txtFood(food) {
        let LFood = UpFirst(food);
        let should = ["What about some " + food, "I know! You need " + food, "Today is a great day to eat " + food,
        "Hey, eat some " + food, "Im sure you always wanted " + food, "The only thing you need is " + food, "Then taste that " + food,
        "Today, you should eat " + food, "It's time to eat " + food, "Then eat " + food, LFood + " is on the menu",
        LFood + ", " + food + ", and even more " + food, LFood + " is the only thing you should eat" ];
        return(should[Math.floor(Math.random() * should.length)])},

    foodList() {
        let textfood = fs.readFileSync('./features/Foodlist.txt') + '';
        textfood = textfood.split('\n');
        textfood = textfood.join(', ');
        return (textfood);},

    delFood(food) {
        let textfood = fs.readFileSync('./features/Foodlist.txt') + '';
        textfood = textfood.split('\n');
        textfood = textfood.filter(word => word !== food);
        textfood = textfood = textfood.join('\n');
        fs.writeFile('./features/Foodlist.txt', textfood, (err) => {
            if (err) console.log(err);
        console.log(food + " removed")})
    }
}

module.exports = feature;