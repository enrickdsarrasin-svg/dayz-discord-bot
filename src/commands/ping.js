const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Affiche la latence du bot'),
  
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setColor('Blue')
      .setTitle('🏓 Pong!')
      .addFields(
        { name: 'Latence API', value: `${client.ws.ping}ms`, inline: true },
        { name: 'Latence Réponse', value: `${Date.now() - interaction.createdTimestamp}ms`, inline: true }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};