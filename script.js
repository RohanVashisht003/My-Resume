var mainNavigationMenu = document.querySelectorAll(".nav-menu a");

var interval;
for (var i = 0; i < mainNavigationMenu.length; i++) {
  mainNavigationMenu[i].addEventListener("click", function (event) {
    event.preventDefault();

    var targetSectionID = this.textContent.trim().toLowerCase();
    console.log(this.textContent);

    var targetSection = document.getElementById(targetSectionID);
    console.log(targetSection);

    interval = setInterval(function () {
      scrollVertically(targetSection);
    }, 20);
  });
}

function scrollVertically(targetSection) {
  var targetSectionCoordinates = targetSection.getBoundingClientRect();
  console.log(targetSectionCoordinates.y);
  if (targetSectionCoordinates.y <= 0) {
    clearInterval(interval);
    return;
  }
  window.scrollBy(0, 20);
}




// -------------------skill section-------------------
var progressBars = document.querySelectorAll(".skill-progress > div");

function initialiseBars(bar) {
  // bar.setAttribute("data-value", false);
  bar.style.width = 0 + "%";
}

for (var bar of progressBars) {
  initialiseBars(bar);
}

function fillBars(bar) {
  var currentWidth = 0;
  var targetWidth = bar.getAttribute("data-value");
  console.log(targetWidth);
  var interval = setInterval(function () {
    // console.log(`targetWidth ${targetWidth} currentWidth ${currentWidth}` );
    if (currentWidth >= targetWidth) {
      console.log("hello");
      clearInterval(interval);


      return;
    }
    currentWidth++;
    // console.log(currentWidth);
    bar.style.width = currentWidth + "%";
  }, 5);
}

function checkScroll() {
  for (let bar of progressBars) {
    var barCoordinates = bar.getBoundingClientRect();
    if (
      bar.getAttribute("data-visited") == "false" &&
      barCoordinates.top <= window.innerHeight - barCoordinates.height
    ) {
      bar.setAttribute("data-visited", true);
      fillBars(bar);
    } else if (barCoordinates.top > window.innerHeight) {
      bar.setAttribute("data-visited", false);
      initialiseBars(bar);
    }
  }
}

window.addEventListener("scroll", checkScroll);
