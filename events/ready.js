module.exports = (client, interaction) => {
    console.log(`${client.user.tag} ismi ile giriş yapıldı`);
    client.user.setPresence({activities: [{name:"Maxi Code Ticket Botu Altyapısı"}], status:"dnd"});   
};