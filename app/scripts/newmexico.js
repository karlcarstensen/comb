'use strict';

// render compiled handlebars template
var renderDataVisualsTemplate = function(data) {
    // handlebarsDebugHelper();
    renderHandlebarsTemplate('templates/listing.handlebars', '#newmexico-list', data);
};

// grab data
var retriveData = function() {
    var dataSource = 'data/newmexico.json';
    jqueryNoConflict.getJSON(dataSource, renderDataVisualsTemplate);
};

//begin main function
jqueryNoConflict(document).ready(function(){
    retriveData();
});
//end main function
