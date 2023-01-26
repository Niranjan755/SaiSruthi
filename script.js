var carousel = document.getElementById("carousel");
var images = carousel.getElementsByTagName("img");
var current = 0;

function next() {
  images[current].style.display = "none";
  current = (current + 1) % images.length;
  images[current].style.display = "block";
}

setInterval(next, 2000);
