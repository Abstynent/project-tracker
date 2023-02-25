var timeEl = $('#current-time');
var getTime = dayjs().unix();
timeEl.text(dayjs.unix(getTime));
var timeInterval = setInterval(function() {
    getTime++;
    timeEl.text(dayjs.unix(getTime));
}, 1000); // 1s interval


$(function () {
    $('#datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
    });
  });