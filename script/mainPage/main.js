// I do loop for repeat the elements two times
for (let i = 1; i <= 2; i++) {
    // create elements for animation scroll down
        let motherDiv = document.createElement("div");
        motherDiv.className = "all-containers container-one";
        let paragraph = document.createElement("p");
        let svg = document.createElement("div");
        svg.className = "all-svg svg-one";
        
        let text = document.createTextNode("scroll down");
        svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path stroke="currentColor" stroke-linecap="round" 
                stroke-linejoin="round" stroke-width="2" d="m12 5 6 6m-6-6-6 6m6-6v14"/>
                </svg>`;

    // add the element to the mother div    
        motherDiv.appendChild(paragraph);
        motherDiv.appendChild(svg);
        paragraph.appendChild(text);
        
        let lastElement = document.querySelector("[class='backg']"); //get the last element of section to add the element after it
        lastElement.after(motherDiv);
    };
    // get div number 2 for change class name for css styling
    let divTwo = document.querySelectorAll(".all-containers");
    divTwo[1].className = "all-containers container-two";
    let svgTwo = document.querySelectorAll(".all-svg");
    svgTwo[1].className = "all-svg svg-two";
// finish 


//add button to html 
let button = document.createElement("button");
button.className = "btn";
button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 5 6 6m-6-6-6 6m6-6v14"/>
        </svg>`; // add the icon 
document.querySelector("[src='script/mainPage/main.js']").before(button);
button.onclick = function () {
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    })
}; // add event to the button when click take me top

//  get expCards for do animation for it
let expCards = document.querySelector("#exp-cards"),
    expSection = document.querySelector(".experience");
    expTop = expSection.offsetTop;
    expHeight = expSection.offsetHeight - 250;
let allCards = document.querySelectorAll(".exp-card");
let allText = document.querySelectorAll(".srcl");

// make the animations 
window.onscroll = function () {
    if (window.scrollY >= 544) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    };
// when the scroll y be 910 exp card == flex
    if (window.scrollY >= expTop - expHeight) {
        for (let i = 0; i < allCards.length; i++){
            allCards[i].style.opacity= "1"; // add the animation
        };
    };
};

// add cobyright
let date = new Date();
let spanCobyRight = document.querySelector("#cobyright");
spanCobyRight.innerHTML = `${date.getFullYear()}`

// exp prsnt 
let fireFoxHeight = window.innerHeight;
console.log(fireFoxHeight)
let prsnt = document.querySelectorAll(".circle_progressCircleBar");
if (fireFoxHeight ==  643) {
    prsnt.forEach((e) => e.classList= "transform-origin");
    allText.forEach((e) => e.style.paddingTop = "2em");
    allText.forEach((e) => e.style.paddingLeft = ".3em");
}