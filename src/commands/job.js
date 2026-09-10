const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const User = require('../models/User');
const { JOBS } = require('../config/jobs');
const i18n = require('i18n');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('job')
    .setDescription('Manage your jobs')
    .addStringOption(option =>
      option.setName('action')
        .setDescription('What do you want to do?')
        .setRequired(true)
        .addChoices(
          { name: 'View Available', value: 'view' },
          { name: 'Accept Job', value: 'accept' },
          { name: 'Check Progress', value: 'progress' }
        )),
  
  async execute(interaction) {
    i18n.setLocale(interaction.user.locale || 'en');
    const action = interaction.options.getString('action');
    const user = await User.findOne({ discordId: interaction.user.id });
    
    if (!user) {
      return interaction.reply({ content: '❌ User not found', ephemeral: true });
    }

    if (action === 'view') {
      const embed = new EmbedBuilder()
        .setTitle('📋 Available Jobs')
        .setColor(0x00AAAA)
        .setDescription('Choose a job to earn money!\n');

      Object.values(JOBS).forEach(job => {
        embed.addFields({
          name: `${job.icon} ${job.name}`,
          value: `${job.description}\n💰 Reward: $${job.reward || 'Variable'}`,
          inline: false
        });
      });

      return interaction.reply({ embeds: [embed], ephemeral: true });
    }

    if (action === 'accept') {
      if (user.activeJob && user.activeJob.jobId) {
        return interaction.reply({ content: '❌ You already have an active job!', ephemeral: true });
      }

      // Job selection logic
      return interaction.reply({ content: '📋 Jobs feature coming soon!', ephemeral: true });
    }

    if (action === 'progress') {
      if (!user.activeJob || !user.activeJob.jobId) {
        return interaction.reply({ content: '❌ You don\'t have an active job!', ephemeral: true });
      }

      const job = JOBS[user.activeJob.jobId];
      const embed = new EmbedBuilder()
        .setTitle(`📊 Job Progress: ${job.name}`)
        .setColor(0x00AAAA)
        .addFields(
          { name: 'Progress', value: `${user.activeJob.progress}%` },
          { name: 'Started', value: new Date(user.activeJob.startedAt).toLocaleString() }
        );

      return interaction.reply({ embeds: [embed], ephemeral: true });
    }
  }
};
