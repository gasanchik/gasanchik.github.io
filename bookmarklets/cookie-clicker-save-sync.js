/*
Use this code as a bookmarklet
javascript: (function () {
    Game.LoadMod('https://gasanchik.github.io/bookmarklets/cookie-clicker-save-sync.js');
  })();
*/

//Prob some very bad coding practises, have never done something like this before lol
window.alert("cookie-save-sync loaded in");

let style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.save-sync-text {color: white; font-family:Courier New}, .save-sync-div1 {background-color: black;margin: 25px 0 10px 0; border-style: double; border-width: 2px; border-color: #FF6699; padding: 25px; background-color: #FFFFFF;}; .save-sync-div2 {display: none, background-color: black; bottom: 0px; position: fixed; z-index: 999;};';

messageElement = document.createElement('h1');
//messageElement.setAttribute("id", "cookie-sync-messages");
messageElement.innerHTML = '<h1 style="background-color: black; color: white; font-family:Courier New,Courier,monospace; bottom: 0px; position: fixed;">Hello World!</h1>';
document.body.appendChild(messageElement)
//<h1 style="background-color: black; color: white; font-family:Courier New,Courier,monospace; bottom: 0px; position: fixed;">Hello World!</h1>


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

  