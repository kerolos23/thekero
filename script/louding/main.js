// create the Loading page element

let tLoad = "Loading" //string
let countiener = document.createElement("div");
countiener.className= "loading";
let div = document.createElement("div");
div.className= "child-load";
// elements heart load and load string
let textLoadingDiv = document.createElement("h2");
textLoadingDiv.className= "title";
let titleLoad = document.createTextNode(tLoad.toUpperCase());
textLoadingDiv.style.cssText= `
    letter-spacing: 0.2em;
    color: rgb(0, 0, 0);
    -webkit-text-stroke: 0.9px rgb(1, 32, 255);
    font-size: 4em;
    font-weight: 900;
    align-items: end;
    display: flex;
    position: relative;
    justify-content: center;
`;
let spanLoad = document.createElement("span");
spanLoad.className= "load-span";
let titleSpan = document.createTextNode(tLoad.toUpperCase());
let svgDiv= document.createElement("div");
svgDiv.className= "heart-rate";
svgDiv.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
</svg>`

div.appendChild(svgDiv);
spanLoad.appendChild(titleSpan);
textLoadingDiv.appendChild(titleLoad);
textLoadingDiv.appendChild(spanLoad);
div.appendChild(textLoadingDiv);
countiener.appendChild(div);
// append to body 
document.body.after(countiener);

// when all thing run, move the Loading page
window.onload= function(){
    countiener.remove();
    document.body.style.overflow="auto";
};
