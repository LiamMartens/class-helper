HTMLElement.prototype.hasClass = function(className) {
    var classes = this.className.split(' ');
    if(classes.indexOf(className) > -1)
        return true;
    else return false;
}
HTMLElement.prototype.addClass = function(className) {
    if(!this.hasClass(className)) {
        if(this.className.trim().length>0) { this.className += ' '; }
        this.className += className;
    }
}
HTMLElement.prototype.removeClass = function(className) {
    className=className.trim();
    var classes = this.className.split(' ');
    var newClass = '';
    for(var i = 0; i < classes.length; i++) {
        var cls = classes[i].trim();
        if((cls!='')&&(cls!=className)) {
            if(i>0) { newClass+=' '; }
            newClass+=cls;
        }
    }
    this.className = newClass;
}
