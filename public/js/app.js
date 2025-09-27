let btns = document.querySelector("#btns");
let nav = document.querySelector(".navbar");
let body = document.querySelector("body");
let bt = document.querySelectorAll(".btnCv");
let links = document.querySelectorAll("a");
let spans = document.querySelectorAll("span");
let lists = document.querySelectorAll("li");
let skils = document.querySelectorAll("i");
let boxs = document.querySelectorAll(".boxx");
let head = document.querySelectorAll("h2");
let para = document.querySelectorAll("p");
let bos = document.querySelectorAll(".box");
let inp = document.querySelectorAll("input");
let text = document.querySelector("textarea");
let copy = document.querySelector(".copyright");
let card = document.querySelectorAll(".hobby-card");

//  Theme color changer on "Hire Me" button click
btns.addEventListener("click", () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let colorRd = `rgb(${red}, ${green}, ${blue})`;

  // Calculate brightness to choose text color
  let brightness = (0.299 * red) + (0.587 * green) + (0.114 * blue);
  let textColor = brightness > 128 ? "black" : "white";

  // Apply colors
  nav.style.backgroundColor = colorRd;
   nav.style.borderBottom = `2px solid ${textColor}`;
  nav.style.color = textColor;

  body.style.setProperty("background-color", colorRd, "important");
  body.style.color = textColor;

  card.forEach(cards => {
    cards.style.color = textColor;
   cards.style.backgroundColor = colorRd;
   cards.style.border = `2px solid ${textColor}`;
    cards.style.boxShadow = `0 0 5px ${textColor}`;
    

  });
  links.forEach(link => link.style.color = textColor);
  lists.forEach(list => list.style.color = textColor);
  skils.forEach(i => i.style.color = textColor);
  head.forEach(h => h.style.color = textColor);
  spans.forEach(span => span.style.color = brightness > 128 ? "white" : "black");
  para.forEach(p => p.style.color = brightness > 128 ? "white" : "black");

  boxs.forEach(boxx => {
    boxx.style.backgroundColor = colorRd;
    boxx.style.color = textColor;
    boxx.style.border = `2px solid ${textColor}`;
    boxx.style.boxShadow = `0 0 5px ${textColor}`;

  });

  bos.forEach(b => {
    b.style.border = `2px solid ${textColor}`;
    b.style.boxShadow = `0 0 5px ${textColor}`;
  });

  inp.forEach(input => {
    input.style.backgroundColor = colorRd;
    input.style.color = textColor;
    input.style.border = `2px solid ${textColor}`;
    input.style.boxShadow = `0 0 5px ${textColor}`;
  });

  text.style.backgroundColor = colorRd;
  text.style.color = textColor;
  text.style.border = `2px solid ${textColor}`;
  text.style.boxShadow = `0 0 5px ${textColor}`;

  bt.forEach(button => {
    button.style.backgroundColor = colorRd;
    button.style.color = textColor;
    button.style.border = `2px solid ${textColor}`;
    button.style.boxShadow = `0 0 5px ${textColor}`;
  });
  copy.style.backgroundColor = colorRd;
  copy.style.color = textColor;
   copy.style.borderTop = `2px solid ${textColor}`;
    copy.style.boxShadow = `0 0 5px ${textColor}`;
});


let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


const form = document.querySelector("#contactForm");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting by default

  // Get form field values
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  // Basic validation
  if (name === "" || email === "" || message === "") {
    alert("⚠️ Please fill in all the fields before submitting.");
    return;
  }
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert(" Please enter a valid email address.");
    return;
  }
  alert("Thank you for contacting me!");
  //  reset the form
  form.reset();
});

