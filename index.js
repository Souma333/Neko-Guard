const Discord = require("discord.js");
const client  = new Discord.Client();
const BOT_VERSION = "1.0.0";
// function which log in the bot
client.login("NjkwMzMyNDQ3MzAwNTE4MTQ4.XnQFiQ.sM_pLG5xSc9-0YSH90GGdtZRNe4");

//prefix for all commands.
const commandPrefix = "!";
// This is a function which will be called when the bot is ready.
client.on("ready", () => {
    console.log("Bot started! Version " + BOT_VERSION);
});

//welcome pesan
client.on("guildMemberAdd", async (member) => {
    try {
        const channel = member.guild.channels.find(channel => channel.name === "welcome")
        if(!channel) return;
        channel.send("Selamat Datang Di Server Kami ${member}, Silahkan Baca Rules Server")
    } catch (error) {
        console.error(error)
    }   
})


//pesan
client.on("message", async (message) => {
    try {
        //chat filter
    let filter = message.content.toLowerCase().split(" ")
    const channell = message.guild.channels.find(channel => channel.name === "🔞nsfw-koya")
    filter.forEach(e => { //menjalankan sejumlah kata yang masuk //filter chat  bermasalah
        switch (e) {
            case "ajg":
                message.channel.send("Hei "+message.author+" !, Kamu Mengucapkan Kata-Kata Kasar Yang Bukan 'Celetehan' ")
                message.channel.send("Kalo Mau Bebas Silahkan Ke "+channell)
                break;
            case "tai":
                message.channel.send("Hei "+message.author+" !, Kamu Mengucapkan Kata-Kata Kasar Yang Bukan 'Celetehan' ")
                message.channel.send("Kalo Mau Bebas Silahkan Ke "+channell)
                break;
            case "babi":
                message.channel.send("Hei "+message.author+" !, Kamu Mengucapkan Kata-Kata Kasar Yang Bukan 'Celetehan' ")
                message.channel.send("Kalo Mau Bebas Silahkan Ke "+channell)
                break;
            case "anjeng":
                message.channel.send("Hei "+message.author+" !, Kamu Mengucapkan Kata-Kata Kasar Yang Bukan 'Celetehan' ")
                message.channel.send("Kalo Mau Bebas Silahkan Ke "+channell)
                break;
            case "anjing":
                message.channel.send("Hei "+message.author+" !, Kamu Mengucapkan Kata-Kata Kasar Yang Bukan 'Celetehan' ")
                message.channel.send("Kalo Mau Bebas Silahkan Ke "+channell)
                break;
            case "jancok":
                message.channel.send("Hei "+message.author+" !, Kamu Mengucapkan Kata-Kata Kasar Yang Bukan 'Celetehan' ")
                message.channel.send("Kalo Mau Bebas Silahkan Ke "+channell)
                break;
            case "kontol":
                message.channel.send("Hei "+message.author+" !, Kamu Mengucapkan Kata-Kata Kasar Yang Bukan 'Celetehan' ")
                message.channel.send("Kalo Mau Bebas Silahkan Ke "+channell)
                break;
            case "memek":
                message.channel.send("Hei "+message.author+" !, Kamu Mengucapkan Kata-Kata Kasar Yang Bukan 'Celetehan' ")
                message.channel.send("Kalo Mau Bebas Silahkan Ke "+channell)
                break;
            default:
                
            break;
        }
    })
    

//commands or interact with bot
    let command = message.content.toLowerCase().split(" ")[0];
    command = command.slice(commandPrefix.length);

    if(command === "hello"){
        message.channel.send("Hello " + message.author + "! Jangan Lupa Senyum Hari Ini :kissing_heart: :smiley: ");
    }
    if(command === "help"){
        let embed = new Discord.RichEmbed() //buat set embed discord card message
            .addField("_hello", "=> Biar Nggk Merasa Bosen :kissing_heart: ")
            .addField("_help", "=> Biar Nggk Kesasar :kissing_heart:")
            .setTitle("Commands:")
            .setFooter("uWu")
            .setColor("ORANGE");
            message.channel.send("Hello " + message.author + " Elu Manggil Gw Buat Liat Semua Options Yang Tersedia,,,Nih Comot Aja Free Kok");
        // Send the embed with message.channel.send()
        message.channel.send({embed: embed});
    }

    } catch (error) {
        console.error(error)
    }
});





