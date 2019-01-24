const electron = require('electron');

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;

// initializing app
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    fullscreen: true,
    alwaysOnTop: false
  });
  mainWindow.loadURL('file://'+__dirname+'/main.html');

});
