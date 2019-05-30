const fs = require('fs') 
const commandHelp = ["__Hungerbot 0.3 *by 4shin*__",
    "**Hungry**: Give you a random meal",
    "**AddFood**: Add a new meal",
    "**Delfood**: Remove a meal",
    "**ListFood**: The list of meal",
    "**Cook**: Make a food abomination\n",

    "**Avatar**: Give your avatar in a 256px res",
    "**Ping**: Pong"]
const foodlistP = './features/Foodlist.txt';

function UpFirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const feature = {
    help: commandHelp.join('\n'),
    hungry() {
        let textfood = fs.readFileSync(foodlistP) + '';
        textfood = textfood.split('\n');
        return(textfood[Math.floor(Math.random() * textfood.length)]);},

    addFood(newfood) {
        if (!newfood) {return(0)}
        let textfood = fs.readFileSync(foodlistP) + '';
        let foodboard = [];
        foodboard = textfood.split('\n');
        foodboard.push(newfood);
        textfood = foodboard.join('\n');
        fs.writeFile(foodlistP, textfood, (err) => {
        if (err) console.log(err);
            console.log(newfood + " added");}
        ); return (1)},

    delFood(food) {
        if (!food) {return(0)}
        let textfood = fs.readFileSync(foodlistP) + '';
        textfood = textfood.split('\n');
        textfood = textfood.filter(word => word !== food);
        textfood = textfood = textfood.join('\n');
        fs.writeFile(foodlistP, textfood, (err) => {
            if (err) console.log(err);
        console.log(food + " removed")});
        return (1);},

    txtFood(food) {
        let LFood = UpFirst(food);
        let SecondFood = this.hungry();
        let should = ["What about some " + food, "I know! You need " + food, "Today is a great day to eat " + food,
        "Hey, eat some " + food, "Im sure you always wanted " + food, "The only thing you need is " + food, "Then taste that " + food,
        "Today, you should eat " + food, "It's time to eat " + food, "Then eat " + food, LFood + " is on the menu",
        LFood + ", " + food + ", and even more " + food, LFood + " is the only thing you should eat", LFood + " for sure",
        `Have you ever tried ${food}?`, `Sorry we have only ${food} left`, `${LFood} is love, ${food} is life`,
        `${food.toUpperCase()}! ${food.toUpperCase()}!! ${food.toUpperCase()}!!!!`, `${LFood}: Just try it`,
        `A wise man said, some ${food} a day, keep the doctor away!`, `Can we stop and get ${food}\nMom : We already have ${food} at home\n${LFood} at home: ${SecondFood}`,
        `${LFood}`, `Well we have some ${food}, but ${SecondFood} is better!`, `Somebody once told me to eat ${food}`];
        return(should[Math.floor(Math.random() * should.length)])},

    foodList() {
        let textfood = fs.readFileSync(foodlistP) + '';
        textfood = textfood.split('\n');
        textfood = textfood.join(', ');
        return (textfood);},

    cookFood() {
        let food = [this.hungry(), this.hungry(), this.hungry(), this.hungry(), this.hungry()];
        Lfood = UpFirst(food[0]);
        let should = [`Okay follow thoses step:\n1.Put a fresh ${food[1]} in the oven\n2.Cut some ${food[2]} and put it in the oven when the ${food[1]} is roasted\n3.Serve it with some ${food[3]} and bon appetit!`,
                `Here my secret recipe:\n1.add a bunch of ${food[0]} and some ${food[1]} in the mixer\n2.And serve the mixture with some ${food[2]}\nA great drink to go with your ${food[3]}`,
                `Here how to do a ${food[2]} salad:\n1.put some ${food[1]} and ${food[0]} in a bowl\n2.cut some ${food[3]} and add it to the salad\n3.And then add ${food[2]} and you can serve it!`,
                `From what I understood from Azu\'s stream\n1.You take one ${food[0]} and cut some ${food[1]} on it\n2.If you have some ${food[2]} then add it to the ${food[0]}\nIf you don't have ${food[2]}, you can put some ${food[4]} instead\n3.Put it in the oven then serve it with the rest of ${food[3]}`]
        return(should[Math.floor(Math.random() * should.length)])
        }
}

module.exports = feature;