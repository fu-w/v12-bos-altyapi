const Discord = require("discord.js");


exports.run = (client, message, params) => {
  
  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  
  .setTitle("SANCTUS YARDIM MENÜSÜ")
  .addField(".**komut**", `kendiniz yazınız`)
  .addField(".**komut**", `kendiniz yazınız`)
  .addField(".**komut**", `kendiniz yazınız`)
  .addField(".**komut**", `kendiniz yazınız`)
  .addField(".**komut**", `kendiniz yazınız`)
  .addField(".**komut**", `kendiniz yazınız`)
  .addField(".**komut**", `kendiniz yazınız`)
  .addField(".**komut**", `kendiniz yazınız`)
  
message.channel.send(embed)
}



exports.conf = {//sanctus
  enable: true,
  guildOnly: false,
  aliases: ["y"],
  permLevel: 0
}
exports.help = {
  name: "yardım",
  description: "botun yardım menüsünü gösterir.",
  usage: "yardım"
}//sanctus
