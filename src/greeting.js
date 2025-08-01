// greeting.js
import odinImage from "./odin.png";

export const greeting = "Hello, Odinite!";

export const Homepage = ()=>{
    const content = document.querySelector("#content");
    const image = document.createElement("img");
    const h1 = document.createElement("h1");
    const para = document.createElement("p");
    h1.textContent = "Our Restaurant";
    para.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolorum rem dolores minus. Eius aut dolorum provident aliquam corporis tenetur aspernatur soluta sunt neque, consequatur est temporibus! Quaerat, aspernatur accusantium.";
    image.src = odinImage;
    image.alt = "Odin Logo";
    content.append(image, h1, para);
}