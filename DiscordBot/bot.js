const Discord = require('discord.js');
const client = new Discord.Client();
const HBfeature = require('./features/HBfeature.js');
const key = require('./auth.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

let NillaHunt = 1;

client.on('message', msg => {
  let NillaHunt = 1;
  if (msg.content.startsWith("h!")) {
    let msga = client.channels.get(msg.channel.id);
    let command = msg.content.split(' ')[0].substring(2).toLowerCase();
    let argument = msg.content.substring(2 + command.length).trimLeft();

    let NillaHunt = 1;

    console.log(msg.author.username + ": " + command);

    switch (command) {
      case 'ping' :
        msga.send("Pong!");
        break;
      case 'avatar' :
        msga.send("https://cdn.discordapp.com/avatars/" + msg.author.id + "/" + msg.author.avatar + ".png?size=256");
        break;
      case 'hungry' :
        msg.reply(HBfeature.txtFood(HBfeature.hungry()));
        break;
      case 'help' :
        msga.send(HBfeature.help);
        break;

      case 'listfood' :
        argument = (argument === ''? 1 : argument);
        msg.reply(`**page ${argument} -` + " Food list page:**\n" + HBfeature.foodList(argument));
        break;
      case 'addfood' :
        msg.reply(HBfeature.addFood(argument));
        break;
      case 'delfood' :
        msg.reply(HBfeature.delFood(argument));
        break;
      case 'cook' :
          msg.reply(HBfeature.cookFood());
          break;
      case 'magicball' :
          msg.reply(HBfeature.magicBall(argument));
          break;
      }
    }
    else if (msg.content.toLowerCase() === "bot is gay")
      msg.reply("no u");
//    if (msg.content.toLowerCase().indexOf("nilla") != -1 && NillaHunt === 1)
//    { 
//      msg.reply("She is married");
//    NillaHunt = 0;}
});


client.login(key.token);