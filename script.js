text.onclick = function(event) {
    document.getElementById('popup').setAttribute("style", "display: block;");
    document.getElementById('text').setAttribute("style", "overflow: hidden;");
};
document.ondblclick = function (event) {
    document.getElementById('popup').setAttribute("style", "display: none;");
    document.getElementById('text').setAttribute("style", "overflow: auto;");
};
popup.onmousedown = function (event) {
    let shiftX = event.clientX - popup.getBoundingClientRect().left;
    let shiftY = event.clientY - popup.getBoundingClientRect().top;

    popup.style.position = 'absolute';
    popup.style.zIndex = 1000;
    document.body.append(popup);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        popup.style.left = pageX - shiftX + 'px';
        popup.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    popup.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        popup.onmouseup = null;
    };

};
popup.ondragstart = function () {
    return false;
};
