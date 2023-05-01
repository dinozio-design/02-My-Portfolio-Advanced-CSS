// this script is to set up the toggle switch for showing more info on each card

const para = document.querySelector("seeMore");

para = addEventListener ("click", seeMore);


function seeMore() {
    var textVisOff = document.getElementsByClassName ("seeMore");
    if (textVisOff.style.display === "none") {
        textVisOff.style.display = "block";
    }
}