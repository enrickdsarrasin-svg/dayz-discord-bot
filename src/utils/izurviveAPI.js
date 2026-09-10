const axios = require('axios');

class IzurviveAPI {
  constructor() {
    this.baseURL = process.env.IZURVIVE_API_URL || 'https://izurvive.com/api';
    this.apiKey = process.env.IZURVIVE_API_KEY;
  }

  /**
   * Get player position on map
   * @param {string} playerName - Player name
   * @returns {Promise<Object>} Player position
   */
  async getPlayerPosition(playerName) {
    try {
      const response = await axios.get(`${this.baseURL}/players/${playerName}`, {
        headers: { 'Authorization': `Bearer ${this.apiKey}` }
      });
      return response.data;
    } catch (error) {
      console.error('izurvive API Error:', error.message);
      return null;
    }
  }

  /**
   * Get all drug locations
   * @returns {Promise<Array>} Drug locations
   */
  async getDrugLocations() {
    try {
      const response = await axios.get(`${this.baseURL}/locations/drugs`, {
        headers: { 'Authorization': `Bearer ${this.apiKey}` }
      });
      return response.data;
    } catch (error) {
      console.error('Drug locations error:', error.message);
      return [];
    }
  }

  /**
   * Get storage boxes on map
   * @returns {Promise<Array>} Storage locations
   */
  async getStorageLocations() {
    try {
      const response = await axios.get(`${this.baseURL}/locations/storage`, {
        headers: { 'Authorization': `Bearer ${this.apiKey}` }
      });
      return response.data;
    } catch (error) {
      console.error('Storage locations error:', error.message);
      return [];
    }
  }

  /**
   * Get map data
   * @returns {Promise<Object>} Map data
   */
  async getMapData() {
    try {
      const response = await axios.get(`${this.baseURL}/map`, {
        headers: { 'Authorization': `Bearer ${this.apiKey}` }
      });
      return response.data;
    } catch (error) {
      console.error('Map data error:', error.message);
      return null;
    }
  }

  /**
   * Get loot locations
   * @param {string} itemName - Item to search
   * @returns {Promise<Array>} Loot locations
   */
  async getLootLocations(itemName) {
    try {
      const response = await axios.get(`${this.baseURL}/loot/${itemName}`, {
        headers: { 'Authorization': `Bearer ${this.apiKey}` }
      });
      return response.data;
    } catch (error) {
      console.error('Loot locations error:', error.message);
      return [];
    }
  }
}

module.exports = new IzurviveAPI();
