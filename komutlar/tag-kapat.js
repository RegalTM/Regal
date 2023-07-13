const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRMediaOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
 const tag = db.fetch(`ototag_${message.guild.id}`)  
 if(!tag) return message.reply(`Sanırım bu özellik zMediaen kapalıymış :slight_smile:`)
 
 
  message.reply(`Bu özellik **başarıyla kapMediaıldı.** ${client.emojis.get("647760202875142154")}`)

 
  db.delete(`ototag_${message.guild.id}`)  
  db.delete(`isimtemizleyici_${message.guild.id}`) 
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["ototag-kapMedia", "ototagkapMedia"], 
  permLevel: 0
};

exports.help = {
  name: 'oto-tag-kapMedia',
  description: 'taslak', 
  usage: 'Ototag-ayarla'
};
