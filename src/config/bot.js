module.exports = {
  prefix: process.env.PREFIX || '/',
  token: process.env.DISCORD_TOKEN,
  clientId: process.env.DISCORD_CLIENT_ID,
  mongoUri: process.env.MONGODB_URI,
  dayzServer: {
    ip: process.env.DAYZ_SERVER_IP,
    port: process.env.DAYZ_SERVER_PORT || 2302,
    rconPassword: process.env.DAYZ_RCON_PASSWORD,
  },
  izurvive: {
    apiKey: process.env.IZURVIVE_API_KEY,
    apiUrl: process.env.IZURVIVE_API_URL,
  },
  env: process.env.NODE_ENV || 'development',
  language: process.env.DEFAULT_LANGUAGE || 'en',
};