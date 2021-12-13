const db = require("../models/db");
module.exports = (client) => {
  client.on("guildMemberAdd", (member) => {
    db.findOne({ discord_username: member.user.username }).then((doc) => {
      return member.roles.add(member.guild.roles.cache.get('919279049946308628')); //Issuing a role
    });
  });
};
