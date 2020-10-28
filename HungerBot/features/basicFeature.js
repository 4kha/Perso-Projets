const commandHelp = ["__Hungerbot 0.4 *by 4shin*__",
    "**Hungry**: Give you a random meal",
    "**AddFood**: Add a new meal",
    "**Delfood**: Remove a meal",
    "**ListFood**: The list of meal",
    "**Cook**: Make a food abomination\n",
 
    "**MagicBall**: Anwser questions",
    "**Hands:** You get hands (not avariable yet)",
    "**Avatar**: Give your avatar in a 256px res",
    "**Ping**: Pong"]

const basic = {
    returnAvatar(arg, pinged) {
  //      let user = client.users.find("username", arg);
       // console.log(client.guild);
       console.log(pinged);
       if (pinged) {
        return ("https://cdn.discordapp.com/avatars/" + pinged.user.id + "/" + pinged.user.avatar + ".png?size=256")
       }
       else {
           return ('User not founnd!')
       }
    }
}

module.exports = basic;