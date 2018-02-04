function showPic(whichpic)
{
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);

    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
    console.log(description.nodeType);
    console.log(description.firstChild.nodeType);
}

function CountBodyChildren()
{
    var bodyElement = document.getElementsByTagName("body")[0];
    console.log(bodyElement.childNodes.length);
}

window.onload = CountBodyChildren;