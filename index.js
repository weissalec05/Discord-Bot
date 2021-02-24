const Discord = require('discord.js')
const bot = new Discord.Client();

    if (command === 'help') {
        const helpEmbed = new MessageEmbed()
            .setColor(color)
            .setTitle("Hilfe Menü")
            .addField("nützlich", "`embed` `covid`")
            .addField("Fun", "`meme`")
            
        message.channel.send(helpEmbed)
    }

    if (command === 'covid') {
        const data = await api.all()
        const coronaEmbed = new MessageEmbed()
            .setColor(color)
            .addField("Casses", data.cases)
            .addField("Deaths", data.deaths)
            .addField("Recoverd", data.recovered)
            .addField("Active", data.active)
            .addField("Today Cases", data.todayCases)
            .addField("Critical", data.critical)
            .addField("tests", data.tests)
            .addField("Today Deaths", data.todayDeaths)
            .addField("Cases Per million", data.casesPerOneMillion)
            .addField("Affected Countries", data.affectedCountries)

        message.channel.send(coronaEmbed);
    }

    if (command === 'meme') {
        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(async json => {
                let msg = await message.channel.send('Suche einen Meme...');
                const memeEmbed = new MessageEmbed()
                    .setColor(color)
                    .setTitle(json.title)
                    .setImage(json.url)
                    .setFooter(`Subredit : ${json.subreddit}`);

                msg.edit(memeEmbed);
            })
    }

    if (command === 'embed') {
        message.delete();
        const embedSay = args.join(" ")
        let noEmbedSay = new MessageEmbed()
            .setColor(color)
            .setDescription("Keine Nachricht wurde angegeben!")
        if (!embedSay) return message.channel.send(noEmbedSay)
        const embedembed = new MessageEmbed()
            .setColor(color)
            .setDescription(embedSay)

        message.channel.send(embedembed)
    }

bot.login("Platzhalter_token")
