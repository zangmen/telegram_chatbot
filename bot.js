/*主要函式庫*/
var telegram_bot = require('node-telegram-bot-api');
var websiteget = require('./modules/websiteget.js');
var clock= require('./modules/clock.js')

/*Telegram Bot Set*/
const ConfigParser = require('configparser');
const config = new ConfigParser();
config.read('./config/api_token.cfg');
config.sections();
var token_api = config.get('TELEGRAM','ACCESS_TOKEN');
var bot = new telegram_bot(token_api,{polling: true});

/*把客戶端收到的訊息輸出到伺服端的終端下*/
bot.on('message', (message) => {
  const { text } = message;
  console.log(`伺服端己收到:  ${text}`);
});

/*Telegram Bot Reply Message*/
bot.onText(/\/start/,function (msg) {
  var chat = msg.chat.id; //user id
  var username = msg.from.username;
  var resp = username + '主人你好'; // 要回的句子
  bot.sendMessage(chat,resp); //回給使用者的函式
  
  /*如果尚未設定使用者名稱*/
  if (!msg.from.username) {
    bot.sendMessage(msg.chat.id, "主人你還沒設定使用者名稱(ID),請馬上設置不然我不知道如何叫您!");
  }
});

bot.onText(/\/ping/,function (msg) {
  var chat = msg.chat.id; //user id
	const chatType = msg.chat.type;
  var resp = 'pong'; // 要回的句子
	if (chatType === 'group' || chatType === 'supergroup' || chatType === 'channel' || chatType === 'private')
       bot.sendMessage(chat,resp); //回給使用者的函式
});

bot.onText(/\/today/,function (msg) {
  var chat = msg.chat.id; //user id
	const chatType = msg.chat.type;
  var resp = clock.today();

	if (chatType === 'group' || chatType === 'supergroup' || chatType === 'channel' || chatType === 'private')
      bot.sendMessage(chat,resp); //回給使用者的函式
});

bot.onText(/\/nowTime/,function (msg) {
  var chat = msg.chat.id; //user id
	const chatType = msg.chat.type;
  var resp = clock.nowTime();
  
  // send back the matched "whatever" to the chat
  if (chatType === 'group' || chatType === 'supergroup' || chatType === 'channel' || chatType === 'private')
   bot.sendMessage(chat, resp);
});

bot.onText(/\/cal (.+)/, function (msg,match) {
  var from = msg.from.id; //user id
  const chatType = msg.chat.type;
  
  /*進行運算*/
  var resp = match[1].replace(/[^-()\d/*+.]/g, '');
      resp = '答案是 ' + eval(resp);  

  // send back the matched "whatever" to the chat
  if (chatType === 'group' || chatType === 'supergroup' || chatType === 'channel' || chatType === 'private')
   bot.sendMessage(chat, resp);
});

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chat = msg.chat.id; 
  const chatType = msg.chat.type;
  const resp = match[1]; // the captured "whatever"
  // send back the matched "whatever" to the chat
  if (chatType === 'group' || chatType === 'supergroup' || chatType === 'channel' || chatType === 'private')
     bot.sendMessage(chat, resp);
});

bot.onText(/\/getWebsite (.+)/, (msg, match) => {
  const chat = msg.chat.id; 
  const chatType = msg.chat.type;
  const resp = match[1]; // the captured "whatever"
  const url = resp;
  websiteget.Get(url);
  
  // send back the matched "whatever" to the chat
  if (chatType === 'group' || chatType === 'supergroup' || chatType === 'channel' || chatType === 'private')
     bot.sendMessage(chat, "己把網頁輸出成圖片");
     bot.sendPhoto(chat,'./outFile/output_website'+clock.nowTime()+'.png');
});
