var telegram_bot = require('node-telegram-bot-api');
var token_api = '1346777562:AAE4tq5GF2G-XJoADuokVkzpIe25vi2uGEo';
var bot = new telegram_bot(token_api,{polling: true});

console.log("telegram chat bot server is start running......");

/*把客戶端收到的訊息輸出到伺服端的終端下*/
bot.on('message', (message) => {
    const { text } = message;
    console.log(`伺服端己收到:  ${text}`);
});


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
    var resp = 'pong'; // 要回的句子
    bot.sendMessage(chat,resp); //回給使用者的函式
});

bot.onText(/\/today/,function (msg) {
    var chat = msg.chat.id; //user id
    var Today=new Date();
    var day=Today.getDay();
    var out_day;
    if(day==0){
      out_day="週日";
    }else if (day==1) {
      out_day="週一";
    }else if (day==2) {
      out_day="週二";
    }else if (day==3) {
      out_day="週三";
    }else if (day==4) {
      out_day="週四";
    }else if (day==5) {
      out_day="週五";
    }else if (day==6) {
      out_day="週六";
     }
      
    var resp = '今天是'+ Today.getFullYear()+"/"+(Today.getMonth()+1)+"/"+Today.getDate()+` `+ out_day; // 要回的句子
    bot.sendMessage(chat,resp); //回給使用者的函式
});

bot.onText(/\/nowTime/,function (msg) {
    var chat = msg.chat.id; //user id
    var Today=new Date();
    var h=Today.getHours(); //hour
    var m=Today.getMinutes(); //min
    var s=Today.getSeconds(); //sec
    var resp = '現在時間(24小時制):  ' + h + '時' + m +'分'+ s +`秒` ; // 要回的句子
    bot.sendMessage(chat,resp); //回給使用者的函式
});

bot.onText(/\/cal (.+)/, function (msg,match) {
   var from = msg.from.id; //user id
   /*進行運算*/
   var resp = match[1].replace(/[^-()\d/*+.]/g, '');
       resp = '答案是 ' + eval(resp);
   bot.sendMessage(from,resp);   
});

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chat = msg.chat.id;
  const resp = match[1]; // the captured "whatever"
  // send back the matched "whatever" to the chat
  bot.sendMessage(chat, resp);
});

