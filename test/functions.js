
var sjq = require('..');

exports['functions'] = function (test) {
    test.ok(sjq.$);
    test.equal(typeof sjq.$, 'function');
    test.ok(sjq.$$);
    test.equal(typeof sjq.$$, 'function');
}