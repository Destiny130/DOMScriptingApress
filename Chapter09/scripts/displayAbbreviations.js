function displayAbbreviations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    //Get all abbreviations
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;
    var defs = new Array();
    //Traversal all abbreviations
    for (var i = 0; i < abbreviations.length; i++) {
        var currentAbbr = abbreviations[i];
        if (currentAbbr.childNodes.length < 1) continue;
        var definition = currentAbbr.getAttribute("title");
        var key = currentAbbr.lastChild.nodeValue;
        defs[key] = definition;
    }
    //Create define list
    var dlist = document.createElement("dl");
    //Loop through the definitions
    for (key in defs) {
        var definition = defs[key];
        //Create define title
        var dtitle = document.createElement("dt");
        var dtitleText = document.createTextNode(key);
        dtitle.appendChild(dtitleText);
        //Create define description
        var ddesc = document.createElement("dd");
        var ddescText = document.createTextNode(definition);
        ddesc.appendChild(ddescText);
        //Add to define list
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    //Create header
    var header = document.createElement("h2");
    var headerText = document.createTextNode("Abbreviations");
    header.appendChild(headerText);
    //Add header to main page
    document.body.appendChild(header);
    //Add define list to main page
    document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);