// new window for cv PDF

let btn = document.querySelector(".btn");
let message = document.querySelector(".message");
let show = document.querySelector(".show");
let cancel = document.querySelector(".cancel");
let section = document.querySelector(".countiener");

//show the massege
btn.onclick = function () {
    let newLocal = "flex";
    message.style.display = newLocal ;
    section.style.opacity = ".2";
    message.style.opacity = "1" ;
};

// new window to the pdf and close massege
show.onclick = function () {
    message.style.display = "none" ;
    section.style.opacity = "1";
    open("PDF/FWD.pdf", "", "width = 800, height = 500, top = 100, left = 100");
};

//close massege when click cancel
cancel.onclick = function () {
    message.style.display = "none" ;
    section.style.opacity = "1";
};
