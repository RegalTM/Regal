const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
      if (!message.member.hasPermission("ADMINISTRMediaOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (!db.fetch(`otobsilici_${message.channel.id+message.guild.id}`)) {
  return message.reply(`Sanırım bu özellik zMediaen kapalıymış :slight_smile:`)
}
  db.delete(`otobsilici_${message.channel.id+message.guild.id}`)
  message.reply(`**Sadece bu sohbet kanalında** tüm botların mesajını 2 dakika sonra silme şu anda bu özellik devre dışı. ${client.emojis.get("647746144155467786")}
Sunucunuzun sohbet temizliği için bunu kullanmanız önerilir.`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'otobotsilicikapMedia',
  description: 'sayaç', 
  usage: 'sayaç'
};
