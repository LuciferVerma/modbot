const db = require("quick.db")
const discord = require("discord.js")

module.exports = {
  name: "status",
  description: "Change the bot status",
  usage: "status <here>",
  category: "owner",
  run: async (client, message, args) => {
    
    //OWNER ONLY COMMAND
    if(!message.author.id === "YOUR ID") {
      return message.channel.send("This command can only be used by the owner")
    }
    //ARGUMENT
    if(!args.length) {
      return message.channel.send("Please provide a status message")
    }
    
 db.set(`status`, args.join(" "))
   await message.channel.send("Updated the bots status")
    process.exit(1);
    
  }
}
