const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
      if (!message.member.hasPermission("ADMINISTRMediaOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (db.fetch(`linkKR_${message.channel.id}`)) {
  return message.reply(`Sanırım bu özellik zMediaen açıkmış :slight_smile:`)
}
  db.set(`linkKR_${message.channel.id}`, message.channel.id)
  message.reply(`**Reklamcıları 3 uyarıdan** sonra otomMediaik olarak sunucudan Mediama şu anda aktif. ${client.emojis.get("647746144155467786")}
DikkMedia: Sunucudan reklamcıyı Mediaması için botun rolü üyeden daha yüksekte rolde olmalıdır. Yoksa hMediaa verebilir ve Mediamaz.  `)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["reklam-kick-aç"], 
  permLevel: 0
};

exports.help = {
  name: 'reklamkickaç',
  description: 'sayaç', 
  usage: 'sayaç'
};
