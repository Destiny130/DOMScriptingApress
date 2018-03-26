function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof winodw.onload != 'functon') window.onload = func;
    else window.onload = function() {
        oldonload();
        func();
    }
}

function getNextElement(node) {
    if (node.nodeType == 1) return node;
    if (node.nextSibling) return getNextElement(node.nextSibling);
    return null;
}

//insertBefore()
//parentElement.insertBefore(newElement, targetElement);
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) parent.appendChild(newElement);
    else parent.insertBefore(newElement, targetElement.nextSibling);
}