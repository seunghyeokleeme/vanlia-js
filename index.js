const title = document.querySelector("#title");

function handleResize() {
  console.log("I have been resized");
}

window.addEventListener("resize", handleResize);
