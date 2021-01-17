//start

const Discord = require("discord.js");
const client = new Discord.Client();

const fs = require("fs");
const ytdl = require("ytdl-core");
// const youtube = require("youtube-api");

const prefix = "~";
let commandON = prefix + "on";
let configJSON = fs.readFileSync("config.json");
let config = JSON.parse(configJSON);

//-------------Status----------//
client.on("ready", () => {
  console.log("---Online---");
  client.user.setActivity("*~help*");
});
//-----------test----------//
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  if (command === "test") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply("return test : Latency = " + timeTaken + "ms");
  }
});
//-----------join---------//
client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content === prefix + "join") {
    if (!message.member.voice.channel) {
      message.reply("your not in a voice channel");
      return;
    }
    message.member.voice.channel
      .join()
      .then(connection => console.log("-Connected-"))
      .catch(console.error);
  }
});

//----------------------------//



//------ Command enter ------//

client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(" ");
  const command = args.shift().toLowerCase();
  let option = message.content;

  
  //disconnect
  if (command == "disconnect") {
    if (message.guild.connection) message.guild.voiceConnection.disconnect();
  }

  if (command == "on"){
    if (!message.member.voice.channel) {
      message.reply("this command requires you to be in a voice channel");
    }}
     //help commnd  
     if(message.content === (prefix + "help")) {
       message.channel.send("Do ~join for the bot to join a vc, do ~disconnect for a bot to leave vc, do ~on to turn on the bot: credit:Just Kris.#5302 and 𝚇̶𝚖̶𝚊̶𝚜̶-𝓜𝓲𝓴𝓾#5633")  
      
      return;
   
    }
    
    
    
    //on command
    const streamOptions = { seek: 0, volume: 1 };
    message.member.voice.channel.join().then(connection => {
      if(message.content === (prefix + "on")) {
        connection.play(ytdl('https://www.youtube.com/watch?v=-5KAN9_CzSA'), streamOptions);
        message.channel.send("Starting Lofi");
     
        
        if (message.content === (prefix + "2")) {
        connection.play(ytdl('https://www.youtube.com/watch?v=5qap5aO4i9A'), streamOptions);
        message.channel.send("Starting Lofi");
        }
        
     if (message.content === (prefix + "3")) {
        connection.play(ytdl('https://www.youtube.com/watch?v=DWcJFNfaw9c'), streamOptions);
         message.channel.send("Starting Lofi");   
     }
      
      } 
// else {
    //   message.channel.send("~1 Coffe shop beats ☕- ~2 Study Beats 📚  - ~3 sleep/chill beats 🛌");
      //   console.log("-Connected-")
             
// }      
       
      });
    
    
     
    
}
);

client.login(config.token);

//credits Discord: Just Kris.#5302 and 𝚇̶𝚖̶𝚊̶𝚜̶-𝓜𝓲𝓴𝓾#5633