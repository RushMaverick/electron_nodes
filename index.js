const { app, BrowserWindow } = require('electron')
const path = require('path');


const createWindow = () => {
	const win = new BrowserWindow({
	  width: 800,
	  height: 600,
	  webPreferences: {
		preload: path.join(__dirname, 'preload.js')
	  }
	})
  
	win.loadFile('index.html')
  }

  app.whenReady().then(() => {
	try {createWindow();}
	catch (error) {
		console.error("An error occurred: ", error.message);
	}
	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	  })
  })

  app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
  })