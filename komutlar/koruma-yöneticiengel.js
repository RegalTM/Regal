const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args, yasin) => { 
  
  
  
    let melekk = new Discord.RichEmbed()
  .setColor('RED')
  .setTitle(':iptal: | Yetki HMediaası!')
  .setDescription(message.member.user.username + ' Bu komutu sadece Sunucu yetkilileri kullanabilir.')
  
   if (!message.member.hasPermission("ADMINISTRMediaOR")) return message.channel.send(melekk)
  
  
  
  let codeming = args[0]
  
  if(!codeming) return message.channel.send('Bir değer belirtmelisin `aç` **/** `kapa`')
  let veri = await db.fetch(`ceyöneticiengel_${message.guild.id}`)
  if(args[0] === "aç") {
   if(veri) return message.channel.send(':x:  Sistem zMediaen açık gibi görünüyor.') 
  db.set(`ceyöneticiengel_${message.guild.id}`, 'yes')  
    
  message.channel.send('Sistem başarıyla açıldı.')  
   return 
  }  
    if(args[0] === "kapa") {
   if(!veri) return message.channel.send(':x:  Sistem zMediaen kapalı gibi görünüyor.') 
  db.delete(`ceyöneticiengel_${message.guild.id}`)  
    
      message.channel.send('Sistem başarıyla kapMediaıldı')
    return
    
  }  
message.channel.send('Sanırım doğru bir değer girmedin. `aç` **/** `kapa`')
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};
exports.help = {
  name: 'koruma-yönetici',
  description: 'taslak', 
  usage: 'koruma-yönetici'
};
