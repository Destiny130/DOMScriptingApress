function AddOnloadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') window.onload = func;
    else window.onload = function() {
        oldonload();
        func();
    }
}

function AddElementsWithInnerHTML() {
    console.time("withInnerHTML");
    var elem1 = document.getElementById("usingInnerHTML");
    // var divInner = '';
    // for (var i = 0; i < 50000; i++) {
    //     divInner += '<div>test,test,test,test,test,test,test,test,test,test,test,test</div>'
    // }
    // elem1.innerHTML = divInner;

    var tableInner = '<table>';
    for (let i = 0; i < 80000; i++) {
        tableInner += '<tr><td>test1, test2</td><td>test1, test2</td><td>test1, test2</td><td>test1, test2</td><td>test1, test2</td></tr>';
    }
    tableInner += '</table>';
    elem1.innerHTML = tableInner;
    console.timeEnd("withInnerHTML");
}

function AddElementWithCreateElement() {
    console.time("withCreateElement");
    var elem2 = document.getElementById("usingCreateElement");
    // var tempDiv = document.createElement("div");
    // for (var i = 0; i < 50000; i++) {
    //     var divNode = document.createElement("div");
    //     var divText = document.createTextNode("test,test,test,test,test,test,test,test,test,test,test,test");
    //     divNode.appendChild(divText);
    //     tempDiv.appendChild(divNode);
    // }
    // elem2.appendChild(tempDiv);

    var tempTable = document.createElement("table");
    for (var i = 0; i < 80000; i++) {

    }
    console.timeEnd("withCreateElement");
}

function AddElementWithCreateElementAndFragment() {
    console.time("withCreateElementAndFragment");
    var elem3 = document.getElementById("usingCreateElementAndFragment");
    var documentFragment = document.createDocumentFragment();
    for (var i = 0; i < 50000; i++) {
        var divNode = document.createElement("div");
        var divText = document.createTextNode("test,test,test,test,test,test,test,test,test,test,test,test");
        divNode.appendChild(divText);
        documentFragment.appendChild(divNode);
    }
    elem3.appendChild(documentFragment);
    console.timeEnd("withCreateElementAndFragment");
}

AddOnloadEvent(AddElementsWithInnerHTML);
// AddOnloadEvent(AddElementWithCreateElement);
// AddOnloadEvent(AddElementWithCreateElementAndFragment);

/*	Execution Result:  execute 8~9 times, and record max time spent.
	Using Chrome, FireFox faster than Chrome, 360 spent double time than Chrome

					50000<div>		80000<tr>
InnerHTML 			98ms			528ms
CreateElement 		127ms
UsingFragment 		158ms
*/
