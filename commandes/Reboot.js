const {zokou}=require("../framework/zokou")







zokou({nomCom:"restart",categorie:"Mods",reaction:"📴"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗼𝗻𝗹𝘆 𝗳𝗼𝗿 🄱🄴🅁🄰");
  }

  const {exec}=require("child_process")

    repondre("🅃🅁🄴🅇-🄼🄳 𝗶𝘀 𝗿𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴⏳");

  exec("pm2 restart all");
  

  



})
