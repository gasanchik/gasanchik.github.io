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
  border-radius: 4px;
  background-color: black;
  margin: 2px 2px; 
  border-style: ridge; 
  border-width: 2px; 
  border-color: #FFFFFF; 
  padding: 1px 10px;
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

.ccss-button, .ccss-close-button {
  border-style: ridge; 
  border-width: 2px; 
  background-color: transparent;
}

.ccss-center {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
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

let body = document.getElementById("wrapper")
let wrapper = makeElement(body, "div", "", {style : `position: fixed; z-index: 999; height: 100%; width: 100%;`, class : "ccss-wrapper"} )//document.createElement('div');
appendStyleSheet('ccss-wrapper', styleSheet)

let menuDiv = makeElement(wrapper, "div", null, {class : "ccss-div ccss-corner-bottom-left", id : "ccss-menu"})
let test = makeElement(wrapper, "p", "ggggfsdfg sadfgg", {class : "ccss-p"})

let promptDiv = makeElement(wrapper, "div", null, {class : "ccss-div ccss-center ccss-prompt", id : "ccss-prompt"})
let promptText = makeElement(promptDiv, "p", "Hello", {class : "ccss-p" , id : "ccss-prompt-text"})
//let promptInput = makeElement(promptDiv, "ccss-p ccss-div ccss-input", null, null, "input", `
//type = "text"
//
let promptInput = makeElement(promptDiv, "input", null, {class : "ccss-p ccss-div ccss-input" , id : "ccss-prompt-input", type : "text"})
let promptCloseButton = makeElement(promptDiv, "button", 'X', {class : "ccss-corner-top-right ccss-close-button ccss-p", id : "ccss-prompt-close-button"})
let promptError = makeElement(promptDiv, "p", "Error!", {class : "ccss-p" ,id : "ccss-prompt-error", style : `color: red;`})

//Make element
//function makeElement(parent, className, id, text = "", type = "div", innerHTML, style) {
function makeElement(parent, type = "div", innerHTML = "", attributes = "") {
  let element = document.createElement(type);
  //let elementHTML = "<"+type+" "+sideHTML+">"+innerHTML+"</"+type+">"
  element.innerHTML = innerHTML
  element.setattri = attributes
  parent.appendChild(element)
  return element
}

Element.prototype.setAttributes = function (attrs) {
  for (var idx in attrs) {
      if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
          for (var prop in attrs[idx]){this.style[prop] = attrs[idx][prop];}
      } else if (idx === 'html') {
          this.innerHTML = attrs[idx];
      } else {
          this.setAttribute(idx, attrs[idx]);
      }
  }
};

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



function updateValues(spreadsheetId, range, valueInputOption, _values, callback) {
    let values = [
      [
        // Cell values ...
      ],
      // Additional rows ...
    ];
    values = _values;
    const body = {
      values: values,
    };
    try {
      gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId: spreadsheetId,
        range: range,
        valueInputOption: valueInputOption,
        resource: body,
      }).then((response) => {
        const result = response.result;
        console.log(`${result.updatedCells} cells updated.`);
        if (callback) callback(response);
      });
    } catch (err) {
      document.getElementById('content').innerText = err.message;
      return;
    }
  }

  function getValues(spreadsheetId, range, callback) {
    try {
      gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: range,
      }).then((response) => {
        const result = response.result;
        const numRows = result.values ? result.values.length : 0;
        console.log(`${numRows} rows retrieved.`);
        if (callback) callback(response);
      });
    } catch (err) {
      document.getElementById('content').innerText = err.message;
      return;
    }
  }

  