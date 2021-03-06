/* Load Target Sat */
var sat = 'Nov 18, 2021 09:10:00';

var now = new Date().getTime();
var year = 2021;

while (new Date(sat).getTime() - now < 0) {
  year = year + 1;
}
/* Load End */

/* Load Comment */
var now_interval = new Date().getTime()
var distance = new Date(sat).getTime() - now_interval;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));

var content_list = []
if (days > 340) {
  content_list = content_list.concat(contents['common'], contents['D300']);
} else if (days > 50){
  content_list = content_list.concat(contents['common'], contents['D100']);
} else if (days > 30){
  content_list = content_list.concat(contents['common'], contents['D100'], contents['D50']);
} else if (days > 10){
  content_list = content_list.concat(contents['common'], contents['D30']);
} else {
  content_list = content_list.concat(contents['common'], contents['D30'], contents['D10']);
}
content_data = content_list[Math.floor(Math.random() * content_list.length)];
document.getElementById('sat_comment').innerHTML = content_data['content'];
document.getElementById('sat_reference').innerHTML = content_data['original'];
/* Load End */

/* Load Counter */
var x = setInterval(function() {
  var now_interval = new Date().getTime()
  var distance = new Date(sat).getTime() - now_interval;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('sat_count').innerHTML = days + '일 ' + hours + '시간 '
  + minutes + '분 ' + seconds + '초.';
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('sat_count').innerHTML = '이미 너는 최고야 :)';
  }
}, 1000);
/* Load End */
