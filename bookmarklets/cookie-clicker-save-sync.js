/*
Use this code as a bookmarklet
javascript: (function () {
    Game.LoadMod('https://gasanchik.github.io/bookmarklets/cookie-clicker-save-sync.js');
  })();
*/

//Prob some very bad coding practises, have never done something like this before lol
window.alert("cookie-save-sync loaded in");

let styleSheet = `
.text {
  color: white; 
  font-family:Courier New
}

.div {
  background-color: black;
  margin: 25px 0 10px 0; 
  border-style: double; 
  border-width: 2px; 
  border-color: #FFFFFF; 
  padding: 25px; 
}
`
//.save-sync-div2 {display: none, background-color: black; bottom: 0px; position: fixed; z-index: 999;}
let container = document.createElement('div');
//messageElement.setAttribute("id", "cookie-sync-messages");
container.innerHTML = `<div 
  style = "
  background-color: black; 
  color: white; 
  font-family:Courier New,Courier,monospace; 
  bottom: 0px; 
  position: fixed;"

  id = "save-sync-container"
>
</p>Hello World!<p>
</div>`;
document.body.appendChild(container)
//<h1 style="background-color: black; color: white; font-family:Courier New,Courier,monospace; bottom: 0px; position: fixed;">Hello World!</h1>

//Make an element
function makeElement(parent, type, text) {
  let element = document.createElement(type);
  element.body.innerText = text
  parent.appendChild(element)
}

// Appends CSS content to the head of the site
function appendStyleSheet(id, content) {
  //if (!document.querySelector("#" + id)) {
      var head = document.head || document.getElementsByTagName("head")[0];
  //    console.log(head);
      head.appendChild(createStyleElement(content));
  //}
}

function createStyleElement(content) {
  var style = document.createElement("style");
  style.type = "text/css";
  //style.id = id;

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

  