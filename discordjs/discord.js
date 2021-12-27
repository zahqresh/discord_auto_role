const dotenv = require("dotenv");
dotenv.config();
const { Client, Intents, MessageEmbed } = require("discord.js");
const welcome = require("./welcome");
const ban = require("./ban");
const client = new Client();

client.once("ready", () => {
  console.log("Ready!");
});

//upon user joining
welcome(client);

//upon msgs
client.on("message", (msg) => {
  //ban event by mentioning

  if (msg.content.includes("!ban")) {
    //ban user
    ban(msg);
  }
  if (msg.content.includes("addrole")) {
    return msg.member.roles.add(
      msg.member.guild.roles.cache.get("408636649791029249")
    ); //Issuing a role
  }
});

client.login("OTIxMzYyOTU0ODc4ODY1NDE5.Ybx0Hg.ijtWQCiRdHUdmsztmwnLKxNUO7k");
