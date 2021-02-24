module.exports = (bot, message, playlist) => {
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setColor(bot.color)
    .setDescription(` ${playlist.title} has been added to the queue (**${playlist.items.length}** songs) !`)

    message.channel.send(embed);

};