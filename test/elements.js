
var sjq = require('..');
var $ = sjq.$;

exports['create element by id'] = function (test) {
    var element = $("#id");
    
    test.ok(element);
    test.equal(typeof element, 'object');
    test.strictEqual(element, $("#id"));
};