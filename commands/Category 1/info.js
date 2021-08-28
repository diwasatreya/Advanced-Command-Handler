const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "info",
  aliases: ["help"],
  description: "Information",

  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
    .setTitle(`Command Handler`)
      .addField(`${message.author.tag}`, `If any kind of help needed then join our server many developers are waiting for you.`)
      .addField(`Xddd`,`Thanks for using this`)
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter("Click on these buttons to know more about me!")
      .setColor("#FFFFF0")


      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Github') 
      .setURL("https://github.com/diwasatreya/");
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Support Server') 
      .setURL("https://discord.gg/admin");


      return message.channel.send(helpEmbed,{
        button: [button1,button2],
      });

  },
};