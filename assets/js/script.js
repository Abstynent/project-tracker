// var githubEl = $('input[name="github"]');
var formEl = $('#user-form-modal');
var projectNameEl = $('input[name="input-project-name"');
var projectTypeEl = $('select[name="select-project-type"');
var projectDueDateEl = $('input[name="select-due-date"');
var tableEl = $('#table-content');

var timeEl = $('#current-time');
var getTime = dayjs().format('ddd D, YYYY hh:mm:ss a');

var savedProjects = JSON.parse(localStorage.getItem("saved-projects"));

timeEl.text(getTime);
var timeInterval = setInterval(function() {
    getTime = dayjs().format('ddd D, YYYY hh:mm:ss a');
    timeEl.text(getTime);
}, 1000); // 1s interval

renderTable();
function renderTable() {
    if(savedProjects == null) return;
    // 

    for(var i=0; i < savedProjects.length; i++) {
        var tableRowEl = $('<tr>');
        tableEl.append(tableRowEl);

        for(var j=0; j < 3; j++) {
            var tableRowContentEl = $('<td class="p-3">');
            tableRowEl.append(tableRowContentEl);
            tableRowContentEl.text(savedProjects[i][j]);

            if(j===2) {
                var removeBtnEl = $('<td>');
                tableRowEl.append(removeBtnEl);
                removeBtnEl.append(
                    '<button type="button" class="btn btn-outline-danger btn-small delete-item-btn">&times;</button>'
                );
            };
        };
    };

};

function handleFormSubmit(event) {
    event.preventDefault();
    // console.log(projectNameEl.val());
    // console.log(projectTypeEl.val());
    // console.log(projectDueDateEl.val());
    

    if(savedProjects == null) {
        var newItem = [[projectNameEl.val(), projectTypeEl.val(),projectDueDateEl.val()]];
        savedProjects = newItem;
    } else {
        var newItem = [projectNameEl.val(), projectTypeEl.val(),projectDueDateEl.val()];
        savedProjects.push(newItem);
    };

    localStorage.setItem("saved-projects", JSON.stringify(savedProjects));
    renderTable();
};
// 
///////////////////////////////////
formEl.on('submit', handleFormSubmit);

// 
$(function () {
    $('#datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
    });
  });

//   i am trying to do task 3, i need to save form results to localstorage using jquery somehow