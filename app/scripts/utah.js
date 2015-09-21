'use strict';
/* jshint ignore:start */

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

/* jshint ignore:end */
