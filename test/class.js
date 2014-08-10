
var sjq = require('..');
var $ = sjq.$;

exports['add and has class'] = function (test) {
    var element = $("<div>").html("hello").addClass('myclass');
    
    test.ok(element);
    test.ok(element.hasClass('myclass'));
    test.equal(element.hasClass('otherclass'), false);
    test.equal(element.$.outerHtml(), "<div class='myclass'>hello</div>");
};
