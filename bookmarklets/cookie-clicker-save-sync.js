/*
Use this code as a bookmarklet
javascript: (function () {
    Game.LoadMod('https://gasanchik.github.io/bookmarklets/cookie-clicker-save-sync.js');
  })();
*/

//Prob some very bad coding practises, have never done something like this before lol
window.alert("cookie-save-sync loaded in");

let styleSheet = `
.ccss-p {
  color: white; 
  font-family:Courier New;
  font-size: 15;
  line-height = 5px;
}

.ccss-div {
  position: relative;
  border-radius: 4px;
  background-color: black;
  margin: 2px 2px; 
  border-style: ridge; 
  border-width: 2px; 
  border-color: #FFFFFF; 
  padding: 1px 10px;
  transform: translateZ(10px);
  z-index: 999;
}

.ccss-corner-bottom-left {
  position: fixed;
  bottom: 0;
  left: 0;
}

.ccss-corner-top-right {
  position: fixed;
  top: 0;
  right: 0;
}

.ccss-button {
  border-style: ridge; 
  border-radius: 4px;
  border-width: 2px; 
  background-color: black;
}

.ccss-center {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.ccss-button:hover {
  color: grey;
}

.ccss-close-button:hover {
  color: red;
}

.ccss-prompt {
  padding: 25px 25px; 
}

.ccss-input {
  
}
`

let coreWrapper = document.getElementById("wrapper")
let wrapper = document.createElement('div')
coreWrapper.appendChild(wrapper)
wrapper.style = `
height: 100%;
width: 100%;
`
//wrapper.id = "ccss-wrapper"
/*
let wrapper = makeElement(body, "div", "", {class : "ccss-wrapper", style : `
  position: fixed;
  height: 100%;
  width: 100%;
  z-index:0;
`} ) */
appendStyleSheet('ccss-wrapper', styleSheet)

let menuDiv = makeElement(wrapper, "div", null, {class : "ccss-div ccss-corner-bottom-left", id : "ccss-menu", style : `
  position: fixed;
  bottom: 0;
  left: calc(calc(30% + 37px));
`
})
let openCloseButtonMenu = makeElement(wrapper, "button", ">", {class : "ccss-div ccss-p ccss-button", style : `
  position: fixed;
  bottom: 0;
  left: calc(30% + 15px);
  padding: 2px 5.5px;
  transform: rotate(90deg);
`})
let test = makeElement(menuDiv, "p", "ggggfsdfg sadfgg", {class : "ccss-p"})

let promptDiv = makeElement(wrapper, "div", null, {class : "ccss-div ccss-center ccss-prompt", id : "ccss-prompt"})
let promptText = makeElement(promptDiv, "p", "Hello", {class : "ccss-p" , id : "ccss-prompt-text"})
let promptChoisesText = makeElement(promptDiv, "p", "Choises:143126 1n345 13613", {class : "ccss-p" , id : "ccss-prompt-text"})
let promptInput = makeElement(promptDiv, "input", null, {class : "ccss-p ccss-div ccss-input" , id : "ccss-prompt-input", type : "text"})
let promptCloseButton = makeElement(promptDiv, "button", 'X', {class : "ccss-corner-top-right ccss-close-button ccss-button ccss-p", id : "ccss-prompt-close-button"})
let promptError = makeElement(promptDiv, "p", "Error!", {class : "ccss-p" ,id : "ccss-prompt-error", style : `color: red;`})

//Make element
function makeElement(parent, type = "div", innerHTML = "", attributes = "") {
  let element = document.createElement(type);
  //let elementHTML = "<"+type+" "+sideHTML+">"+innerHTML+"</"+type+">"
  element.innerHTML = innerHTML
  setAttributes(element, attributes)
  parent.appendChild(element)
  return element
}

function setAttributes (element, attrs) {
  for (var idx in attrs) {
      //if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
      //  element.style = attrs
          //for (var prop in attrs[idx]){this.style[prop] = attrs[idx][prop];}
      //} else if (idx === 'html') {
      //  element.innerHTML = attrs[idx];
      //} else {
        element.setAttribute(idx, attrs[idx])
      //}
  }
}

//custom prompt function
function prompt(message, prompt, choises) {

}

// Appends CSS content to the head of the site
function appendStyleSheet(id, content) {
  if (!document.querySelector("#" + id)) {
      var head = document.head || document.getElementsByTagName("head")[0];
      //console.log(head);
      head.appendChild(createStyleElement(id, content));
  }
}

function createStyleElement(id, content) {
  var style = document.createElement("style");
  style.type = "text/css";
  style.id = id;

  if (style.styleSheet) {
      style.styleSheet.cssText = content;
  } else {
      style.appendChild(document.createTextNode(content));
  }
  return style;
}

//All buttons and their functions
document.body.onclick = function(e) {
  var clickedElement = window.event ? event.srcElement : e.target;
  while (clickedElement != null) {
      if (clickedElement.className
          && (clickedElement.className).indexOf("ccss-button") != -1) {

          alert("Element with class was clicked");
          return;
      }
      clickedElement = clickedElement.parentNode;
  }
}