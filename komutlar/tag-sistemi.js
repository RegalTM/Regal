const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
message.channel.send(`**Adım 1**
Merhaba Tag Sistemi Kullanımı İçin Birkaç Tüyo Vereceğim
Sunucunuza Girenlere Oto Tag Vermek İçin \`!ototag 🔱| -uye-\`
KapMediamak İçin \`!ototagkapMedia\`
**Adım 2**
Bu Komut İşe Yarar Ama Beni TMediamin Etmedi :))
Şimdi Eğer Sohbetinizde Şöyle Saçma İsimler Görmekten Bıktıysanız Örn.\`︻芫═──[▬▬▬▬ Mahmut ▬▬▬▬▬]︻芫═──\`
OTO isim Temizleyiciyide Açın \`!isimtemizleyiciaç\`
 Sadece [A-Z 0-9] Arası Kelimeler Kullanılabilir Diğer Herşeyi Siler Yani O Mahmut Yazısının Çıktısı Sadece \`Mahmut\` Olacaktır.
KapMediamak İçin \`!isimtemizleyicikapMedia\``) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["tag-sistemi"], 
  permLevel: 0
};

exports.help = {
  name: 'tag-sistemi',
  description: 'sayaç', 
  usage: 'sayaç'
};
