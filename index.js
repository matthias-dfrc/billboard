const electron = require('electron');

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;
let auto = 1;

// initializing app
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    fullscreen: false,
    alwaysOnTop: false,
    autoHideMenuBar: false
  });
  if (auto === 1) {
  mainWindow.loadURL('file://'+__dirname+'/main.html');
  } else {
  mainWindow.loadURL('file://'+__dirname+'/main_manual.html');
  }

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
      },
      {
        label: 'Auto',
        accelerator: process.platform === 'darwin' ? 'Command+A' : 'Ctrl+A',
        click() {
          auto = 1;
        }
      },
        {
            label: 'Manual',
            accelerator: process.platform === 'darwin' ? 'Command+M' : 'Ctrl+M',
            click() {
              auto = 2;
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
