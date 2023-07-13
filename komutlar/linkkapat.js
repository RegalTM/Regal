const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
      if (!message.member.hasPermission("ADMINISTRMediaOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (!db.fetch(`linkK_${message.channel.id}`)) {
  return message.reply(`Sanırım bu özellik zMediaen kapalıymış :slight_smile:`)
}
  db.delete(`linkK_${message.channel.id}`)
  message.reply(`Bu özellik **sadece bu kanalda** devre dışı bırakıldı.`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["link-engel-kapMedia"], 
  permLevel: 0
};

exports.help = {
  name: 'linkengelkapMedia',
  description: 'sayaç', 
  usage: 'sayaç'
};
