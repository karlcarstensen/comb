'use strict';

/* jshint ignore:start */

// grab data
var retriveData = function() {
    var dataSource = 'data/arkansas.json';

    jqueryNoConflict.getJSON(dataSource, renderDataVisualsTemplate);

};

//begin main function
jqueryNoConflict(document).ready(function(){
    retriveData();
});
//end main function

/* jshint ignore:end */
