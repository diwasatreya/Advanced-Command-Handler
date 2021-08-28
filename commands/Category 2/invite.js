const Discord = require("discord.js");
const { MessageEmbed }  = require('discord.js');
const { prefix, developerID } = require("../../config.json")
module.exports = {
  name: "invite",
  aliases: ["info"],
  description: "Information",
  usage: "",

  run: async (client, message, args) => {

let embed = new MessageEmbed()
        .setTitle(`${client.user.username} Invitation`)
        .setDescription(`I dont need Admin permission. You can give me send message, Embed Links, Attrach Files. In case bot can't reply give manage server permission.

[Click Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands) to invite me!

Do \`${prefix}help\` to more commands.

Join Server for help!
https://discord.gg/gU7XAxTpX5
`)
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("#006732")
        .setFooter(`Requested By: ${message.author.username}`)

    return message.channel.send(embed);

  },
};