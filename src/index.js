// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const header = document.querySelector("h2");

const superEventHandler = {
    handleMouseEnter: function(){
        header.style.color=colors[0];
        header.innerHTML = "The mouse is here!";
    },
    handleMouseLeave: function(){
        header.style.color=colors[1];
        header.innerHTML = "The mouse is gone!";
    },
    handleResize: function(){
        header.style.color=colors[2];
        header.innerHTML = "You just resized";    
    },
    handleRightClick: function(){
        header.style.color=colors[3];
        header.innerHTML = "That was a right click";
    }
};

header.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
header.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener('resize', superEventHandler.handleResize);
header.addEventListener('contextmenu', superEventHandler.handleRightClick);