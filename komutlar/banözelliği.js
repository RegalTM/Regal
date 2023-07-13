const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
const embed = new Discord.RichEmbed()  
.setAuthor("PONET - Media", client.user.avMediaarURL)
.setColor('BLUE')
.setTimestamp()
.setDescription("Merhaba Öncelikle Sunucunuzdaki Herkesi Banlama Riski Olan Üyelerin Önüne Geçmek İçin Bunu Kullanın")
.addField("• !banlimit 3 》", "Ban Mediaan Kişi 10 Dakika İçinde Ayarlanılan Rakamı Geçerse Üyenin Ban Mediaabilme Yetkisi Alınır.")
.addField("• !yasaklama-yetkilisi @Rol 》", "Bu Rolü Ayarlayın Ve Ban Mediamasını İstediğiniz Kişilere Verin Bu Role Kim Sahipse Bot İle Ban Mediaabilir (BU ROLE BAN YETKİSİ VERMİCEKSİNİZ BAN MediaMASINI İSTEDİĞİNİZ KİŞİYE VERİLECEK)")
.addField("• !yasaklama-kanal-ayarla #kanal 》", "Bu Ayarladığınız Kanala Ban Mediaılınca Kim Kime Ban Mediamış İd si Profil Fotosu Ne Hepsini Oraya Kayıt Eder")
.addField("• !banci-sistemi-kapMedia 》", "Yaptığınız Tüm Ban Sistemini Siler (Tekrardan Yapmanız Gerekir.)")
.addField("• !ban @uye 》", "Etiketlenen Kişiyi Yasaklar")
.addField("• !kick @uye 》", "Etiketlenen Kişiyi Sunucudan Mediaar")
.addField("• !unban Userid 》", "İd Ye Sahip Kişinin Yasağını Kaldırır")
.setFooter("© Mcadventuretime.com", client.user.avMediaarURL)
 message.channel.send(embed) 
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['ban-özelliği'], 
  permLevel: 0
};

exports.help = {
  name: 'banözelliği',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};