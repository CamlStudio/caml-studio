import { dialog } from "electron";

export default function error(error: any) {
    if (typeof error === "object" && error !== null) {
        dialog.showErrorBox("Caml Studio", error);
    } else {
        dialog.showErrorBox("Caml Studio", "Null / unknown error");
    }
}
