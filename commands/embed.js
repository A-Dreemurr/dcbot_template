const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder().setName("embed").setDescription("show an embed"),
    async execute(client, interaction) {
        const embed = new EmbedBuilder()
            .setTitle("I'm an Embed")
            .setColor("Random")
            .setDescription('早上好中囯，现在我有冰激凌')
            .addFields(
                            {
                                name: '两个礼拜以后',
                                value: '因為非常好电影',
                                inline: true
                            },
                            {
                                name: '速度与激情9',
                                value: '動作非常好',
                                inline: true
                            }
                        )
        interaction.reply({ embeds: [embed] });
    },
};

    
/*
.setURL('放URL')
.setAuthor({ name: '', iconURL: '放URL', url: '放URL' })
.setDescription('')
.setThumbnail('放URL')
.addFields({ name: '', value: '', inline: true or false })
.setImage('放URL')
.setTimestamp()
.setFooter({ text: '', iconURL: '放URL' });
*/
