import app from "app";
import BrowserWindow from "browser-window";
import Elekiter from "elekiter";

const elekiter = new Elekiter();

app.on("ready", () => {
    const mainWindow = new BrowserWindow({width: 500, height: 500});
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    if (process.env.NODE_ENV === "develop") {
        mainWindow.openDevTools();
    }
});

elekiter.get("run-server", (req, res) => {
    setTimeout(() => res.ok(), 1000);
});
