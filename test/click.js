
var sjq = require('..');
var $ = sjq.$;

exports['click function'] = function (test) {
    test.async();

    var element = $("<div>").click(function () {
        test.done();
    }).html("hello");
    
    element.click();
};
