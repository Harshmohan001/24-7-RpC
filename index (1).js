const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1099642415754776628')
        .setType('WATCHING')
        .setURL('https://www.instagram.com/drkxstarc.ae/')
        .setState('J U S T  R E G R E T S. . . ')
        .setName('R E G R E T S ')
        .setDetails('R E G R E T S ')
        .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1155395715976151052/1175859334828273764/night-drive-drive.gif?ex=656cc357&is=655a4e57&hm=10c403e5d23b7f45fa81842e&')
        .setAssetsLargeText('ライフ')
        .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1135675970460856472.gif?size=96&quality=lossless')
        .setAssetsSmallText('Nom Nom')
        .addButton('ＹＯＵＴＵＢＥ', 'https://www.youtube.com/watch?v=marKTiS3aW4')
        

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);












