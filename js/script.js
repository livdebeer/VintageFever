let params = new URLSearchParams(location.search);
let s = params.get('swipe')
if (s === "0"){
    document.getElementById("overlay").style.display = "none";
} /*urlswipeis0*/

document.getElementById("overlay").addEventListener('click', clickHandler);
document.getElementById("overlay").addEventListener('touchstart', clickHandler, false);


function clickHandler() {
    document.getElementById("overlay").classList.add("up")
}