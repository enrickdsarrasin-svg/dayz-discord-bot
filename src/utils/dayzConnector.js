const axios = require('axios');

class DayZConnector {
  constructor() {
    this.serverIP = process.env.DAYZ_SERVER_IP;
    this.serverPort = process.env.DAYZ_SERVER_PORT || 2302;
    this.rconPassword = process.env.DAYZ_RCON_PASSWORD;
  }

  /**
   * Send RCON command to DayZ server
   * @param {string} command - Command to send
   * @returns {Promise<string>} Response
   */
  async sendCommand(command) {
    try {
      const response = await axios.post(`http://${this.serverIP}:${this.serverPort}`, {
        command,
        password: this.rconPassword
      });
      return response.data;
    } catch (error) {
      console.error('DayZ RCON Error:', error.message);
      throw error;
    }
  }

  /**
   * Ban a player
   * @param {string} steamId - Steam ID or name
   * @param {number} duration - Duration in milliseconds
   * @param {string} reason - Ban reason
   */
  async banPlayer(steamId, duration, reason) {
    try {
      let command;
      if (duration === null) {
        command = `ban ${steamId} 0 ${reason}`; // Permanent ban
      } else {
        const days = Math.ceil(duration / (1000 * 60 * 60 * 24));
        command = `ban ${steamId} ${days} ${reason}`;
      }
      return await this.sendCommand(command);
    } catch (error) {
      console.error('Ban error:', error);
      throw error;
    }
  }

  /**
   * Kick a player
   * @param {string} steamId - Steam ID or name
   * @param {string} reason - Kick reason
   */
  async kickPlayer(steamId, reason) {
    try {
      const command = `kick ${steamId} ${reason}`;
      return await this.sendCommand(command);
    } catch (error) {
      console.error('Kick error:', error);
      throw error;
    }
  }

  /**
   * Get list of online players
   * @returns {Promise<Array>} List of players
   */
  async getPlayers() {
    try {
      const response = await this.sendCommand('players');
      return response;
    } catch (error) {
      console.error('Get players error:', error);
      return [];
    }
  }

  /**
   * Check if player is online
   * @param {string} playerName - Player name
   * @returns {Promise<boolean>} Is online
   */
  async isPlayerOnline(playerName) {
    try {
      const players = await this.getPlayers();
      return players.some(p => p.name === playerName);
    } catch (error) {
      return false;
    }
  }
}

module.exports = new DayZConnector();
