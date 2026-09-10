const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const i18n = require('i18n');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Show all available commands'),
  
  async execute(interaction) {
    i18n.setLocale(interaction.user.locale || 'en');
    
    const embed = new EmbedBuilder()
      .setTitle('📖 Fallout Wasteland - Help')
      .setColor(0x00AA00)
      .setDescription('All available commands for the bot\n')
      .addFields(
        {
          name: '💰 Economy Commands',
          value: '`/balance` - Check your balance\n`/shop [action]` - Access the shop\n`/job [action]` - Manage jobs',
          inline: false
        },
        {
          name: '🔨 Moderation (Admin/Mod)',
          value: '`/ban [user] [duration] [reason]` - Ban a user\n`/kick [user] [duration] [reason]` - Kick a user\n`/unban [user]` - Unban a user\n`/banlist` - View bans\n`/kicklist` - View kicks',
          inline: false
        },
        {
          name: '💊 Drugs (Vendor)',
          value: '`/drug-locations` - View drug selling locations\n`/drug-price [drug]` - Check drug prices',
          inline: false
        },
        {
          name: '⚙️ Settings',
          value: '`/profile` - View your profile\n`/settings` - Change settings',
          inline: false
        }
      )
      .setFooter({ text: 'Use /help [command] for more info' });

    interaction.reply({ embeds: [embed], ephemeral: true });
  }
};
