const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'interactionCreate',
  async execute(client, interaction) {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) {
      const errorEmbed = new EmbedBuilder()
        .setColor('Red')
        .setTitle('❌ Erreur')
        .setDescription('Commande non trouvée');

      return interaction.reply({ embeds: [errorEmbed], ephemeral: true });
    }

    try {
      await command.execute(interaction, client);
    } catch (error) {
      console.error(error);
      const errorEmbed = new EmbedBuilder()
        .setColor('Red')
        .setTitle('❌ Erreur')
        .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande');

      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({ embeds: [errorEmbed], ephemeral: true });
      } else {
        await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
      }
    }
  },
};