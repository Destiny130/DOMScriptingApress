function styleElementSiblings(tag, theclass) {
    if (!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName(tag);
    var elem;
    for (var i = 0; i < headers.length; i++) {
        elem = getNextElement(headers[i].nextSibling);
        // elem.style.fontWeight = "bold";
        // elem.style.fontSize = "1.2em";
        // elem.setAttribute("class", "intro");
        // elem.className = "intro";
        addClass(elem, theclass);
    }
}

function getNextElement(node) {
    if (node.nodeType == 1) return node;
    if (node.nextSibling) return getNextElement(node.nextSibling);
    return null;
}

function addClass(element, value) {
    if (!element.className) element.className = value;
    else {
        var newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

addLoadEvent(function() {
    styleElementSiblings("h1", "intro");
});