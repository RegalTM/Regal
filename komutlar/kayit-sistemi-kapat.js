const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRMediaOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
 const rol = db.fetch(`kayitKanal_${message.guild.id}`)  
 if(!rol) return message.reply(`Sanırım bu özellik zMediaen kapalıymış :slight_smile:`)
 
 
  message.reply(`Bu özellik **başarıyla kapMediaıldı.** ${client.emojis.get("647760202875142154")}`)

 
  db.delete(`kayitAR_${message.guild.id}`)  
  db.delete(`kayitVR_${message.guild.id}`) 
  db.delete(`kayitLog_${message.guild.id}`)  
  db.delete(`kayitKanal_${message.guild.id}`)  
  db.delete(`isimtemizleyiciK_${message.guild.id}`)  
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'kayit-sistemi-kapMedia',
  description: 'taslak', 
  usage: 'Otorol-ayarla'
};
