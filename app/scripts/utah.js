'use strict';

// render compiled handlebars template
var renderDataVisualsTemplate = function(data) {
    // handlebarsDebugHelper();
    renderHandlebarsTemplate('templates/listing.handlebars', '#utah-list', data);
};

// grab data
var retriveData = function() {
    var dataSource = 'data/utah.json';
    jqueryNoConflict.getJSON(dataSource, renderDataVisualsTemplate);
};

//begin main function
jqueryNoConflict(document).ready(function(){
    retriveData();
});
//end main function
