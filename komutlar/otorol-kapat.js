const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRMediaOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
 const rol = db.fetch(`otoRL_${message.guild.id}`)  
 if(!rol) return message.reply(`Sanırım bu özellik zMediaen kapalıymış :slight_smile:`)
 
 
  message.reply(`Bu özellik **başarıyla kapMediaıldı.** ${client.emojis.get("647760202875142154")}`)

 
  db.delete(`otoRL_${message.guild.id}`)  
  db.delete(`otoRK_${message.guild.id}`) 
  db.delete(`otoRM_${message.guild.id}`)  
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["otorol-kapMedia", "otorolkapMedia"], 
  permLevel: 0
};

exports.help = {
  name: 'oto-rol-kapMedia',
  description: 'taslak', 
  usage: 'Otorol-ayarla'
};
