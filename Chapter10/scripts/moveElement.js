function moveElement(elementID, finalX, finalY, interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    if (elem.movement) clearTimeout(elem.movement);
    if (!elem.style.left) elem.style.left = "0px";
    if (!elem.style.top) elem.style.top = "0px";
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;
    if (xpos == finalX && ypos == finalY) return true;
    if (xpos < finalX) {
        dist = Math.ceil((finalX - xpos) / 10);
        xpos += dist;
    }
    if (xpos > finalX) {
        dist = Math.ceil((xpos - finalX) / 10);
        xpos -= dist;
    }
    if (ypos < finalY) {
        dist = Math.ceil((finalY - ypos) / 10);
        ypos += dist;
    }
    if (ypos > finalY) {
        dist = Math.ceil((ypos - finalY) / 10);
        ypos -= dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('" + elementID + "', " + finalX + ", " + finalY + ", " + interval + ")";
    elem.movement = setTimeout(repeat, interval);
}