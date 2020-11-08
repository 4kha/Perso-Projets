const Discord = require('discord.js');
const client = new Discord.Client();
const HBfeature = require('./features/HBfeature.js');
const basicFeature = require('./features/basicFeature.js');
const minimatch = require('minimatch')
const key = require('./auth.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

  if (msg.channel.name.indexOf('bot') != -1 && msg.content.startsWith("h!")) {
    if (msg.author.bot) return;
    //console.log("\n\nChannel\n\n");
    //console.log(msg.channel);

    //console.log("\n\nClient\n\n");
    //console.log(client.channels);

    let msga = msg.channels;

    //console.log("\n\nDone\n\n");

    let command = msg.content.split(' ')[0].substring(2).toLowerCase();
    let argument = msg.content.substring(2 + command.length).trimLeft();
    let pinged = msg.guild.member(msg.mentions.users.first()/* || msg.guild.members.get(argument)*/);

    console.log(msg.author.username + ": " + command);
    switch (command) {
      case 'ping' :
        msga.send("Pong!");
        break;
        case 'hands' :
          msga.send("We're out of hand, ask Xiu for restock.");
          break;
      case 'avatar' :
        msga.send(basicFeature.returnAvatar(argument, pinged));
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
      case 'mb' :
          msg.reply(HBfeature.magicBall(argument));
          break;
      case 'killbot' :
          msg.reply(`What have you done ${msg.author.username}? *die*`);
          HBfeature.killBot(msg.author.username);
          setTimeout(function(){process.exit();}, 4000);
      }
    }
    else if (minimatch(msg.content.toLowerCase(), "*bot*is*gay*"))
      msg.reply("no u");
    else if (minimatch(msg.content.toLowerCase(), "*bot*is*lovely*"))
      msg.reply("Aww, thank");
});

client.login(key.token);

//bot.on('message' message => {
//  message.channel.send("My Bot's message", {files: ["https://i.imgur.com/XxxXxXX.jpg"]});   });