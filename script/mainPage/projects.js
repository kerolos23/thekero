// add popup to projects
let projectsButton = document.querySelectorAll(".img-btn");

let mainPopup = document.createElement("div");
mainPopup.className = "pop-countiener";

let cntrChild = document.createElement("div");
cntrChild.className = "child-countiener";

let imgPopDiv = document.createElement("div");
imgPopDiv.className = "img-div";
let imgPop = document.createElement("img");
imgPop.className = "pop-img";
imgPop.src = "images/main-projects/view_projects/room/active-states.jpg";


let textDiv = document.createElement("div");
textDiv.className = "popup-text";
let title = document.createElement("h2");
let textP =document.createElement("p");

let viewButton = document.createElement("button");
viewButton.textContent= "VIEW";

let closeButton = document.createElement("button");
closeButton.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>";
closeButton.className= "close";
//append the elements to html
// imgPopDiv.appendChild(imgPop);
// textDiv.appendChild(title)
// textDiv.appendChild(textP);

imgPopDiv.appendChild(imgPop);
textDiv.appendChild(title);
textDiv.appendChild(textP);
textDiv.appendChild(viewButton);

cntrChild.appendChild(imgPopDiv);
cntrChild.appendChild(textDiv);
cntrChild.appendChild(closeButton);
mainPopup.appendChild(cntrChild);

// edite the content
projectsButton[0].addEventListener("click", () => {
    imgPop.src = "images/main-projects/view_projects/room/active-states.jpg";
    title.innerHTML= "This is ROOM home page"
    textP.innerHTML= `
    Room homepage is an e-commerce website for selling room designs
    Use languages (HTML, CSS, JS) to build the site.
    It is responsive to all screens
    `
        viewButton.onclick= function () {
        window.open("projects_file/room/index.html", "_blank", "");
    }
});
projectsButton[1].addEventListener("click", () => {
    imgPop.src = "images/main-projects/view_projects/welcome_h_p/home_page.jpg";
    title.innerHTML= "This is W. home page"
    textP.innerHTML= `
    It was used to build the W. site Languages (HTML, CSS, and JavaScript)
    `
    viewButton.onclick= function () {
        window.open("projects_file/challege_news_homepage/index2.html", "_blank", "");
    };
});
projectsButton[2].addEventListener("click", () => {
    imgPop.src = "images/main-projects/view_projects/hoster/Landing_Page.png";
    title.innerHTML= "This is Hoster site"
    textP.innerHTML= `
    The "host" site is a hosting site
    The homepage was created just for him
    These languages were used to build the site (html, css, js) and the "bootstrap" library was used
    The site is responsive to all screens
    `;
});
projectsButton[3].addEventListener("click", () => {
    imgPop.src = "images/main-projects/view_projects/intro-section/active-states.jpg";
    title.innerHTML= "Snap Website"
    textP.innerHTML= `
    This site for remote work and team synchronization,
    no matter location.
    Streamline processes, create team rituals, and watch productivity soar
    These languages were used to build the site (html, css, js) and the "bootstrap" library
    `
});
projectsButton[4].addEventListener("click", () => {
    imgPop.src = "images/main-projects/view_projects/buy_product/active_states.jpg";
    title.innerHTML= "ecommerce product"
    textP.innerHTML= `A simple product page from the Sneackers website`
    
});
projectsButton[5].addEventListener("click", () => {
    imgPop.src = "images/main-projects/view_projects/space/space.jpg";
    title.innerHTML= "Space Site"
    textP.innerHTML= `Myspace is a website for space travel from your bedroom`;
});
projectsButton[6].addEventListener("click", () => {
    imgPop.src = "images/main-projects/view_projects/insure/desktop-preview.jpg";
    title.innerHTML= "Insure Landing Page"
    textP.innerHTML= `
    for this insurance company aims to "humanize" the insurance process and help customers
    find the right plan quickly. It's built using HTML, CSS, JavaScript, and Sass,
    and is responsive for use on a range of devices.
    `;
});
projectsButton[7].addEventListener("click", () => {
    imgPop.src = "images/main-projects/view_projects/sunny/desktop-preview.jpg";
    title.innerHTML= "Sunnyside agency"
    textP.innerHTML= `
    The landing page is for a creative agency that helps brands grow through visuals and teamwork. 
    It is built using HTML, CSS, and JavaScript with Sass. 
    The page is fast-loading and responsive, effectively balancing design and technical considerations.
    `;
});
projectsButton[8].addEventListener("click", () => {
    imgPop.src = "images/main-projects/view_projects/loop/desktop-preview.jpg";
    title.innerHTML= "Loopstudios landing page"
    textP.innerHTML= `
    The landing page is for LoopStudios, a company that creates immersive VR 
    experiences for businesses. Founded in 2011, 
    they have produced award-winning VR projects for clients worldwide. 
    The page is likely built using HTML, CSS, and JavaScript with Sass 
    and is designed to be responsive.
    `;
});
projectsButton[9].addEventListener("click", () => {
    imgPop.src = "images/main-projects/view_projects/traking/active-states.jpg";
    title.innerHTML= "Traking landing page"
    textP.innerHTML= `
    The landing page is for Monograph,
    a project management dashboard for agile teams. 
    It provides insights into project planning and time tracking. 
    The page is likely built using HTML, CSS, and JavaScript with Sass 
    and is designed to be responsive.
    `;
});
projectsButton[10].addEventListener("click", () => {
    imgPop.src = "images/main-projects/view_projects/storage/desktop-design.jpg";
    title.innerHTML= "data storage page"
    textP.innerHTML= `
    The "data storage" page likely provides information on the data storage solutions offered by the website. 
    It may include details on features and pricing, 
    and is likely built using HTML, CSS. 
    The page is designed to be responsive, ensuring a positive user experience on all devices.
    `;
});
projectsButton[11].addEventListener("click", () => {
    imgPop.src = "images/main-projects/view_projects/spense/landing-page.jpg";
    title.innerHTML= "spense landing page"
    textP.innerHTML= `
    The landing page is for Spense, a platform for individuals to share their thoughts and get paid. 
    Users can receive 99% of their earnings and withdraw via debit card, ACH or PayPal. 
    The page is likely built using HTML, CSS, and JavaScript with Sass, 
    and is designed to be responsive.
    `;
});





// add popup to projects 
projectsButton.forEach((el)=>{
    el.addEventListener("click", viewMore);
})
function viewMore(){
    document.querySelector("[src='script/mainPage/main.js']").before(mainPopup);
    cntrChild.style.opacity= "1";
};

// remove popup from projects when click close button or outside
window.addEventListener("click", closeOutSide);
closeButton.addEventListener("click", close);
function close () {
    mainPopup.remove();
    imgPop.src= "";
};
function closeOutSide(el) {
    if(el.target == mainPopup){
        mainPopup.remove();
        imgPop.src= "";
    };
};


// console.log(window.outerWidth)