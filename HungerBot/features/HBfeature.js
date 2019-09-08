const fs = require('fs') 
const commandHelp = ["__Hungerbot 0.4 *by 4shin*__",
    "**Hungry**: Give you a random meal",
    "**AddFood**: Add a new meal",
    "**Delfood**: Remove a meal",
    "**ListFood**: The list of meal",
    "**Cook**: Make a food abomination\n",
 
    "**MagicBall**: Anwser questions",
    "**Hands:** You get hands",
    "**Avatar**: Give your avatar in a 256px res",
    "**Ping**: Pong"]
const foodlistP = './features/Foodlist.txt';
const botKiller = './features/BotKiller.txt';

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
        if (!newfood) {return("Usage: h!addfood [food]")}
        let textfood = fs.readFileSync(foodlistP) + '';
        let foodboard = [];
        foodboard = textfood.split('\n');
        if (!(foodboard.every((checkF) => checkF !== newfood)))
            return(newfood + " is already on the list");
        foodboard.push(newfood);
        textfood = foodboard.join('\n');
        fs.writeFile(foodlistP, textfood, (err) => {
        if (err) console.log(err);
            console.log(newfood + " added");}
        ); return (newfood + " has been added")},

    delFood(food) {
        if (!food) {return("Usage: h!delfood [Food]")}
        let textfood = fs.readFileSync(foodlistP) + '';
        textfood = textfood.split('\n');
        if (textfood.every((checkF) => checkF !== food))
            return(food + " isnt't on the list");
        textfood = textfood.filter(word => word !== food);
        textfood = textfood = textfood.join('\n');
        fs.writeFile(foodlistP, textfood, (err) => {
            if (err) console.log(err);
        console.log(food + " removed")});
        return (food + " have been removed");},

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
        `${LFood}`, `Well we have some ${food}, but ${SecondFood} is better!`, `Somebody once told me to eat ${food}`,
        `Everyone:\nThe bot: Hey eat ${food}`, `eat ${food} or starve`];
        return(should[Math.floor(Math.random() * should.length)])},

    foodList(page) {
        let textfood = fs.readFileSync(foodlistP) + '';
        textfood = textfood.split('\n');
        textfood = textfood.slice((page - 1) * 100, (page) * 100);
        textfood = textfood.join(', ');
        return (textfood);},

    cookFood() {
        let food = [this.hungry(), this.hungry(), this.hungry(), this.hungry(), this.hungry()];
        Lfood = UpFirst(food[0]);
        let should = [`Okay follow thoses step:\n1.Put a fresh ${food[1]} in the oven\n2.Cut some ${food[2]} and put it in the oven when the ${food[1]} is roasted\n3.Serve it with some ${food[3]} and bon appetit!`,
                `Here my secret recipe:\n1.add a bunch of ${food[0]} and some ${food[1]} in the mixer\n2.And serve the mixture with some ${food[2]}\nA great drink to go with your ${food[3]}`,
                `Here how to do a ${food[2]} salad:\n1.put some ${food[1]} and ${food[0]} in a bowl\n2.cut some ${food[3]} and add it to the salad\n3.And then add ${food[2]} and you can serve it!`,
                `From what I understood from Azu\'s stream\n1.You take one ${food[0]} and cut some ${food[1]} on it\n2.If you have some ${food[2]} add it to the ${food[0]}\nIf you don't have ${food[2]}, you can put some ${food[4]} instead\n3.Put it in the oven then serve it with the rest of ${food[3]}`,
                `Okay 5min recipe:\n1.Put that ${food[0]} in the microwave\n2.cut some ${food[1]} into small slice\n3.And mix everything with ${food[2]}\nSound tasty!`]
        return(should[Math.floor(Math.random() * should.length)])},

    magicBall(question) {
        var responses = ["It is certain", "Without a doubt", "You may rely on it", "Most likely", "Yes",
        "Signs point to yes", "Better not tell you now", "Don't count on it", "My reply is no", "My sources say no",
        "Outlook not so good", "Very doubtful"];
		return(question, " " + responses[Math.floor(Math.random() * (responses.length))]);},
    killBot(killer) {
        let textKiller = fs.readFileSync(botKiller) + '';
        let killerBoard = [];
        killerBoard = textKiller.split('\n');
        killerBoard.push(killer);
        textKiller = killerBoard.join('\n');
        fs.writeFile(botKiller, textKiller, (err) => {
        if (err) console.log(err);} )}
}

module.exports = feature;