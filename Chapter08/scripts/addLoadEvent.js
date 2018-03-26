function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') window.onload = func;
    else window.onload = functon() {
        oldonload();
        func();
    }
}