'use strict';

// render compiled handlebars template
var renderDataVisualsTemplate = function(data) {
    // handlebarsDebugHelper();
    renderHandlebarsTemplate('templates/listing.handlebars', '#colorado-list', data);
};

// grab data
var retriveData = function() {
    var dataSource = 'data/colorado.json';
    jqueryNoConflict.getJSON(dataSource, renderDataVisualsTemplate);
};

//begin main function
jqueryNoConflict(document).ready(function(){
    retriveData();
});
//end main function
