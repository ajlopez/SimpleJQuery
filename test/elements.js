
var sjq = require('..');
var $ = sjq.$;

exports['create element by id'] = function (test) {
    var element = $("#id");
    
    test.ok(element);
    test.equal(typeof element, 'object');
    test.strictEqual(element, $("#id"));
};

exports['create element by tag'] = function (test) {
    var element = $("<div>");
    
    test.ok(element);
    test.equal(typeof element, 'object');
    test.ok(element !== $("<div>"));
}

exports['get tag name'] = function (test) {
    var element = $("<div>");
    test.equal(element.prop('tagName'), 'DIV');
}

exports['get closed tag name'] = function (test) {
    var element = $("<div/>");
    test.equal(element.prop('tagName'), 'DIV');
}

