# 📦 Guide d'Installation - Fallout Wasteland Bot

## 🖥️ Prérequis

- **Node.js** 16 ou supérieur
- **MongoDB** (local ou cloud Atlas)
- **Discord Bot Token**
- **Serveur DayZ** avec RCON activé
- **Clé API izurvive** (optionnel)

---

## 1️⃣ Étape 1: Cloner le Repository

```bash
git clone https://github.com/enrickdsarrasin-svg/dayz-discord-bot.git
cd dayz-discord-bot
```

---

## 2️⃣ Étape 2: Installer les Dépendances

```bash
npm install
```

---

## 3️⃣ Étape 3: Configurer les Variables d'Environnement

Créer un fichier `.env` à la racine du projet:

```bash
cp .env.example .env
```

Remplissez les variables:

```env
# Discord Bot
DISCORD_TOKEN=votre_token_bot_discord
DISCORD_CLIENT_ID=votre_client_id_discord

# Database MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dayz-bot

# DayZ Server
DAYZ_SERVER_IP=xxx.xxx.xxx.xxx
DAYZ_SERVER_PORT=2302
DAYZ_RCON_PASSWORD=votre_mot_de_passe_rcon

# izurvive API
IZURVIVE_API_KEY=votre_clé_api_izurvive
IZURVIVE_API_URL=https://izurvive.com/api

# Settings
NODE_ENV=production
DEFAULT_LANGUAGE=en
```

---

## 🔑 Récupérer les Clés Nécessaires

### Discord Bot Token

1. Aller sur [Discord Developer Portal](https://discord.com/developers/applications)
2. Cliquer sur "New Application"
3. Nommer l'app "Fallout Wasteland"
4. Aller dans "Bot" → "Add Bot"
5. Copier le TOKEN

### Client ID Discord

Sur la même page, aller dans "General Information" et copier l'ID.

### MongoDB URI

1. Créer un compte gratuit sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Créer un cluster (gratuit)
3. Créer un user de base de données
4. Copier la connexion: `mongodb+srv://user:password@cluster.mongodb.net/dbname`

### izurvive API Key (Optionnel)

Contacter l'équipe izurvive ou utiliser leur API publique.

---

## 🎮 Configurer le Serveur DayZ

### Activer RCON

Dans votre fichier `serverDZ.cfg`:

```
class Missions
{
    class DayZSurvival
    {
        template = "dayzSurvival";
    };
};

class RconPassword
{
    password = "votre_mot_de_passe_rcon";
};
```

### Vérifier les Logs

Assurez-vous que les logs sont activés:
```
class Logging
{
    class RPCData
    {
        class Combat
        {
            file = "Combat"; // logs des kills
            type = "combat";
            hook = "ChatHook";
        };
    };
};
```

---

## 📟 Inviter le Bot sur Discord

Remplacez `YOUR_CLIENT_ID` par votre ID:

```
https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands
```

Permissions:
- ✅ Administrator (simplifie la gestion)
- ✅ Manage Roles
- ✅ Ban Members
- ✅ Kick Members
- ✅ Read Messages
- ✅ Send Messages

---

## 🚀 Lancer le Bot

### En Production

```bash
npm start
```

### En Mode Développement (avec auto-reload)

```bash
npm run dev
```

---

## ✅ Vérification

1. Le bot devrait afficher: `✅ Fallout Wasteland#XXXX is ready!`
2. Le bot apparaît online sur Discord
3. Les rôles sont créés automatiquement
4. Vous pouvez utiliser `/help`

---

## 🐛 Dépannage

### Bot ne se connecte pas
- Vérifier le token Discord
- Vérifier que Node.js est 16+
- Vérifier la connexion internet

### MongoDB ne fonctionne pas
- Vérifier l'URI
- Vérifier les whitelist IPs sur MongoDB Atlas
- Vérifier les identifiants

### Commandes slash n'apparaissent pas
- Attendre 1-5 minutes après le démarrage
- Rafraîchir Discord (Ctrl+R)
- Réinviter le bot sur le serveur

### Problème RCON DayZ
- Vérifier le mot de passe RCON
- Vérifier l'IP et le port du serveur
- Vérifier que RCON est activé sur le serveur

---

## 📊 Hébergement Recommandé

### Bot Discord
- **Replit** (gratuit)
- **Heroku** (payant)
- **VPS** (DigitalOcean, Linode, etc.)
- **Votre propre PC**

### Base de Données
- **MongoDB Atlas** (gratuit 512MB)
- **Mongoose Cloud** (payant)

### Serveur DayZ
- **Nitrado**
- **GameServers.com**
- **Votre serveur dédié**

---

## 🔗 Liens Importants

- [Discord.js Documentation](https://discord.js.org/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [DayZ RCON Documentation](https://community.bistudio.com/wiki/DayZ:Server_Configuration)
- [izurvive Maps](https://izurvive.com/)

---

## 💬 Support

En cas de problème:
1. Vérifier les logs du bot
2. Ouvrir une issue sur GitHub
3. Contacter l'administrateur du serveur

---

**Bon jeu! 🎮**
