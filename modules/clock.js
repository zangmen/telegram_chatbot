/*Now Time*/
function nowTime(){
   var Today_time = new Date().toLocaleString('zh-TW', {timeZone: 'Asia/Taipei'}); //時區
   var respTime = '現在時間: ' + Today_time;
   return respTime;
}
/*Week*/
function today(){
  var Today = new Date();
  var day = Today.getDay();
  var out_day,resp_day;
  
  /*把day(0~6)転成星期*/
  if(day==0){
      out_day="星期日";
  }else if (day==1) {
      out_day="星期一";
  }else if (day==2) {
      out_day="星期二";
  }else if (day==3) {
      out_day="星期三";
  }else if (day==4) {
      out_day="星期四";
  }else if (day==5) {
      out_day="星期五";
  }else if (day==6) {
      out_day="星期六";
  }  
  resp_day = '今天是'+ out_day; // 要回的句子
  return resp_day;
}

module.exports = {
    today:today,
    nowTime:nowTime
};