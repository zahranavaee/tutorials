function makeActive(img) {
  var element = document.getElementById(img);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
