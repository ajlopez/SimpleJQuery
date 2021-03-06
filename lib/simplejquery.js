
var elements = { };

function Element(name) {
    var self = this;
    var tagname = null;
    var visible = true;
    var content = [];
    var attributes = { };
    var clickfn;
    
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
    
    this.click = function (fn) {
        if (fn) {
            clickfn = fn;
            return this;
        }
        
        clickfn();
    }
    
    this.attr = function (attrname, attrvalue) {
        if (attrvalue != null) {
            attributes[attrname] = attrvalue;
            
            if (attrname.toLowerCase() == 'id')
                elements[attrvalue.toLowerCase()] = this;
                
            return this;
        }
        
        return attributes[attrname];
    }
    
    this.addClass = function (name) {
        if (!attributes['class'])
            attributes['class'] = [];
            
        attributes['class'].push(name);
        
        return this;
    }
    
    this.hasClass = function (name) {
        if (!attributes['class'])
            return false;
            
        return attributes['class'].indexOf(name) >= 0;
    }
    
    this.$ = {
        visible: function () { return visible; },
        
        outerHtml: function () {
            var html = self.html();
            var tag = tagname;
            
            for (attr in attributes) {
                var val = attributes[attr];
                
                if (Array.isArray(val))
                    val = val.join(' ');
                    
                tag += ' ' + attr + "='" + val + "'";
            }

            if (!html || !html.length)
                return '<' + tag + ' />';
            else
                return '<' + tag + '>' + self.html() + '</' + tagname + '>';
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
        return getElementByName(name.substring(1));
        
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

