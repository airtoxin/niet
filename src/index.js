import app from "app";
import BrowserWindow from "browser-window";

app.on("ready", () => {
    const mainWindow = new BrowserWindow({width: 500, height: 500});
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    if (process.env.NODE_ENV === "develop") {
        mainWindow.openDevTools();
    }
});
