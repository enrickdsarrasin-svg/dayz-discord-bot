const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const User = require('../models/User');
const i18n = require('i18n');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('balance')
    .setDescription('Check your current balance'),
  
  async execute(interaction) {
    i18n.setLocale(interaction.user.locale || 'en');
    const user = await User.findOne({ discordId: interaction.user.id });
    
    if (!user) {
      return interaction.reply({ content: '❌ User not found. Please wait for initialization.', ephemeral: true });
    }

    const embed = new EmbedBuilder()
      .setTitle('💰 Your Balance')
      .setColor(0x00AA00)
      .addFields(
        { name: 'Current Balance', value: `$${user.balance.toLocaleString()}`, inline: true },
        { name: 'Total Earned', value: `$${user.statistics.totalEarned.toLocaleString()}`, inline: true },
        { name: 'Total Spent', value: `$${user.statistics.totalSpent.toLocaleString()}`, inline: true },
        { name: 'Zombie Kills', value: user.kills.zombies.toString(), inline: true },
        { name: 'Player Kills', value: user.kills.players.toString(), inline: true },
        { name: 'Drugs Dealt', value: user.statistics.drugsDealt.toString(), inline: true }
      );

    interaction.reply({ embeds: [embed], ephemeral: true });
  }
};
