module.exports = {
  // Bot Configuration
  prefix: process.env.PREFIX || '/',
  token: process.env.DISCORD_TOKEN,
  clientId: process.env.DISCORD_CLIENT_ID,
  
  // Database
  mongoUri: process.env.MONGODB_URI,
  
  // DayZ Server
  dayzServer: {
    ip: process.env.DAYZ_SERVER_IP,
    port: process.env.DAYZ_SERVER_PORT || 2302,
    rconPassword: process.env.DAYZ_RCON_PASSWORD,
  },
  
  // APIs
  izurvive: {
    apiKey: process.env.IZURVIVE_API_KEY,
    apiUrl: process.env.IZURVIVE_API_URL,
  },
  
  // Environment
  env: process.env.NODE_ENV || 'development',
  language: process.env.DEFAULT_LANGUAGE || 'en',
};
