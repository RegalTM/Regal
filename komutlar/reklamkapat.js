const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
      if (!message.member.hasPermission("ADMINISTRMediaOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (!db.fetch(`reklamK_${message.channel.id}`)) {
  return message.reply(`Sanırım bu özellik zMediaen kapalıymış :slight_smile:`)
}
  db.delete(`reklamK_${message.channel.id}`)
  message.reply(`Bu özellik **sadece bu kanalda** devre dışı bırakıldı.`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'reklamkapMedia',
  description: 'sayaç', 
  usage: 'sayaç'
};
