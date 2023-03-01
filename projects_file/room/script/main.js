let img = document.querySelector("[name='side1']");
let title = document.querySelector(".text h2");
let pharagraph = document.querySelector(".text p");
let btns = document.querySelectorAll(".two-buttons");

btns.forEach(function (e) {
    e.addEventListener("click", function(){
        if (img.src.match("images/desktop-image-hero-1.jpg")){
            img.src= "images/desktop-image-hero-2.jpg";
        }else {
            img.src= "images/desktop-image-hero-1.jpg";
        };

        if (img.src.match("images/desktop-image-hero-2.jpg")){
            title.innerHTML="We are available all<br>across the globe";
            pharagraph.innerHTML= `
            With stores all over the world, it's easy for you to find furniture<br>
            for your home or place of business. Locally, we're in most<br>
            major cities throughout the country. Find the branch nearest<br>
            you using our store locator. Any questions? Don't hesitate to<br>
            contact us today.
            `;
        }else {
            title.innerHTML="Discover innovative<br>ways to decorate";
            pharagraph.innerHTML= `
            We provide unmatched quality. comfort, and style for property<br>
            owners across the country. Our experts combine form and<br>
            function in bringing your vision to life. Create a room in your<br>
            own style with our collection and make your property a<br>
            reflection of you and what you love
            `;
        };
    });
});