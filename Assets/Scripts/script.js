// this script is to set up the toggle switch for showing more info on each card

//Global Variables
let btn_1 = document.getElementById("#btn-1");
let btn_2 = document.getElementById("#btn-2");
let btn_3 = document.getElementById("#btn-3");
let btn_4 = document.getElementById("#btn-4");
let btn_5 = document.getElementById("#btn-5");

let seeMore_1 = document.querySelector("#seeMore-1");
let seeMore_2 = document.querySelector("#seeMore-2");
let seeMore_3 = document.querySelector("#seeMore-3");
let seeMore_4 = document.querySelector("#seeMore-4");
let seeMore_5 = document.querySelector("#seeMore-5");

// This is a bonus item from the class material that we learned this week. I am too excited to wait and thought to give it a try. This works, although I believe there are much cleaner ways or writing this script, for now I suffice to my very first attempt at JavaScript. It feels great :)!!

function seeMoreInfo1(){
    if (seeMore_1.style.display !== "none"){
        seeMore_1.style.display = "none";
    } else {
        seeMore_1.style.display = "block";
    }
}
function seeMoreInfo2(){
    if (seeMore_2.style.display !== "none"){
        seeMore_2.style.display = "none";
    } else {
        seeMore_2.style.display = "block";
    }
}
function seeMoreInfo3(){
    if (seeMore_3.style.display !== "none"){
        seeMore_3.style.display = "none";
    } else {
        seeMore_3.style.display = "block";
    }
}
function seeMoreInfo4(){
    if (seeMore_4.style.display !== "none"){
        seeMore_4.style.display = "none";
    } else {
        seeMore_4.style.display = "block";
    }
}
function seeMoreInfo5(){
    if (seeMore_5.style.display !== "none"){
        seeMore_5.style.display = "none";
    } else {
        seeMore_5.style.display = "block";
    }
}