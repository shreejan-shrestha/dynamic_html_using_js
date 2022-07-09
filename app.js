const body = document.body;
const html = document.html;

const strong = document.createElement("strong");
strong.innerText = "CATCH 'EM ALL!";
strong.style.color = "#385BA9";

const italics = document.createElement("i");
italics.append(strong);

const button = document.createElement("button");
button.innerText = "Explore";
button.style.fontFamily = "Calibri";
button.style.fontStyle = "Italic";
button.style.color = "#FFCC01";
button.style.height = "20px";
button.style.backgroundColor = "#385BA9";
button.style.border = "None";
button.style.borderRadius = "10px";
button.onmouseenter = ()=>{
    button.style.fontFamily = "Calibri";
    button.style.fontStyle = "Italic";
    button.style.color = "#385BA9";
    button.style.backgroundColor = "white";
    button.style.border = "None";
    button.style.borderRadius = "10px";
    button.style.opacity = "0.8";
    button.style.transition = "0.3s";
};
button.onmouseleave = ()=>{
    button.style.fontFamily = "Calibri";
    button.style.fontStyle = "Italic";
    button.style.color = "#FFCC01";
    button.style.backgroundColor = "#385BA9";
    button.style.border = "None";
    button.style.borderRadius = "10px";
    button.style.opacity = "1";
    button.style.transition = "0.3s";
}
button.onclick = ()=>{
    window.open("https://www.pokemon.com", "_blank");
}

const br = document.createElement("br");

const img = document.createElement("img");
img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png");
img.style.height = "50px";
img.style.width = "130px";

const span = document.createElement("span");
// span.innerHTML = "<i><Strong>HOLA AMIGO</Strong></i>";
span.append(italics);

body.style.height = "80vh";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems ="center";
body.style.background = "#FFCC01";

// body.style.cssText = 'display:flex, flex-direction: column';

body.append(img);
body.append(span);
body.append(br);
body.append(button);

//For reference

// const anchorTag = document.createElement("a");
// anchorTag.innerHTML = "Click here";
// anchorTag.setAttribute('href', 'https://www.google.com');









