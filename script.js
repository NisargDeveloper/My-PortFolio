document.addEventListener("DOMContentLoaded", () => {
  let para = document.getElementById("para");
  let navlinks = document.querySelectorAll(".inner-nav");

  let nameSpan = document.createElement("span");
  nameSpan.classList.add("nameElement");
  nameSpan.style.color = "red";

  let nameSpan2 = document.createElement("span");

  let nameOfUser = "Nisarg";
  let paragraph = "Hi! My name is ";
  let secondPara = " and I'm a Full Stack Developer.";

  // Function to animate text typing
  function typeText(target, text, callback, delay = 50) {
    let index = 0;
    let interval = setInterval(() => {
      target.innerText = text.slice(0, index);
      index++;
      if (index > text.length) {
        clearInterval(interval);
        if (callback) callback();
      }
    }, delay);
  }

  // Start text typing effect
  typeText(para, paragraph, () => {
    para.appendChild(nameSpan);
    typeText(nameSpan, nameOfUser, () => {
      para.appendChild(nameSpan2);
      nameSpan2.setAttribute("id", "myDetails");
      typeText(nameSpan2, secondPara, () => {
        console.log("Typing animation complete!");
      }, 60);
    }, 60);
  }, 30);

  // Smooth Custom Cursor with Scroll Support
  let mouseCursor = document.getElementById("cursor");

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  const cursorSize = 20; // Same as cursor width & height in CSS

  window.addEventListener("mousemove", (e) => {
    mouseX = e.pageX - cursorSize / 2; // Offset for centering cursor
    mouseY = e.pageY - cursorSize / 2;
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.2; // Smooth easing
    cursorY += (mouseY - cursorY) * 0.2;

    mouseCursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) scale(1)`;
    requestAnimationFrame(animateCursor);
  }

  animateCursor(); // Start smooth cursor movement

  // Add hover effects
  document.querySelectorAll(".inner-nav, #para").forEach((element) => {
    element.addEventListener("mouseover", () => {
      mouseCursor.classList.add("link-grow");
    });

    element.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("link-grow");
    });
  });
});
