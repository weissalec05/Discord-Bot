module.exports = (bot, message, queue) => {

    const { MessageEmbed } = require('discord.js') 
    const embed = new   MessageEmbed()
    .setColor(bot.color)
    .setDescription('I have been disconnect from the Voice channel.')

    message.channel.send(embed);

};
