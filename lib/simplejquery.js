
var elements = { };

function Element(name) {
    var tagname = null;
    
    if (name && name[0] == '<') {
        tagname = '';
        for (var k = 1; k < name.length; k++)
            if (isletter(name[k]))
                tagname += name[k];
            else
                break;
                
        tagname = tagname.toUpperCase();
    }
    
    this.prop = function (propname) {
        if (propname == 'tagName')
            return tagname;
            
        return null;
    }
}

function myjquery(name) {
    if (name[0] == '#')
        return getElementByName(name);
        
    return new Element(name);
}

function getElementByName(name) {
    var element = elements[name];
    
    if (!element)
        element = elements[name] = new Element();
        
    return element;
}

function isletter(ch) {
    return ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z';
}

module.exports = {
    $: myjquery,
    $$: function () { }
}