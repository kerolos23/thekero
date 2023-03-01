// add mouse move effect to welcome section
let mouseMove = document.querySelector(".move");
if(mouseMove) {
    mouseMove.addEventListener("mousemove", function(e){
        let x = (e.clientX-this.offsetLeft),
            y = (e.clientY-this.offsetTop);
        
        let element = document.createElement("span");
        element.className = "mouse-move";
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;

        this.appendChild(element);
        setTimeout(() =>{
            element.remove()
        }, 900);
    })
}