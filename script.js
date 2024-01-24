let container = document.getElementById("about");
let para = document.getElementById("para");
let navlinks = document.querySelectorAll(".inner-nav");
let nameSpan = document.createElement("span");
nameSpan.classList.add("nameElement");
let nameSpan2 = document.createElement("span");
let nameOfUser = "Nisarg";
let newText = nameSpan.innerText;
let paragraph = "Hi! My name is ";
let secondPara = " and I'm a Full Stack Developer.";
nameSpan.style.color = "red";

console.log(para);
let secondcounter = 1;
let thirdcounter = 1;
let counter = 1;

let interval1 = setInterval(() => {
  paragraph.slice(0, counter);
  para.innerText = paragraph.slice(0, counter);
  counter++;

  if (counter > paragraph.length) {
    clearInterval(interval1);
    para.appendChild(nameSpan);

    let interval2 = setInterval(() => {
      nameOfUser.slice(0, secondcounter);
      nameSpan.innerText = nameOfUser.slice(0, secondcounter);
      secondcounter++;

      if (secondcounter > nameOfUser.length) {
        clearInterval(interval2);
        const interval3 = setInterval(() => {
          para.appendChild(nameSpan2);
          nameSpan2.setAttribute("id", "myDetails");
          nameSpan2.innerText = secondPara.slice(0, thirdcounter);
          thirdcounter++;
          if (thirdcounter > secondPara.length) {
            clearInterval(interval3);
            console.log("Hi");
            return;
          }
        }, 60);
      }
    }, 60);
  }
}, 30);

// Script for customised cursor

let mouseCursor = document.querySelector(".cursor");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

para.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow");
  para.classList.add("para-changed");
});

para.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow");
});

navlinks.forEach((links) => {
  links.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    links.classList.add("hovered-Changed");
  });

  links.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    links.classList.remove("hovered-Changed");
  });
});
