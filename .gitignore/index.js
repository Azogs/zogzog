const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready" , function() {
    bot.user.setGame("ZogZog, !help");
    console.log("Le bot a bien ete connecte");
});

bot.login("NTM5NDgwOTUyMzUxNzUyMTkz.DzC_4Q.peyKHh5_ajY5InwdbH4XuxZfPOQ");
