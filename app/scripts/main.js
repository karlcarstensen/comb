'use strict';

console.log('\'Allo \'Allo!');

/* jshint ignore:start */

// Responsive Slides
$(function() {
  $('.rslides').responsiveSlides();
});

// Handlebars stuffs
var jqueryNoConflict = jQuery;

// render handlebars templates via ajax
var getTemplateAjax = function(path, callback) {
    var source, template;
    jqueryNoConflict.ajax({
        url: path,
        success: function (data) {
            source = data;
            template = Handlebars.compile(source);
            if (callback) {
              callback(template);
            }
        }
    });
};

// function to compile handlebars template
var renderHandlebarsTemplate = function(withTemplate,inElement,withData) {
    getTemplateAjax(withTemplate, function(template) {
        jqueryNoConflict(inElement).html(template(withData));
    });
};

// render compiled handlebars template
var renderDataVisualsTemplate = function(data) {
    // handlebarsDebugHelper();
    renderHandlebarsTemplate('templates/listing.handlebars', '#shop-list', data);
};

// add handlebars debugger
// var handlebarsDebugHelper = function() {
//     Handlebars.registerHelper('debug', function(optionalValue) {
//         console.log('Current Context');
//         console.log('====================');
//         console.log(this);
//     });
// };

/* jshint ignore:end */
