//  Running Javascript

const handleAudio = (event) => {
  // Attribute we are looking for
  const attr = "data-key";

  event.stopPropagation();
  let divNode, data;

  //   Keyboard event
  if (event.type === "keypress") {
    data = event.key.toUpperCase().charCodeAt(0);
    divNode = document.querySelector(`div[${attr}="${data}"]`);
  }
  //   It is click event
  else {
    divNode = event.currentTarget;
    data = divNode.dataset.key;
  }

  document.querySelector(`audio[${attr}="${data}"]`).play();
  divNode.classList.toggle("music");
  setTimeout(() => {
    divNode.classList.toggle("music");
  }, 1000);
};

// Add EventListeners
document.addEventListener("DOMContentLoaded", function () {
  console.log(
    "Press Any button from middle alphabetical line of Keyboard[A-L] or use mouse to click"
  );

  window.addEventListener("keypress", handleAudio);
  document
    .querySelectorAll(".drum")
    .forEach((node) => node.addEventListener("click", handleAudio));
});
