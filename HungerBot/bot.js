const Discord = require('discord.js');
const client = new Discord.Client();
const HBfeature = require('./features/HBfeature.js')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.startsWith("h!")) {
    let msga = client.channels.get(msg.channel.id);
    let command = msg.content.split(' ')[0].substring(2).toLowerCase();
    let argument = msg.content.substring(2 + command.length).trimLeft();
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
        msg.reply("So we have: " + HBfeature.foodList());
        break;
      case 'addfood' :
        if (HBfeature.addFood(argument))
          msg.reply(argument + " have been added");
        else
          msg.reply("Usage: h!addfood [argument]");
        break;
      case 'delfood' :
        if (HBfeature.delFood(argument))
          msg.reply(argument + " have been removed");
        else
          msg.reply("Usage: h!delfood [argument]");
        break;
      case 'cook' :
          msg.reply(HBfeature.cookFood());
      }
    }
    else if (msg.content.toLowerCase() === "bot is gay")
      msg.reply("no u");
});


client.login('NTgzMjkxMzUyMDA0MDM0NTYw.XO6dyg.Jvm6zCk9VJ0z4MM47YwNYiu-OSk');