const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233257767765";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,94723280202";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_43_03_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY3LFxuICAgICAgICA5MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQxLFxuICAgICAgICA0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjksXG4gICAgICAgIDc5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDQyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDUyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NixcbiAgICAgICAgMjI0LFxuICAgICAgICAzOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDM1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk5LFxuICAgICAgICAwLFxuICAgICAgICA4MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDI5LFxuICAgICAgICA3NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDQwLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgODUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNixcbiAgICAgICAgMjA3LFxuICAgICAgICAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDc5LFxuICAgICAgICA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTczLFxuICAgICAgICA2MixcbiAgICAgICAgMTUsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNixcbiAgICAgICAgMTM3LFxuICAgICAgICA1MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIitDNEZjTkhpMWhMRUpMQmQrNi9jcmFxV3hxc0p0WlF2Zk5xRkVNVkE5Y1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MjMyODAyMDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkREOUJCRTdGQjRGN0QzMEU5MUVDNTA1MThCRTIzMUNFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MTg0NDYyOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzIzMjgwMjAyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2M0NDMDA0RjkzODNFRjk5M0JDNEYwQzRFNUIxRTM1NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDE4NDQ2MjlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiR1d0bXJ5eWlSdDIxQUJLNWhBS1dwUVwiLFxuICBcInBob25lSWRcIjogXCI1ZDZlMjkwNi1mNzAxLTQxNzMtOTY1NC1mYzljYjJhZjA5ZjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjEsXG4gICAgICAxODUsXG4gICAgICAxODYsXG4gICAgICAxODcsXG4gICAgICAxOTEsXG4gICAgICAzNCxcbiAgICAgIDE1MyxcbiAgICAgIDQwLFxuICAgICAgMTMyLFxuICAgICAgMTg2LFxuICAgICAgMTU3LFxuICAgICAgODYsXG4gICAgICA0MCxcbiAgICAgIDExNixcbiAgICAgIDE5NCxcbiAgICAgIDEzLFxuICAgICAgMjAwLFxuICAgICAgNDksXG4gICAgICAxNjAsXG4gICAgICAyMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE1LFxuICAgICAgMTI2LFxuICAgICAgMTI5LFxuICAgICAgMjE3LFxuICAgICAgNzIsXG4gICAgICAxNjUsXG4gICAgICAyMTksXG4gICAgICAxNTYsXG4gICAgICAyMTksXG4gICAgICAxMTQsXG4gICAgICAxLFxuICAgICAgMjI5LFxuICAgICAgMjQ0LFxuICAgICAgMjUyLFxuICAgICAgNzgsXG4gICAgICAxMjksXG4gICAgICAxOTAsXG4gICAgICAxMTcsXG4gICAgICAyMjIsXG4gICAgICAyNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQVBaTVlFRFFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzIzMjgwMjAyOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzY0MjU4OTQ4OTk5NjI6MTJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiU2F2aVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09IcnRhUURFSTdoeWI0R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYkRJbGtqRkx0KzloczRLaU1SRmxQRk52M25jNm4wR3hJYUV1Vnlpd1gzdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyWlBYNGREY29MTWxoalFPUUtYRkd6dEhXdVVHQWE0Q0k5VkZNSHlxN0gwZU1iQkxQVHU5SElwMlk0K1pwaTZhOTFSUGNzWTJaQkZseGc3S2VQcFZBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhZTk0V1h5NXU4YU14Q3h4RDJoRTFGVlZUY3kxalR1TUZrdCtwaFYzalpmNERQWDNZazBIWFRwYnFnVnhuVXd5bHd6K1RSOUdKT1hiTUFJUUpQeTZEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcyMzI4MDIwMjoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQxODQ0NjI2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRnp3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGencuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVaG5DL004VW9BTEMxUzNBUkMyWmhFNmlqa2E3UFlod0FsTHUrSStLVkQ0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg4MTY4NTk4NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQxODQ0NjI5MTExXCJ9Igp9="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
