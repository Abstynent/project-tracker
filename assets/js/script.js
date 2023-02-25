// var githubEl = $('input[name="github"]');
var formEl = $('#user-form-modal');
var projectNameEl = $('input[name="input-project-name"');
var projectTypeEl = $('select[name="select-project-type"');
var projectDueDateEl = $('input[name="select-due-date"');

var timeEl = $('#current-time');
var getTime = dayjs().format('ddd D, YYYY hh:mm:ss a');

timeEl.text(getTime);
var timeInterval = setInterval(function() {
    getTime = dayjs().format('ddd D, YYYY hh:mm:ss a');
    timeEl.text(getTime);
}, 1000); // 1s interval


function handleFormSubmit(event) {
    event.preventDefault();
    // input-project-name
    // select-project-type
    // select-due-date
    console.log(projectNameEl.val());
    console.log(projectTypeEl.val());
    console.log(projectDueDateEl.val());
};
// 
formEl.on('submit', handleFormSubmit);

// 
$(function () {
    $('#datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
    });
  });