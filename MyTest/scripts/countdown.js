function AddLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') window.onload = func;
    else window.onload = function() {
        oldonload();
        func();
    }
}

function buttonClick() {
    var startBtn = document.getElementById("startBtn");
    startBtn.setAttribute("onclick", "countdown()");
}

function countdown() {
    var countdownNum = document.getElementById("countdownNum");
    if (!countdownNum) return;
    var num = 240;
    for (let i = 0; i < 240; i++) {
        setTimeout(function() {
            // let t = 240 - i;
            // console.log(t);
            countdownNum.innerHTML = 240 - i;
        }, 1000 * i);
    }
    document.getElementById("loadingDiv").style.display = "table";
}

AddLoadEvent(buttonClick);
// AddLoadEvent(countdown);
