// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
require('./menu')

require('electron').ipcRenderer.on('menucall', (event, message) => {
  window.navigation.menu.showSection2(message);
})
