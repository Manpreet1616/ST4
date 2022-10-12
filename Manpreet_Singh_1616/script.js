const countDownDate = new Date("Oct 12 2022 13:30:00").getTime();

const time = setInterval(() => {
  // *Get today's date and time
  const now = new Date().getTime();

  // *Find the distance between now and the count down date
  const distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element
  let timer = document.getElementById("timer");
  timer.innerHTML =
    // days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  hours + "h " + minutes + "m " + seconds + "s ";
  //   timer.style.color = "red";
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(time);
    document.getElementById("timer").innerHTML = "Test Ended";

    document.getElementById("aRadio").disabled = true;
    document.getElementById("bRadio").disabled = true;
    document.getElementById("cRadio").disabled = true;
    document.getElementById("dRadio").disabled = true;

    document.getElementById("a1Radio").disabled = true;
    document.getElementById("b1Radio").disabled = true;
    document.getElementById("c1Radio").disabled = true;
    document.getElementById("d1Radio").disabled = true;

    document.getElementById("a2Radio").disabled = true;
    document.getElementById("b2Radio").disabled = true;
    document.getElementById("c2Radio").disabled = true;
    document.getElementById("d2Radio").disabled = true;

    document.getElementById("a3Radio").disabled = true;
    document.getElementById("b3Radio").disabled = true;
    document.getElementById("c3Radio").disabled = true;
    document.getElementById("d3Radio").disabled = true;

    document.getElementById("a4Radio").disabled = true;
    document.getElementById("b4Radio").disabled = true;
    document.getElementById("c4Radio").disabled = true;
    document.getElementById("d4Radio").disabled = true;

    document.getElementById("a5Radio").disabled = true;
    document.getElementById("b5Radio").disabled = true;
    document.getElementById("c5Radio").disabled = true;
    document.getElementById("d5Radio").disabled = true;

    document.getElementById("a6Radio").disabled = true;
    document.getElementById("b6Radio").disabled = true;
    document.getElementById("c6Radio").disabled = true;
    document.getElementById("d6Radio").disabled = true;

    document.getElementById("a7Radio").disabled = true;
    document.getElementById("b7Radio").disabled = true;
    document.getElementById("c7Radio").disabled = true;
    document.getElementById("d7Radio").disabled = true;

    document.getElementById("a8Radio").disabled = true;
    document.getElementById("b8Radio").disabled = true;
    document.getElementById("c8Radio").disabled = true;
    document.getElementById("d8Radio").disabled = true;

    document.getElementById("a9Radio").disabled = true;
    document.getElementById("b9Radio").disabled = true;
    document.getElementById("c9Radio").disabled = true;
    document.getElementById("d9Radio").disabled = true;

    alert("Your test has submited sucessfully");
  }
}, 1000);

function fun() {
  document.getElementById("aRadio").disabled = true;
  document.getElementById("bRadio").disabled = true;
  document.getElementById("cRadio").disabled = true;
  document.getElementById("dRadio").disabled = true;
}
function fun1() {
  document.getElementById("a1Radio").disabled = true;
  document.getElementById("b1Radio").disabled = true;
  document.getElementById("c1Radio").disabled = true;
  document.getElementById("d1Radio").disabled = true;
}
function fun2() {
  document.getElementById("a2Radio").disabled = true;
  document.getElementById("b2Radio").disabled = true;
  document.getElementById("c2Radio").disabled = true;
  document.getElementById("d2Radio").disabled = true;
}
function fun3() {
  document.getElementById("a3Radio").disabled = true;
  document.getElementById("b3Radio").disabled = true;
  document.getElementById("c3Radio").disabled = true;
  document.getElementById("d3Radio").disabled = true;
}
function fun4() {
  document.getElementById("a4Radio").disabled = true;
  document.getElementById("b4Radio").disabled = true;
  document.getElementById("c4Radio").disabled = true;
  document.getElementById("d4Radio").disabled = true;
}
function fun5() {
  document.getElementById("a5Radio").disabled = true;
  document.getElementById("b5Radio").disabled = true;
  document.getElementById("c5Radio").disabled = true;
  document.getElementById("d5Radio").disabled = true;
}
function fun6() {
  document.getElementById("a6Radio").disabled = true;
  document.getElementById("b6Radio").disabled = true;
  document.getElementById("c6Radio").disabled = true;
  document.getElementById("d6Radio").disabled = true;
}
function fun7() {
  document.getElementById("a7Radio").disabled = true;
  document.getElementById("b7Radio").disabled = true;
  document.getElementById("c7Radio").disabled = true;
  document.getElementById("d7Radio").disabled = true;
}
function fun8() {
  document.getElementById("a8Radio").disabled = true;
  document.getElementById("b8Radio").disabled = true;
  document.getElementById("c8Radio").disabled = true;
  document.getElementById("d8Radio").disabled = true;
}
function fun9() {
  document.getElementById("a9Radio").disabled = true;
  document.getElementById("b9Radio").disabled = true;
  document.getElementById("c9Radio").disabled = true;
  document.getElementById("d9Radio").disabled = true;
}

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
