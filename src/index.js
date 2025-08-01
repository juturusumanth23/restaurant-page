// src/index.js
import "./styles.css";
import { homepage } from "./homepage.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

export const content = document.querySelector("#content");
const buttons = document.querySelectorAll(".buttons");

const [homeBtn, menuBtn, contactBtn] = buttons;
homepage();

for (let i of [...buttons]) {
    i.addEventListener("click", shiftTab);
}
function shiftTab(e) {
    if(e.target == homeBtn) {
        homepage();
    }
    if(e.target == menuBtn) {
        menu();
    }
    if(e.target == contactBtn) {
        contact();
    }
}