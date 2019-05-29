const Discord = require('discord.js');
const client = new Discord.Client();
const HBfeature = require('./features/HBfeature.js')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.substring(0, 3) == "!h ") {
      console.log(msg.content);

      let msga = client.channels.get(msg.channel.id); // Replace with known channel ID
      let command = msg.content.substring(3);

      console.log(command); 
      switch (command.toLowerCase()) {
          case 'ping' :
            msga.send("Pong!");
            break;
          case 'avatar' :
            msga.send("https://cdn.discordapp.com/avatars/" + msg.author.id + "/" + msg.author.avatar + ".png?size=256");
            break;
          case 'hungry' :
            msg.reply(HBfeature.txtFood(HBfeature.hungry()));
            break;
          case 'foodlist' :
            msg.reply("So we have: " + HBfeature.foodList());
            break;
          case 'help' :
            msg.reply(HBfeature.help);
            break;
      }
      if (command.substring(0, 8).toLowerCase() === 'addfood ')
      {
            HBfeature.addFood(command.substring(8));
            msg.reply(command.substring(8) + " have been added");
      }
      else if (command.substring(0, 8).toLowerCase() === 'delfood ')
      {
          HBfeature.delFood(command.substring(8));
          msg.reply(command.substring(8) + " have been removed");
      }
    
//      msg.reply("No u");
    }
});


client.login();
