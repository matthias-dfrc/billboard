const electron = require('electron');

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;

// initializing app
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    fullscreen: false,
    alwaysOnTop: false,
    autoHideMenuBar: true
  });
  mainWindow.loadURL('file://'+__dirname+'/main.html');

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

const menuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Quit',
        accelerator: process.platform === 'darwin' ? 'Command+Q': 'Ctrl+Q',
        click() {
          app.quit();
        }
      }
    ]
  }
];

if (process.env.NODE_ENV !== 'production') {
  menuTemplate.push({
    label: 'View',
    submenu: [
      {
        role: 'reload'
      },
      {
        label: 'Toggle developer Tools',
        accelerator: process.platform === 'darwin' ? 'Command+Alt+I' : 'Ctrl+Shift+I',
        click(item, focusedWindow) {
            focusedWindow.toggleDevTools();
        }
      }
    ]
  });
}
