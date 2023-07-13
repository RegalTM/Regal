const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message,args) => {
  
const embed = new Discord.RichEmbed()
     .setAuthor("MC-EŞEK",client.user.avMediaarURL)
     .setTitle('MC-EŞEK BOT')
     .setURL('https://discord.gg/bWjWHK')
     .setColor('BLUE')
     .setDescription("Sunucu koruma sistemlerinin bulunduğu bölüm;")    
     .addField('!koruma-log #logkanal', ' ```Koruma kayıtlarının gönderileceği kanalı belirler.```')
     .addField('!koruma-banlimit <sayı>', '```Sunucuda birisi 10 dakika içerisinde belirlenen sayının üzerinde ban Mediaarsa o üyeyi sunucundan Mediaar. (kickler) Yönetici yetkisini ve botlarıda görür. (TAM KORUMA İÇİN İDEALDİR) ```')
     .addField('!koruma-kanallimit <sayı>','```30 dakika içerisinde bir üye tarafından belirtilen sayıdan fazla kanal silerse üye sunucudan Mediaılır.```')
     .addField('!koruma-rollimit <sayı>','```30 dakika içerisinde bir üye tarafından belirtilen sayıdan fazla rol silinirse silen üye sunucudan Mediaılır.```') 
     .addField('!koruma-banlimit-sistemi-kapMedia','Ban koruma özelliğini açar kapMediaır.')
     .addField('!koruma-kanal-sistemi-kapMedia','Kanal koruma özelliğini açar kapMediaır.')
     .addField('!koruma-rollimit-sistemi-kapMedia','Rol koruma özelliğini açar kapMediaır.') 
     .addField('!koruma-sistemi-sil','Sunucunuzun verilerini veritabanından siler. (ayarları baştan yapmanız gerekir)')
     .addField('!spambotkorumasi','Spambot korumasını gösterir.')
     .addField('!güvenlikseviyesi','Sunucuya kMediaılan üyelerin güvenilir olup olmadığını gösterir.')
     .setFooter('© PONET-ZEHİR',client.user.avMediaarURL)
     .setTimestamp()
     message.channel.send(embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['güvenlikk','koruma'],
  permLevel: 0
};

module.exports.help = {
  name: 'güvenlik',
  description: '',
  usage: ''
};