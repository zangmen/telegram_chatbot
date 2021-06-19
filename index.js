var telegram_bot = require('node-telegram-bot-api');
var token_api = 'you_bot';
var bot = new telegram_bot(token_api,{polling: true});

console.log("telegram chat bot server is start running......");

bot.onText(/\/start/,function (msg) {
    var chat = msg.chat.id; //user id
    var resp = 'hello'; // 要回的句子
    bot.sendMessage(chat,resp); //回給使用者的函式
});

bot.onText(/\/ping/,function (msg) {
    var chat = msg.chat.id; //user id
    var resp = 'pong'; // 要回的句子
    bot.sendMessage(chat,resp); //回給使用者的函式
});

bot.onText(/\/today/,function (msg) {
    var chat = msg.chat.id; //user id
    var Today=new Date();
    var resp = 'Today is '+ Today.getFullYear()+"/"+(Today.getMonth()+1)+"/"+Today.getDate(); // 要回的句子
    bot.sendMessage(chat,resp); //回給使用者的函式
});

bot.onText(/\/nowTime/,function (msg) {
    var chat = msg.chat.id; //user id
    var Today=new Date();
    var h=Today.getHours();
    var m=Today.getMinutes();
    var s=Today.getSeconds();
    var resp = 'Now Time: ' + h + ':' + m+':'+s ; // 要回的句子
    bot.sendMessage(chat,resp); //回給使用者的函式
});



bot.onText(/\/cal (.+)/, function (msg,match) {
   var from = msg.from.id; //user id
   /*進行運算*/
   var resp = match[1].replace(/[^-()\d/*+.]/g, '');
       resp = 'total= ' + eval(resp);
   bot.sendMessage(from,resp);
    
});
