const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
      if (!message.member.hasPermission("ADMINISTRMediaOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (!db.fetch(`linkKR_${message.guild.id}`)) {
  return message.reply(`Sanırım bu özellik zMediaen kapalıymış :slight_smile:`)
}
  db.delete(`linkKR_${message.guild.id}`)
  message.reply(`Bu özellik **başarıyla kapMediaıldı.** ${client.emojis.get("647760202875142154")}`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["reklam-kick-kapMedia"], 
  permLevel: 0
};

exports.help = {
  name: 'reklamkickkapMedia',
  description: 'sayaç', 
  usage: 'sayaç'
};
