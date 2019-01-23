const electron = require('electron');

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;

// initializing app
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    fullscreen: true,
    alwaysOnTop: true
  });
  mainWindow.loadURL('file://'+__dirname+'/main.html');
});

// selecting slide process (receive data from html)
ipcMain.on('selectSlide', (event, slide) => {
  mainWindow.webContents.send('selectSlide', slide);
});
