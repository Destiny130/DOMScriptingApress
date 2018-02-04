function popUp(winURL)
{
    window.open(winURL, "popup", "width=320,height=480");
}

window.onload = prepareLinks;

function prepareLinks()
{
    if (!document.getElementsByTagName) return false;
    var links = document.getElementsByTagName("a");
    var i = 0, len = links.length;
    for (; i < len; i++) {
        if (links[i].getAttribute("class") == "popup") {
            console.log(this);  //this is window
            links[i].onclick = function ()
            {
                console.log(this);  //this is 'a'
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}