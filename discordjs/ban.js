module.exports = (msg) => {
  const { member, mentions } = msg;
  if (msg.author.id == "676624147589365801") {
    const target = mentions.users.first();
    console.log("Banning ", target);
    const targetMember = msg.guild.members.cache.get(target.id);
    targetMember.ban();
    msg.channel.send("User banned!");
  }
};
