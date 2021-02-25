var modal = document.querySelector('.main-popup');
var btn = document.querySelector(".main-header-nav__enter");
var btnClose = document.querySelector(".main-popup__contain__close");

console.log(btn);
btn.onclick = function() {
    modal.style.display = "block";
}
btnClose.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


