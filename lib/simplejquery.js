
var elements = { };

function Element() {
}

function myjquery(name) {
    var element = elements[name];
    
    if (!element)
        element = elements[name] = new Element();
        
    return element;
}

module.exports = {
    $: myjquery,
    $$: function () { }
}