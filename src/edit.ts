import { MenuItem } from "electron";
import { MenuItemConstructorOptions } from "electron/main";

export default function edit(): MenuItemConstructorOptions | MenuItem {
    return {
        role: "editMenu",
    };
}
