/**
	*APAAN BRO? SC BY FDHLGRPHY
	*MAU BANTU KEMBANGIN/NGEFIX YG EROR? LANGSUNG COMMIT AJA BANG
	*CONTACT https://wa.me/6285766454089
*/
const { generateMessageID, downloadContentFromMessage, proto, generateWAMessageFromContent, prepareWAMessageMedia, areJidsSameUser, getLastMessageInChat, jidDecode } = require('@adiwajshing/baileys');
const colors = require('colors');
const axios = require('axios');
const util = require('util');
const chalk = require('chalk');
const { times, fetchJson, isUrl, getBuffer, getRandom, sleep, getGroupAdmins, downloadMediaMessage, runtime, jsonformat, formatDate, tanggal, formatp } = require('./utils/smsg');
const { y2mateV, y2mateA } = require('./utils/ytdl');
const fs = require('fs');
const os = require('os');
const { color, mylog, infolog } = require("./lib/color")
const moment = require('moment-timezone');
const ytdl = require('ytdl-core');
const hentai = require('nhentai');
const fdl = require("caliph-api");
const hikki = require("hikki-me");
const ffmpeg = require('fluent-ffmpeg');
const PhoneNumber = require('awesome-phonenumber');
const readline = require('readline');
const { performance } = require('perf_hooks');
const speed = require('performance-now')
const { exec, spawn } = require('child_process');
const toMs = require("ms")
global.prem = require("./lib/premium")
const {isLimit:isLimit,limitAdd:limitAdd,getLimit:getLimit,giveLimit:giveLimit,addBalance:addBalance,kurangBalance:kurangBalance,getBalance:getBalance,isGame:isGame,gameAdd:gameAdd,givegame:givegame,cekGLimit:cekGLimit} = require("./lib/limit")
//let regis = JSON.parse(fs.readFileSync('./database/reg.json'));
//global.limit=JSON.parse(fs.readFileSync("./database/limit.json"))
let print = console.log;
//const cooldown = new Map();
const cooldown = new Map();

const fke = '```'

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}


module.exports = index = async(conn, m, store, warn) =>{
try {
	var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
	//var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.omessage.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
	var budy = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text : ''
	var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
	const jsn = JSON.parse(fs.readFileSync('./src/database.json'));
	const snt = JSON.parse(fs.readFileSync('./database/anoucement.json'));
	const dta = JSON.parse(fs.readFileSync('./database/setting.json'));
	const args = body.trim().split(/ +/).slice(1)
	const arg = body.substring(body.indexOf(" ") + 1);
	const isCmd = body.startsWith(prefix)
	const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
	const from = m.key.remoteJid ? m.key.remoteJid : m.key.participant
	const sender = m.key.participant ? m.key.participant : m.key.remoteJid
	const senderName = m.pushName ? m.pushName : ''
	const pushname = m.pushName || "No Name"
	const text = q = args.join(" ")
	const fatkuns = (m.quoted || m)
	const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
	const mime = (quoted.msg || quoted).mimetype || ''
	const qmsg = (quoted.msg || quoted)
	const isMedia = /image|video|sticker|audio/.test(mime)

	const isGroup = from.endsWith('@g.us')
	const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
	const groupName = isGroup ? groupMetadata.subject : ''
	const groupDesc = isGroup ? groupMetadata.desc : ''
	const groupId = isGroup ? groupMetadata.id : ''
	const number = [`global.owner@s.whatsapp.net`]
	const isOwner = number.includes(sender)
	const botNumber = await conn.decodeJid(conn.user.id)
	const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
	const groupMembers = isGroup ? groupMetadata.participants : ''
	const groupAdmins = isGroup ? await getGroupAdmins(groupMembers) : ''
	//const isReg = regis.includes(sender)
	const isGroupAdmins = isGroup ? await groupAdmins.includes(sender) : false
	const isBotGroupAdmins = isGroup ? await groupAdmins.includes(sender) : false
	const isPremium = isCreator || prem.checkPremiumUser(m.sender, premium);
	
	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const participants = m.isGroup ? await groupMetadata.participants : ''
	//const isSpam = timestamps.set(from, now)
	let who = m.mentions && m.mentions[0] ? m.mentions : m.fromMe ? this.user : m.sender 
	require('./setting');
	
	/*function printSpam(conn, isGc, sender, groupName) {
	if (isGc) {
		return conn.logger.warn("Detect SPAM", color(sender.split("@")[0], "lime"), "in", color(groupName, "lime"));
	}
	if (!isGc) {
		return conn.logger.warn("Detect SPAM", color(sender.split("@")[0], "lime"));
	}
}*/

const downloadContentFromMediaMessage = async(m) => {
let mime = (m.msg || m).mimetype || ''
const stream = await downloadContentFromMessage(m.quoted ? m.quoted : m.msg, mime.split("/")[0])
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

	//FAKE REPLY EX : { quoted: fake }
	const fake = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6285766454089-1589321480@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `*Hallo* _${pushname} 👋_\n	╰≻ ${prefix + command}`,
                 "title": `Hmm`,
                 'jpegThumbnail': global.thumb
                        }
	                  } 
                     }

	const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `*HIDETAG!*`,jpegThumbnail: global.thumb}}}
	const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6283102650464-1589321480@g.us","inviteCode": "m","groupName": "Crizzy Bot", "caption": `© Fadhil Graphy`, 'jpegThumbnail': global.thumb}}}
    const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283102650464-1589321480@g.us" } : {}) },message: { "videoMessage": { "title":`*AUTO DOWNLOAD AUDIO YOUTUBE*`, "h": `Hmm`,'seconds': '10000000⁰0', 'caption': `*AUTO DOWNLOAD AUDIO YOUTUBE*`, 'jpegThumbnail': global.thumb}}}

		//TEMPLATE BUTTON!
		const buttonsDefault = [
			//{ callButton: { displayText: `Call Owner!`, phoneNumber: `+6285849261085` } },
			{ urlButton: { displayText: `github!`, url : `https://github.com/FebriansyahXd` } },
			{ quickReplyButton: { displayText: `🧑 owner`, id: `${prefix}owner` } },
			{ quickReplyButton: { displayText: `💰 donate`, id: `${prefix}donate` } },
			{ quickReplyButton: { displayText: `🗼 ping bot`, id: `${prefix}pingbot` } }
		]

		//PREM EXP
		prem.expiredCheck(conn, m, premium);
		
		//EXP
		if (jsn[0].expired !== false) {
  		if (jsn[0].expired < Date.now()) {
    		jsn[0] = {
      		setting: 'tidak ada iklan',
      		expired: false
    		}
    		fs.writeFileSync('./src/database.json', JSON.stringify(jsn))
  		}
		}

		//ANTI SPAM GA WORK, FIX AJA KALO BISA
/*if (!command) return;
const isSpam = true;
const cooldownAmount = 5;
function printSpam(conn, isGroup, sender, groupName) {
  if (isGroup) {
    return console.log("Detect SPAM", color(sender.split("@")[0], "lime"), "in", color(groupName, "lime"));
  }
  if (!isGroup) {
    return console.log("Detect SPAM", color(sender.split("@")[0], "lime"));
  }
}

if (!cooldown.has(from)) {
  cooldown.set(from, new Map());
}

const now = Date.now();
const timestamps = cooldown.get(from);
const cdAmount = (cooldownAmount || 5) * 1000;
if (timestamps.has(from)) {
  const expiration = timestamps.get(from) + cdAmount;
  if (now < expiration) {
    if (isGroup) {
      let timeLeft = (expiration - now) / 1000;
      printSpam(conn, isGroup, sender, groupName);
      return await conn.sendMessage(
        from,
        {
          text: `This group is on cooldown, please wait another _${timeLeft.toFixed(1)} second(s)_`,
        },
        {
          quoted: m
        }
      );
    } else if (!isGroup) {
      let timeLeft = (expiration - now) / 1000;
      printSpam(conn, isGroup, sender);
      return await conn.sendMessage(
        from,
        {
          text: `You are on cooldown, please wait another _${timeLeft.toFixed(1)} second(s)_`,
        },
        {
          quoted: m
        }
      );
    }
  }
}

setTimeout(() => timestamps.delete(from), cdAmount);

if (isSpam) {
  timestamps.set(from, now);
}*/
		
	/*if (optionsCmd.isPremium && !isPremium) {
			await conn.sendMessage(msg.from, { text: response.OnlyPrem }, { quoted: msg });
			return true;
		}*/
		
   // Push Message To Console && Auto Read
        if (m.message) {
            conn.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.white(chalk.bgGreen(new Date)) + '\n          ' + chalk.white(chalk.bgMagenta(budy || m.mtype)) + '\n' + chalk.green('=> Dari'), chalk.magenta(pushname), chalk.yellow(m.sender) + '\n' + chalk.green('=> Di'), chalk.blueBright(m.isGroup ? pushname : 'Private Chat', from) + '\n' + chalk.magenta('──────────────────────────────────────────────────────'))
        }
//+++++++++++++ START COMMAND +++++++++++++++
switch(command){
			case'menu':
			case'help': {
				footerr = `Peringatan : Dilarang spam command/apapun ke bot!, dikarena mengakibatkan bot eror!\n© 2022 Fadhil Graphy`
				anu = `${fke}Hi ${m.pushName} 👋, i'am crizzy!${fke}

╭──❲ *CRIZZY BOT - MD* ❳
│
│ *Info*
│> *Nama :* _「 ${m.pushName} 」_
│> *Status :* _「 ${isPremium ? "Premium" : "Free"} 」_
│> *Nomer :* _「 ${m.sender.split("@")[0]} 」_
│> *Jam :* _「 ${times(new Date)} 」_
│> *Tanggal :* _「 ${tanggal(new Date)} 」_
│> *Runtime :* _「 ${runtime(process.uptime())} 」_
│
│ *Keterangan*
│ • 🆆 = Fitur Berfungsi
│ • 🅴 = Fitur Eror
│ • 🅼 = Fitur Maintenance 
│
│ *Search Menu:*
│   ╰≻ ${prefix}play [query] 🆆
│   ╰≻ ${prefix}ytsearch [query] 🆆
│   ╰≻ ${prefix}pinterest 🆆
│
│ *Group Menu:*
│   ╰≻ ${prefix}add [number] 🆆
│   ╰≻ ${prefix}kick [tag] 🆆
│   ╰≻ ${prefix}tagall [psn] 🆆
│   ╰≻ ${prefix}promote [tag] 🆆
│   ╰≻ ${prefix}demote [tag] 🆆
│   ╰≻ ${prefix}setname [text] 🆆
│   ╰≻ ${prefix}setppgroup [reply] 🆆
│   ╰≻ ${prefix}setdesk [text] 🆆
│   ╰≻ ${prefix}hidetag [text] 🆆
│   ╰≻ ${prefix}totag [reply] 🆆
│   ╰≻ ${prefix}linkgroup 🆆
│
│ *Convert Menu :*
│   ╰≻ ${prefix}nulis [text] 🆆
│   ╰≻ ${prefix}sticker/s 🆆
│   ╰≻ ${prefix}stickergif 🆆
│   ╰≻ ${prefix}swm [q|q] 🆆
│   ╰≻ ${prefix}toimg [reply] 🆆
│   ╰≻ ${prefix}style [text] 🆆
│   ╰≻ ${prefix}emojimix (😊+😐) 🆆
│   ╰≻ ${prefix}emojimix2 (😐+😊) 🅼
│   ╰≻ ${prefix}smeme [q|q] 🆆
│   ╰≻ ${prefix}ttp [text] 🆆
│   ╰≻ ${prefix}attp [text] 🆆
│   ╰≻ ${prefix}ebinary [text] 🆆
│   ╰≻ ${prefix}dbinary [code] 🆆
│   ╰≻ ${prefix}tomp4 [send/reply] 🆆
│   ╰≻ ${prefix}toaud [send/reply] 🆆
│   ╰≻ ${prefix}tomp3 [send/reply] 🆆
│   ╰≻ ${prefix}tovn [send/reply] 🆆
│   ╰≻ ${prefix}togif [send/reply] 🆆
│   ╰≻ ${prefix}tourl [send/reply] 🆆
│
│ *Fun Menu :*
│   ╰≻ ${prefix}menfes 🆆
│   ╰≻ ${prefix}jadian 🆆
│   ╰≻ ${prefix}jodohku 🆆
│
│ *Downloader Menu :*
│   ╰≻ ${prefix}tiktok [url] 🆆
│   ╰≻ ${prefix}tiktokaudio [url] 🆆
│   ╰≻ ${prefix}ytmp3 [url] 🆆
│   ╰≻ ${prefix}ytmp4 [url] 🆆
│
│ *Premium Menu :*
│   ╰≻ ${prefix}join [link] 🆆
│
│ *Other Menu :*
│   ╰≻ ${prefix}requestfitur [text] 🆆
│   ╰≻ ${prefix}ping 🆆
│   ╰≻ ${prefix}listonline 🆆
│   ╰≻ ${prefix}listgc 🆆
│   ╰≻ ${prefix}listpc 🆆
│
│ *Owner Menu :*
│   ╰≻ ${prefix}setiklan 🆆
│   ╰≻ ${prefix}block [tag] 🆆
│   ╰≻ ${prefix}unblock [tag] 🆆
│   ╰≻ ${prefix}setstatusbot [text] 🆆
│   ╰≻ ${prefix}setmamebot [text] 🆆
│   ╰≻ ${prefix}setppbot [reply] 🆆
│   ╰≻ ${prefix}cekkomisi 🆆
│   ╰≻ ${prefix}leave 🆆
│   ╰≻ ${prefix}anticall 🆆
│   ╰≻ ${prefix}addprem [tag jum] 🆆
│   ╰≻ ${prefix}delprem [tag] 🆆
│   ╰≻ ${prefix}tarikkomisi [jum] 🆆
│   ╰≻ ${prefix}sf [reply code] 🆆
│   ╰≻ ${prefix}addanoucment (new fitur) 🆆
│   ╰≻ > 🆆
│   ╰≻ => 🆆
│   ╰≻ $ 🆆
│
│ *Store*
│   │≻ *Followers/Like/View*
│   │		╰≻ ${prefix}order ( cara order) 🆆
│   │		╰≻ ${prefix}followers [jum|targ] 🆆
│   │		╰≻ ${prefix}view [jum|link] 🆆
│   │		╰≻ ${prefix}like [jum|link] 🆆
│   │		╰≻ ${prefix}cekstatus [id] 🆆
│   │		╰≻ ${prefix}prichlist 🆆
│   │		
│   ╰≻ *Tes*
│
│ *Anoucement 📢 :*
│   ╰≻ Added ${snt[4]}
│   ╰≻ Added ${snt[3]}
│   ╰≻ Added ${snt[2]}
│   ╰≻ Added ${snt[1]}
│   ╰≻ Added ${snt[0]}
│
╰────────────────⊱
`,
					btn = [{
                                urlButton: {
                                    displayText: 'ꜰᴏʟʟᴏᴡ ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: 'https://instagram.com/dddyan.__'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ɢʀᴏᴜᴘ ᴡʜᴀᴛꜱᴀᴘᴘ',
                                    url: 'https://chat.whatsapp.com/ItlI545J4kDIerQTZ5y0bI'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '❗ ᴄʀᴇᴅɪᴛ',
                                    id: 'credit'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤 ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '[ɴᴇᴡ] ᴄᴏɴꜰᴇꜱꜱ',
                                    id: 'menfes'
                                }
                            }]

				conn.send5ButLoc(from, anu, footerr, global.thumb, btn)
				conn.sendMessage(from, {text : `*This is an ad*\n\n•───────────•\n${jsn[0].setting}\n•───────────•\n\n_© 2022 fdhlgrphy.com_`}, {quoted :{
				key: { fromMe: false,
				participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6285766454089-1589321480@g.us" } : {})},
				message: { "extendedTextMessage": {
				"text": `*Hallo* _${pushname} 👋_\n	╰≻ Iklan _(mau pasang iklan? hub owner!)_`,
				"title": `Pasang iklan murah bang`,
				'jpegThumbnail': global.thumb}}}}
				)
 				 }                      
				break
			case 'sc':
			case 'script':
			case 'sourcecode':
			case 'credit':
			case 'info':{
				//MASIH LANGKA OM HEHE
				const _0x337fb1=_0x31eb;function _0x31eb(_0x451bc8,_0x5de346){const _0x115eea=_0x115e();return _0x31eb=function(_0x31ebf4,_0x1f27c6){_0x31ebf4=_0x31ebf4-0x166;let _0x4b4588=_0x115eea[_0x31ebf4];return _0x4b4588;},_0x31eb(_0x451bc8,_0x5de346);}(function(_0x3cea9d,_0x2c4fc4){const _0x5ee033=_0x31eb,_0x1b45d1=_0x3cea9d();while(!![]){try{const _0x442b6b=parseInt(_0x5ee033(0x17a))/0x1*(-parseInt(_0x5ee033(0x17d))/0x2)+parseInt(_0x5ee033(0x178))/0x3+parseInt(_0x5ee033(0x16a))/0x4*(parseInt(_0x5ee033(0x179))/0x5)+parseInt(_0x5ee033(0x170))/0x6*(-parseInt(_0x5ee033(0x166))/0x7)+parseInt(_0x5ee033(0x169))/0x8*(-parseInt(_0x5ee033(0x173))/0x9)+parseInt(_0x5ee033(0x17c))/0xa+-parseInt(_0x5ee033(0x175))/0xb;if(_0x442b6b===_0x2c4fc4)break;else _0x1b45d1['push'](_0x1b45d1['shift']());}catch(_0x227f64){_0x1b45d1['push'](_0x1b45d1['shift']());}}}(_0x115e,0xc4f87));const _0x4714c9=_0x3850;function _0x3850(_0x41782f,_0x1e7787){const _0x28f64a=_0x4dc5();return _0x3850=function(_0x2acaf2,_0x105999){_0x2acaf2=_0x2acaf2-0xe3;let _0x2082b8=_0x28f64a[_0x2acaf2];return _0x2082b8;},_0x3850(_0x41782f,_0x1e7787);}(function(_0x4cfa25,_0x45733f){const _0x2dfc4c=_0x31eb,_0x52a914=_0x3850,_0x1bf574=_0x4cfa25();while(!![]){try{const _0xdac033=-parseInt(_0x52a914(0xea))/0x1*(parseInt(_0x52a914(0xe4))/0x2)+parseInt(_0x52a914(0xee))/0x3+-parseInt(_0x52a914(0xeb))/0x4*(-parseInt(_0x52a914(0xf2))/0x5)+parseInt(_0x52a914(0xe8))/0x6+parseInt(_0x52a914(0xe3))/0x7+parseInt(_0x52a914(0xe6))/0x8*(parseInt(_0x52a914(0xf0))/0x9)+-parseInt(_0x52a914(0xf3))/0xa;if(_0xdac033===_0x45733f)break;else _0x1bf574[_0x2dfc4c(0x17f)](_0x1bf574['shift']());}catch(_0x4873c5){_0x1bf574[_0x2dfc4c(0x17f)](_0x1bf574['shift']());}}}(_0x4dc5,0x50733));function _0x4dc5(){const _0x2ed163=_0x31eb,_0x3763a6=['8432660EGOBKn',_0x2ed163(0x17e),_0x2ed163(0x171),'7900','8afIzaI',_0x2ed163(0x177),_0x2ed163(0x176),_0x2ed163(0x174),_0x2ed163(0x17b),'4hhcskV',_0x2ed163(0x16c),_0x2ed163(0x167),_0x2ed163(0x16b),_0x2ed163(0x16e),_0x2ed163(0x16d),_0x2ed163(0x16f),_0x2ed163(0x168)];return _0x4dc5=function(){return _0x3763a6;},_0x4dc5();}let message={'requestPaymentMessage':{'currencyCodeIso4217':_0x337fb1(0x174),'amount1000':_0x4714c9(0xef),'requestFrom':m[_0x4714c9(0xe7)],'noteMessage':{'extendedTextMessage':{'text':'*SC\x20/\x20CREDITS\x20/\x20INFO*\x0a\x0a*Script\x20:*\x20https://github.com/fdhlgrphy/Crizzy-Bot\x0a*Base\x20:*\x20Base\x20From\x20Hazn\x0a\x0a*Donate\x20:*\x20083102650464\x20(Dana,\x20Shopee\x20Pay,\x20GoPay,\x20OvO)\x0aDont\x20Forget\x20Donate\x0a\x0a*Developer\x20:*\x0a_Fadhil\x20Graphy_\x0a_Affis\x20Junianto_\x0a_Hazn_\x0a\x0a*Thangks\x20To\x20:*\x0a_Ferdi\x20Z_\x0a_FRM\x20Developer_\x0a_DikaArdnt_\x0a_Fatih\x20Arridho_\x0a_Rzky\x20Fdlh_\x0a_Febriansyah\x20XD_\x0a_Arasya_\x0a\x0a*Team\x20:*\x0aPCS\x0aZacros\x0a\x0a','footer':_0x4714c9(0xed),'contextInfo':{'forwardingScore':0x270f,'isForwarded':!![]}}},'expiryTimestamp':_0x4714c9(0xf1),'amount':{'value':_0x4714c9(0xe5),'currencyCode':_0x4714c9(0xe9)}}};function _0x115e(){const _0xd12c53=['117BSIBtY','USD','24235145rSVCvy','2062482aOzyXe','sender','4321767ymSmoA','15LULidQ','785228OpaFWf','2DkFbiy','16042880LLfTBt','2sWgXcs','1611211dPKTjf','push','35HuIiOz','testes','198675eZhlqB','202776zYrHiG','1856444TcpGLg','1103733VKDvGL','relayMessage','2844891VJHjSF','199990','1660787819','374982zsIWos','124876dTSVkM','chat'];_0x115e=function(){return _0xd12c53;};return _0x115e();}conn[_0x4714c9(0xec)](m[_0x337fb1(0x172)],message,{'messageId':generateMessageID()});
           	 }
           	 break
			case 'donasi': 
					case 'sewabot': 
					case 'sewa': 
					case 'buypremium': 
					case 'donate': 
					case 'price': {
					 let pes = `*Hallo kak, mau invite bot/donasi ya*
					
*⚠️ Nomor :*
(Dana, OVO, GoPay, ShopeePay)
	╰≻ 083102650464
(Telkomsel)
	╰≻ 082135724604
(Qris)
	╰≻ Click the button below. 

*💯 Keuntungan :*
> Add ke group max 2 group
> - 

*📝 Note :*
> Trimakasih yaa, ngga rugi kok jika kakak menambahkan bot ini ke dalam group kaka, karena hanya dengan membayar seikhlasnya kak hehe.
> hasil dari bot ini akan digunakan untuk menyewa server dan perkembangan bot ini!
> _Mengapa owner menetapkan biaya seikhlasnya?, Kenapa owner tidak mengambil untung yang banyak?_ *Dikarenakan owner menjalankan bot ini hanya untuk mengisi waktu luang/belajar, dan mempermudah pengguna bot😁.*

*❗ Penting :*
Konfirmasi pembayaran mu dengan menunjjukan bukti transfer kepada owner!
						`
					gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`

				 but = [
                    {buttonId: `qriscrizzy`, buttonText: {displayText: 'Pay With QRIS'}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: 'Confirm to owner'}, type: 2} 
                ]
					conn.sendMessage(from, { caption: pes, image: { url: 'https://telegra.ph/file/91e21669655c0116b70a4.jpg' } , buttons: but, footer: `Thank you for your help and support to this bot, hopefully the sustenance will be smoother. \n For more information, please contact the owner!\n\n© 2022 Fadhil Graphy` })
					} 
				break
			case 'qriscrizzy':{
				let captionQris = `Hay terimakasih sudah membantu, semoga rezekinya semakin lancar. \n\nKonfirmasi pembayaranmu dengan menunjjukan bukti transfer kepada owner yaa😊🙏`
				bta = [
                 	   {buttonId: `owner`, buttonText: {displayText: 'Confirm to owner'}, type: 1} 
             	   ]
						conn.sendMessage(from, { caption: captionQris, image: { url: 'https://telegra.ph/file/48e23a5d0b11096d636c2.jpg' } , buttons: bta, footer: `Thank you for your help and support to this bot, hopefully the sustenance will be smoother. \n\n© 2022 Fadhil Graphy` })
						} 
			 
				break
			case 'addprem':
				if (!isCreator) return m.reply(act.owner)
				{ q, args } {
				if (args.length < 2)
				return m.reply(
				`Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`
				);
				if (m.mentionedJid.length !== 0) {
				for (let i = 0; i < m.mentionedJid.length; i++) {
				prem.addPremiumUser(m.mentionedJid[0], args[1], premium);
						}
				m.reply("Sukses");
					} else {
				prem.addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
				m.reply("Sukses via nomor");
						}
					}
				break
			case 'delprem':
				if (!isCreator) return m.reply(act.owner)
				{ q, args, arg } {
				if (args.length < 1) return reply(`Penggunaan :\n*#delprem* @tag\n*#delprem* nomor`);
				if (m.mentionedJid.length !== 0) {
					for (let i = 0; i < m.mentionedJid.length; i++) {
						premium.splice(prem.getPremiumPosition(m.mentionedJid[i], premium), 1);
						fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
					}
					m.reply("Sukses");
				} else {
				premium.splice(prem.getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
				fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
				m.reply("sukses via nomor");
				}
				}
				break
			case 'tes':{
				//if (!isPremium) return m.reply('premium only')
				m.reply('affah iyh')
				}
				break
			case 'join': {
                if (!isPremium) return m.reply('premium only')
                if (!text) return m.reply('Masukkan Link Group!')
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
                m.reply('wait bg...')
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await conn.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        	    }
           	 break
			case 'leave': {
                if (!isCreator) return m.reply(act.owner)
                await conn.groupLeave(from).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                console.log()
            	}
             break
			case 'setsponsor':
			case 'setiklan':
				if (!isCreator) return m.reply(act.owner)
				if (args.length < 1) return m.reply('text nya mana')
				let intex = q.split('|')[0] ? q.split('|')[0]: q
				let expr = q.split('|')[1] ? q.split('|')[1]: ''
				exo = Date.now() + toMs(expr)
				newvalue = {
  				setting: intex,
  				expired: exo
				}
				oldvalue = jsn[0].setting
				let position = false
				Object.keys(jsn).forEach((i) => {
  				if (jsn[i].setting === oldvalue) {
    				position = i
  				}
				})
				if (position !== false) {
  				jsn[position] = newvalue
  				fs.writeFileSync('./src/database.json', JSON.stringify(jsn))
				}
				m.reply(`Iklan sukses diganti menjadi : *${jsn[0].setting}*`)
				break
			case 'order':
			case 'caraorder': {
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				let capp = `*Hallo _${m.pushName}_ Berikut Cara Order*\n\n*Followers :*\nex1 : _${prefix}followers jumlah|target [ tanpa (@) ]_\nex2 : _${prefix}followers 500|fdhlgrphy_\n\n*View :*\nex 1 : _${prefix}view jumlah|link_\nex 2 : _${prefix}view 10000|https://vm.tiktok.com/xxxxxxx_\n\n*Like :*\nex 1 : _${prefix}like jumlah|link_\nex 2 : _${prefix}like 10000|https://www.instagram.com/p/xxxxxxx_\n\nSekian penjelasan cara order\nSemoga anda faham dengan penjelasan ini🙏\nbeli = faham`
				conn.sendMessage(from, {text: capp}, {quoted:m})
				}
				break
			case 'followers': case 'follower': {
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (args.length < 1) return m.reply(`Link atau Usernamenya mana?`)
				let juma = q.split('|')[0] ? q.split('|')[0]: q
				let targtt = q.split('|')[1] ? q.split('|')[1]: ''
				if (targtt.length < 1) return m.reply(`Jumlah dan Target harus di isi!`)

				fetaa = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=${global.ApiKey}&action=pricelist&type=follower`)
				list = []
					textplus = `${juma}|${targtt}`
					for (let L of fetaa.data) {
					list.push({
    					title: `*${L.nama}*`,
    					rowId: `confirmorderkunci ${textplus}|${L.id_layanan}`,
    					description: `\n${L.desc}`
  					})
				}
				let nyobb = [{
  				title: "Sosmed Store",
  				rows: list
				},
				]
				conn.sendListMsg(from, `Pilih layanan sesuai dengan yang ingin anda beli!\njika anda membeli followers maka pilih followers\ndiharapkan anda sudah faham.`, `© 2022\nFadhil Graphy (owner bot)\nAffis Junianto (owner smm)`, `Hallo, Berikut layanan kami`, `Click Here`, nyobb, m)
				}
				break
			case 'view': {
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (args.length < 1) return m.reply(`Link atau Usernamenya mana?`)
				let jumlahh = q.split('|')[0] ? q.split('|')[0]: q
				let targett = q.split('|')[1] ? q.split('|')[1]: ''
				if (targett.length < 1) return m.reply(`Jumlah dan Target harus di isi!`)

				fetaa = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=${global.ApiKey}&action=pricelist&type=view`)
				list = []
					textplus = `${jumlahh}|${targett}`
					for (let L of fetaa.data) {
					list.push({
    					title: `*${L.nama}*`,
    					rowId: `confirmorderkunci ${textplus}|${L.id_layanan}`,
    					description: `\n${L.desc}`
  					})
				}
				let nyobb = [{
  				title: "Sosmed Store",
  				rows: list
				},
				]
				conn.sendListMsg(from, `Pilih layanan sesuai dengan yang ingin anda beli!\njika anda membeli followers maka pilih followers\ndiharapkan anda sudah faham.`, `© 2022\nFadhil Graphy (owner bot)\nAffis Junianto (owner smm)`, `Hallo, Berikut layanan kami`, `Click Here`, nyobb, m)
				}
				break
			case 'like':{
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (args.length < 1) return m.reply(`Link atau Usernamenya mana?`)
				let jumlahhh = q.split('|')[0] ? q.split('|')[0]: q
				let targettt = q.split('|')[1] ? q.split('|')[1]: ''
				if (targettt.length < 1) return m.reply(`Jumlah dan Target harus di isi!`)

				fetaa = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=${global.ApiKey}&action=pricelist&type=like`)
				list = []
					textplus = `${jumlahhh}|${targettt}`
					for (let L of fetaa.data) {
					list.push({
    					title: `*${L.nama}*`,
    					rowId: `confirmorderkunci ${textplus}|${L.id_layanan}`,
    					description: `\n${L.desc}`
  					})
				}
				let nyobb = [{
  				title: "Sosmed Store",
  				rows: list
				},
				]
				conn.sendListMsg(from, `Pilih layanan sesuai dengan yang ingin anda beli!\njika anda membeli followers maka pilih followers\ndiharapkan anda sudah faham.`, `© 2022\nFadhil Graphy (owner bot)\nAffis Junianto (owner smm)`, `Hallo, Berikut layanan kami`, `Click Here`, nyobb, m)
				}
				break
			case 'confirmorderkunci': { //KUNCI = BIAR GA DIAKSES HEHE
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (args.length < 1) return m.reply(`*Cara order followers*\n\n*Example :* _${prefix + command} jumlah|username tanpa (@)_\n*Example :* _${prefix + command} 500|fdhlgrphy_\n\n*Min pesan :* _300_ \n*Max pesan :* _500k_\n\nThank You`)
				let jumlah = q.split('|')[0] ? q.split('|')[0]: q
				let targ = q.split('|')[1] ? q.split('|')[1]: ''
				let idny = q.split('|')[2] ? q.split('|')[2]: ''

				feta = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=${global.ApiKey}&action=order&quantity=${jumlah}&target=${targ}&id_layanan=${idny}`)
				if (feta.status == false) {
  				m.reply(`*Maaf orderan gagal di buat*\n\nPermasalahan :\n${feta.data.msg} atau Cara order anda salah\n\nDiharapkan sudah faham jika ingin membeli\njika masih tidak faham silahkan ketik ${prefix}owner!\n`)
				} else {
  				let idpes = feta.data.order_id
  				let cap = `Hay *${m.pushName} 👋,* Terimakasih Telah Order di Sosmed Shop!\nScan QR diatas untuk membayar! MENGGUNAKAN QRIS.\n\n*Id Pesanan Anda :* ${feta.data.order_id}\n*Target :* ${targ}\n*Jumlah Pesanan :* ${jumlah}\n*Total Harga Pesanan :* Rp ${feta.data.amount}\n*Status Orderan :* ${feta.data.status}\n\n_Info lebih lanjut klik button dibawah._`
  				buto = [{
    				buttonId: `cekstatus ${feta.data.order_id}`,
    				buttonText: {
      				displayText: 'Check Status'
    				},
    				type: 1
  				}]
  				conn.sendMessage(from, {
    				caption: cap, image: {
      				url: feta.data.qris
    				}, buttons: buto, footer: `© 2022\nFadhil Graphy\nAffis Junianto`
  				})
				}
				console.log(feta)
				}
				break
			case 'listharga':
			case 'prichlist':
			case 'pricelist': {
				feta
