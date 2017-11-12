const {app, Menu} = require('electron')

const template = [
  {
    label: 'Demo',
    submenu: [
      {
        label: 'Versions',
        click (menuItem, browserWindow, event) {
          browserWindow.webContents.send('menucall', 'versions');
         }
      },
      {
        label: 'jQuery Counter',
        click (menuItem, browserWindow, event) {
          browserWindow.webContents.send('menucall', 'jqcounter');
         }
      },
      {
        label: 'Bootstrap Table with Hover Rows',
        click (menuItem, browserWindow, event) {
          browserWindow.webContents.send('menucall', 'bstable');
         }
      },
      {
        label: 'Bootstrap Tab Nav',
        click (menuItem, browserWindow, event) {
          browserWindow.webContents.send('menucall', 'bstabnav');
         }
      },
      {
        label: 'Custom Menus',
        click (menuItem, browserWindow, event) {
          browserWindow.webContents.send('menucall', 'menu');
         }
      },
      {
        label: 'Form and Communications',
        click (menuItem, browserWindow, event) {
          browserWindow.webContents.send('menucall', 'form');
         }
      },
      {
        label: 'Webview',
        click (menuItem, browserWindow, event) {
          browserWindow.webContents.send('menucall', 'webview');
         }
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {role: 'undo'},
      {role: 'redo'},
      {type: 'separator'},
      {role: 'cut'},
      {role: 'copy'},
      {role: 'paste'},
      {role: 'pasteandmatchstyle'},
      {role: 'delete'},
      {role: 'selectall'}
    ]
  },
  {
    label: 'View',
    submenu: [
      {role: 'reload'},
      {role: 'forcereload'},
      {role: 'toggledevtools'},
      {type: 'separator'},
      {role: 'resetzoom'},
      {role: 'zoomin'},
      {role: 'zoomout'},
      {type: 'separator'},
      {role: 'togglefullscreen'}
    ]
  },
  {
    role: 'window',
    submenu: [
      {role: 'minimize'},
      {role: 'close'}
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('https://electron.atom.io') }
      }
    ]
  }
]

if (process.platform === 'darwin') {
  template.unshift({
    label: app.getName(),
    submenu: [
      {role: 'about'},
      {type: 'separator'},
      {role: 'services', submenu: []},
      {type: 'separator'},
      {role: 'hide'},
      {role: 'hideothers'},
      {role: 'unhide'},
      {type: 'separator'},
      {role: 'quit'}
    ]
  })

  // Edit menu
  template[1].submenu.push(
    {type: 'separator'},
    {
      label: 'Speech',
      submenu: [
        {role: 'startspeaking'},
        {role: 'stopspeaking'}
      ]
    }
  )

  // Window menu
  template[3].submenu = [
    {role: 'close'},
    {role: 'minimize'},
    {role: 'zoom'},
    {type: 'separator'},
    {role: 'front'}
  ]
}

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
