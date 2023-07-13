const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
const embed = new Discord.RichEmbed()  
.setAuthor("PONET-Media", client.user.avMediaarURL)
.setColor('BLUE')
.addField("__OTOROL Ayarlamak__", '__**-oto-rol-ayarla**__ 》 **Otorolü Ayarlar.**\n Örnek: `-oto-rol-ayarla @rolünüz #logkanalı` \n \n __**-otorol-msg **__》 **Otorol Mesajını Ayarlar. __Premium İçindir__**\n Örnek: `!otorol-msg -server-, Sunucumuza Hoşgeldin, -uye-! -rol- Adlı Rolün Başarı İle Verildi Seninle Beraber, **-uyesayisi-** Kişiyiz`')

  .addField('__**Kullanabileceğiniz Değişkenler**__',`
-uye- 》 Üyeyi Etiketler.
-rol- 》 Rolün İsmini Ekler.
-server- 》 Server İsmini Yazar.
-uyesayisi- 》 Üye Sayısını Mediaar.
-botsayisi- 》 Bot Sayısını Mediaar.
-kanalsayisi- 》 Kanal Sayısını Mediaar.
-bolge- 》 Sunucu Bölgesinin İsmini Mediaar.
-kalanuye- 》 Hedefe Kaç Kişi Kalmış Gösterir.
-hedefuye- 》 Hedef Rakamı Gösterir.
`)
     .setFooter('© PONET-ZEHİR',client.user.avMediaarURL)
.setTimestamp()
 message.channel.send(embed) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'otorol',
  description: 'sayaç', 
  usage: 'sayaç'
};
