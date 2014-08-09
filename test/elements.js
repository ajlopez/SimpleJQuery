
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

exports['get tag name with digit'] = function (test) {
    var element = $("<h1>");
    test.equal(element.prop('tagName'), 'H1');
}

exports['get closed tag name'] = function (test) {
    var element = $("<div/>");
    test.equal(element.prop('tagName'), 'DIV');
}

exports['is visible, show, hide'] = function (test) {
    var element = $("<div/>");
    test.ok(element.$.visible());
    element.hide();
    test.ok(!element.$.visible());
    element.show();
    test.ok(element.$.visible());
}

exports['html'] = function (test) {
    var element = $("<h1>");
    element.html("My Header");
    test.equal(element.html(), "My Header");
}

exports['append children and html'] = function (test) {
    var element = $("<div>");
    element.append($("<p>").html("Hello"));
    element.append($("<p>").html("World"));
    test.equal(element.html(), "<p>Hello</p><p>World</p>");
}

exports['empty'] = function (test) {
    var element = $("<h1>");
    element.html("My Header");
    element.empty();
    test.equal(element.html(), "");
}

exports['attr'] = function (test) {
    var element = $("<div>");
    test.equal(element.attr('name'), null);
    element.attr('name','mydiv');
    test.equal(element.attr('name'), 'mydiv');
}

exports['outer html of empty element'] = function (test) {
    test.equal($("<div>").$.outerHtml(), "<div />");
}

exports['outer html with attribute'] = function (test) {
    test.equal($("<div>").html("Hello, world").attr("name","mydiv").$.outerHtml(), "<div name='mydiv'>Hello, world</div>");
}

exports['attribute id'] = function (test) {
    var element = $("<div>").attr("id", "mydiv");
    test.strictEqual(element, $("#mydiv"));
}
