// this script is to set up the toggle switch for showing more info on each card


let btn_1 = document.getElementById("#btn-1");

btn_1.addEventListener("click", seeMoreInfo);



function seeMoreInfo(){
    let seeMore_1 = document.querySelector("#seeMore-1");
    console.log(seeMore_1.style.display);
    if (seeMore_1.style.display === "none"){
        seeMore_1.style.display = "block";
    } else {
        seeMore_1.style.display = "none";
    }
}