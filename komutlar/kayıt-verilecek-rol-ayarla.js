const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRMediaOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
 
 if(!rol) return message.channel.send(`${client.emojis.get("647760202875142154")} Selam Kayıt Tamamlandığı Zaman Verilecek Rolü Ayarlamak İçin Bir Rol Etiketlemelisiniz Örnek: \`!kayit-verilecek-rol-ayarla @üyeler\``)
 
  message.channel.send(`${client.emojis.get("647746144155467786")} Kayıt Olan Kullanıcılara Verilecek OtomMediaik Rol **${rol}** Şeklinde Ayarlandı.`)

 
  db.set(`kayitVR_${message.guild.id}`, rol.id)  
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'kayit-verilecek-rol-ayarla',
  description: 'taslak', 
  usage: 'Otorol-ayarla'
};
