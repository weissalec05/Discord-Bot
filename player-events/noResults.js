module.exports = (bot, message, query) => {
    const { MessageEmbed } = require('discord.js')
   
    const embed = new MessageEmbed()
    .setColor(bot.color)
    .setDescription(`No results found on YouTube for ${query} !`)
    message.channel.send(embed);

};