
var elements = { };

function Element(name) {
    var self = this;
    var tagname = null;
    var visible = true;
    var content = [];
    var attributes = { };
    
    if (name && name[0] == '<') {
        tagname = '';
        for (var k = 1; k < name.length; k++)
            if (isletter(name[k]) || isnumber(name[k]))
                tagname += name[k];
            else
                break;
                
        tagname = tagname.toLowerCase();
    }
    
    this.prop = function (propname) {
        if (propname == 'tagName')
            return tagname.toUpperCase();
            
        return null;
    }
    
    this.attr = function (attrname, attrvalue) {
        if (attrvalue != null) {
            attributes[attrname] = attrvalue;
            return;
        }
        
        return attributes[attrname];
    }
    
    this.$ = {
        visible: function () { return visible; },
        
        outerHtml: function () {
            var html = self.html();
            
            if (!html || !html.length)
                return '<' + tagname + ' />';
            else
                return '<' + tagname + '>' + self.html() + '</' + tagname + '>';
        }
    }
    
    this.hide = function() {
        visible = false;
    }
    
    this.show = function() {
        visible = true;
    }
    
    this.html = function (text) {
        if (text) {
            content = [text];
            return this;
        }
                
        var result = '';
        
        content.forEach(function (elem) {
            if (elem instanceof Element)
                result += elem.$.outerHtml();
            else
                result += elem;
        });
        
        return result;
    }
    
    this.empty = function () { content = []; }
    
    this.append = function (elem) {
        content.push(elem);
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

function isnumber(ch) {
    return ch >= '0' && ch <= '9';
}

module.exports = {
    $: myjquery,
    $$: function () { }
}