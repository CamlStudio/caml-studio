import { BrowserWindow, clipboard, MenuItem } from "electron";
import { MenuItemConstructorOptions } from "electron/main";

export default function help(browserWindow: BrowserWindow): MenuItemConstructorOptions | MenuItem {
    return {
        role: "help",
        submenu: [
            {
                label: "About",
                click: () => {
                    const { dialog } = require("electron");

                    const options = {
                        type: "info",
                        buttons: ["OK", "Copy"],
                        title: "Caml Studio",
                        message: "Caml Studio",
                        detail: `
Electron: ${process.versions["electron"]}
Chrome: ${process.versions["chrome"]}
Node.js: ${process.versions["node"]}
V8: ${process.versions["v8"]}
                        `
                    };

                    dialog.showMessageBox(browserWindow, options).then(value => {
                        if (value.response === 0) {
                            clipboard.writeText(options.detail);
                        }
                    });
                },
            },
            {
                role: "toggleDevTools"
            },
        ],
    };
}
