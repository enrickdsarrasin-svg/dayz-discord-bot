# 🚀 Guide de Déploiement - Fallout Wasteland Bot

## 📋 Résumé des Liens

Voici tous les liens et informations nécessaires pour déployer et gérer votre bot:

---

## 🔗 LIEN POUR INVITER LE BOT SUR DISCORD

**Remplacez `YOUR_CLIENT_ID` par votre Client ID Discord:**

```
https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands
```

**Permissions incluses:**
- ✅ Administrator
- ✅ Manage Roles
- ✅ Ban/Kick Members
- ✅ Slash Commands

---

## 🖥️ HÉBERGEMENT DU BOT

### Option 1: Replit (GRATUIT)
```
https://replit.com
```
- Gratuit
- Facile à configurer
- Parfait pour commencer

**Étapes:**
1. Créer un compte Replit
2. Fork ce repository
3. Créer les variables d'environnement
4. Run avec `npm start`

### Option 2: Heroku (PAYANT ~$7/mois)
```
https://www.heroku.com
```
- Fiable
- Bon support
- Compatible Node.js

### Option 3: VPS (DigitalOcean ~$5/mois)
```
https://www.digitalocean.com
```
- Plus de contrôle
- Plus rapide
- Nécessite SSH

---

## 📊 BASE DE DONNÉES MONGODB

### Cloud MongoDB Atlas (GRATUIT)
```
https://www.mongodb.com/cloud/atlas
```

**Étapes:**
1. Créer un compte gratuit
2. Créer un cluster (M0 = gratuit)
3. Créer un user DB
4. Copier l'URI: `mongodb+srv://user:pass@cluster.mongodb.net/dbname`
5. Ajouter dans `.env` → `MONGODB_URI`

---

## 🎮 CONNEXION SERVEUR DAYZ

### 1. Configurer RCON

**Fichier `serverDZ.cfg`:**
```
class RconPassword
{
    password = "your_rcon_password_here";
};
```

### 2. Activer les Logs
```
class Logging
{
    class RPCData
    {
        class Combat { file = "Combat"; };
    };
};
```

### 3. Remplir les Variables d'Environnement

```env
DAYZ_SERVER_IP=xxx.xxx.xxx.xxx
DAYZ_SERVER_PORT=2302
DAYZ_RCON_PASSWORD=your_password
```

---

## 📡 API IZURVIVE

### Obtenir la Clé API

```
https://izurvive.com/api
```

**Ou utiliser l'API publique:**
```
https://izurvive.com/api/map/latest
```

**Ajouter dans `.env`:**
```env
IZURVIVE_API_KEY=your_key
IZURVIVE_API_URL=https://izurvive.com/api
```

---

## 📝 FICHIER .env COMPLET

Créer `.env` à la racine:

```env
# DISCORD BOT
DISCORD_TOKEN=paste_your_bot_token_here
DISCORD_CLIENT_ID=paste_your_client_id_here

# MONGODB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dayz-bot

# DAYZ SERVER
DAYZ_SERVER_IP=your_server_ip_address
DAYZ_SERVER_PORT=2302
DAYZ_RCON_PASSWORD=your_rcon_password

# IZURVIVE API
IZURVIVE_API_KEY=your_api_key_or_public
IZURVIVE_API_URL=https://izurvive.com/api

# SETTINGS
NODE_ENV=production
DEFAULT_LANGUAGE=en
PREFIX=/
```

---

## 🎯 CHECKLIST DE DÉPLOIEMENT

Avant de lancer le bot:

- [ ] Discord Bot Token obtenu
- [ ] Client ID Discord copié
- [ ] MongoDB URI configuré
- [ ] Serveur DayZ RCON activé
- [ ] Fichier `.env` complété
- [ ] Dépendances installées (`npm install`)
- [ ] Bot invité sur Discord
- [ ] Rôles créés automatiquement
- [ ] Commandes slash visibles

---

## 🚀 COMMANDES DE LANCEMENT

### Production
```bash
npm start
```

### Développement
```bash
npm run dev
```

### Test
```bash
npm test
```

---

## 📊 COMMANDES DISPONIBLES

### Utilisateurs
- `/balance` - Voir votre solde
- `/job` - Gérer les missions
- `/shop` - Accéder au shop
- `/profile` - Voir votre profil

### Modérateurs/Admins
- `/ban @user 1d "raison"` - Bannir (max 1 jour)
- `/kick @user 12h "raison"` - Expulser (max 1 jour)
- `/unban @user` - Débannir
- `/banlist` - Voir les bans
- `/kicklist` - Voir les kicks

---

## 🔐 SÉCURITÉ

⚠️ **IMPORTANT:**
- Ne jamais partager votre `.env`
- Ne jamais commiter `.env` sur GitHub
- Utiliser `.env.example` comme template
- Régulièrement changer les mots de passe
- Utiliser des tokens uniques par serveur

---

## 🆘 TROUBLESHOOTING

### Bot offline
```
❌ Vérifier le token Discord
❌ Vérifier la connexion internet
❌ Relancer avec: npm start
```

### Erreur MongoDB
```
❌ Vérifier l'URI MongoDB
❌ Vérifier les identifiants
❌ Vérifier l'IP whitelist sur Atlas
```

### Commandes slash n'apparaissent pas
```
❌ Attendre 5 minutes
❌ Rafraîchir Discord (Ctrl+R)
❌ Relancer le bot
```

### Problème RCON DayZ
```
❌ Vérifier le mot de passe
❌ Vérifier l'IP et le port
❌ Redémarrer le serveur DayZ
```

---

## 📞 SUPPORT

- **Documention Bot:** `/help`
- **Logs Bot:** Console du bot
- **GitHub Issues:** https://github.com/enrickdsarrasin-svg/dayz-discord-bot/issues
- **Discord Server:** Votre serveur

---

## 🎮 PROCHAINES ÉTAPES

1. ✅ Configurer le bot
2. ✅ Inviter sur Discord
3. ✅ Tester les commandes
4. ✅ Configurer les rôles
5. ✅ Ajouter des joueurs
6. ✅ Paramétrer le shop
7. ✅ Lancer le serveur

---

**Bon déploiement! 🚀**

*Version 1.0.0 - Fallout Wasteland Discord Bot*
