module.exports = (bot, message, queue) => {
    const {MessageEmbed} = require('discord.js')
    const embed = new MessageEmbed()
    .setColor(bot.color)
    .setDescription(` Music stopped as there is no more music in the queue !`)
    message.channel.send(embed);

};