import { app, BrowserWindow, ipcMain, Menu } from 'electron';
import * as path from 'path';
import * as url from 'url';

let win, serve;
const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

function initMenu() {
  const template: Electron.MenuItemConstructorOptions[] = [
    {
      label: 'View',
      submenu: [{ role: 'about' }, { role: 'reload' }]
    },
    {
      role: 'window',
      submenu: [
        { role: 'minimize' },
        { role: 'hide' },
        { role: 'quit' },
        { type: 'separator' },
        { label: 'Pomodoro Cycle', accelerator: 'Cmd+O', click: () => win.show() }
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click() {
            require('electron').shell.openExternal('https://electron.atom.io');
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

function createWindow() {
  // const electronScreen = screen;
  // const size = electronScreen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    // width: size.width,
    // height: size.height,
    width: 500,
    height: 500,
    resizable: false,
    titleBarStyle: 'hidden',
    fullscreen: false,
    webPreferences: {
      nodeIntegration: true
    },
    icon: __dirname + 'Icon.icns',
    show: false
  });

  win.once('ready-to-show', () => {
    win.show();
  });

  // const tray = new Tray(path.join(__dirname, 'tray-icon.png'));

  // tray.setHighlightMode('always');
  // tray.setTitle('Test title');

  if (serve) {
    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`)
    });
    win.loadURL('http://localhost:4201');
  } else {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, 'dist/index.html'),
        protocol: 'file:',
        slashes: true
      })
    );
  }

  if (serve) {
    win.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

  app.on('activate', function() {
    win.show();
  });

  // Just hide window if was pressed close button in the top panel
  if (process.platform === 'darwin') {
    let forceQuit = false;
    app.on('before-quit', () => {
      forceQuit = true;
    });
    win.on('close', event => {
      if (!forceQuit) {
        event.preventDefault();
        // app.hide();
        win.hide();
      }
    });
  }
  initMenu();
}

try {
  app.setName('Pomodoro Cycle');
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

  ipcMain.on('show-window', () => {
    win.show();
  });
} catch (e) {
  // Catch Error
  // throw e;
}
