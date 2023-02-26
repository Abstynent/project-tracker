var formEl = $('#user-form-modal');
var projectNameEl = $('input[name="input-project-name"');
var projectTypeEl = $('select[name="select-project-type"');
var projectDueDateEl = $('input[name="select-due-date"');
var tableEl = $('#table-content');

var timeEl = $('#current-time');
var getTime = dayjs().format('ddd D YYYY, hh:mm:ss a');

var savedProjects = JSON.parse(localStorage.getItem("saved-projects"));

// Interval to run in the background to display current time each second
timeEl.text(getTime);
var timeInterval = setInterval(function() {
    getTime = dayjs().format('ddd D YYYY, hh:mm:ss a');
    timeEl.text(getTime);
}, 1000); // 1s interval

// Take saved projects and render them on the page
renderTable();
function renderTable() {
    if(savedProjects == null) return;
    // 

    for(var i=0; i < savedProjects.length; i++) {
        var tableRowEl = $('<tr data-index="' + i + '">');
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

// add new project to the existing table
function addTableRow(index) {
    var tableRowEl = $('<tr data-index="' + index + '">');
    tableEl.append(tableRowEl);

    for(var i=0; i < 3; i++) {
        var tableRowContentEl = $('<td class="p-3">');
        tableRowEl.append(tableRowContentEl);
        tableRowContentEl.text(savedProjects[index][i]);

        if(i===2) {
            var removeBtnEl = $('<td>');
            tableRowEl.append(removeBtnEl);
            removeBtnEl.append(
                '<button type="button" class="btn btn-outline-danger btn-small delete-item-btn">&times;</button>'
            );
        };
    };

};

function handleFormSubmit(event) {
    event.preventDefault();

    if(savedProjects == null) {
        var newItem = [[projectNameEl.val(), projectTypeEl.val(),projectDueDateEl.val()]];
        savedProjects = newItem;
        check = 1;
    } else {
        var newItem = [projectNameEl.val(), projectTypeEl.val(),projectDueDateEl.val()];
        savedProjects.push(newItem);
    };

    localStorage.setItem("saved-projects", JSON.stringify(savedProjects));
    console.log(savedProjects.length);
    addTableRow(savedProjects.length-1);
};

function deleteItem() {
    var index = $(this).parent().parent().data('index');
    if(index===0) savedProjects.shift();
    else savedProjects.splice(index,index);

    localStorage.setItem("saved-projects", JSON.stringify(savedProjects));
    savedProjects = JSON.parse(localStorage.getItem("saved-projects"));
    $(this).parent().parent().remove();
};
///////////////////////////////////
formEl.on('submit', handleFormSubmit);
tableEl.on('click', '.delete-item-btn', deleteItem);

// 
$(function () {
    $('#datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
    });
  });
