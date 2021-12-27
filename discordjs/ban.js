module.exports = (msg) => {
  const { member, mentions } = msg;
  if (msg.author.id == "387800506958872577") {
    const target = mentions.users.first();
    console.log("Banning ", target);
    const targetMember = msg.guild.members.cache.get(target.id);
    targetMember.ban();
    msg.channel.send("User banned!");
  }
};
