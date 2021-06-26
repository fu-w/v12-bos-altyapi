const Discord = require('discord.js')

exports.run = (client, message, params) => {
  
  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle("Ping Değerleri")
  .addField(":signal_strength: API Gecikmesi:", `**${client.ws.ping}** ms`)
message.channel.send(embed)
}
exports.conf = {//sanctus
  enable: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "ping",
  description: "botun pingini gösterir.",
  usage: "ping"
}//sanctus
//https://discord.gg/cGXxZhBmmr
