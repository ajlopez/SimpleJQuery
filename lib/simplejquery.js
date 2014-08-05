
var elements = { };

function Element() {
}

function myjquery(name) {
    if (name[0] == '#')
        return getElementByName(name);
        
    return new Element();
}

function getElementByName(name) {
    var element = elements[name];
    
    if (!element)
        element = elements[name] = new Element();
        
    return element;
}

module.exports = {
    $: myjquery,
    $$: function () { }
}