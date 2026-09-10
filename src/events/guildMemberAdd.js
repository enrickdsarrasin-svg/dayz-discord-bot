const { Events } = require('discord.js');
const User = require('../models/User');
const { ROLES } = require('../config/roles');

module.exports = {
  name: Events.GuildMemberAdd,
  async execute(member) {
    // Create user in database if doesn't exist
    const existingUser = await User.findOne({ discordId: member.id });
    
    if (!existingUser) {
      const newUser = new User({
        discordId: member.id,
        dayzUsername: member.user.username,
        balance: 0,
        role: 'Survivants',
        language: member.user.locale || 'en'
      });
      await newUser.save();
      console.log(`✅ New user created: ${member.user.username}`);
    }

    // Assign default role (Survivants)
    const survivantRole = member.guild.roles.cache.find(r => r.name === ROLES.SURVIVANTS.name);
    if (survivantRole && !member.roles.cache.has(survivantRole.id)) {
      await member.roles.add(survivantRole);
      console.log(`✅ Assigned Survivants role to ${member.user.username}`);
    }

    // Send welcome message
    try {
      await member.send(`👋 Welcome to **Fallout Wasteland** DayZ Server!\n\nUse \`/help\` to see available commands.`);
    } catch (error) {
      console.log(`Could not send welcome message to ${member.user.username}`);
    }
  }
};
