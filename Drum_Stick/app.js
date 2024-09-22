//  Running Javascript

// A function to remove music after transition gets completed
const removeMusic = (event) => {
  if (event.propertyName === "transform") {
    event.currentTarget.classList.remove("music");
    // divNode.classList.toggle("music");
  }
};

// Function to play associated audio with same data-key attribute and transition div
const handleMusic = (event) => {
  // Attribute we are looking for
  const attr = "data-key";

  let divNode, data;

  //   Keyboard event
  if (event.type === "keypress") {
    // Get key in upper case and then its ascii value

    data = event.key.toUpperCase().charCodeAt(0);

    // Find the div node
    divNode = document.querySelector(`div[${attr}="${data}"]`);
  }
  //   It is click event
  else if (event.type === "click") {
    console.log(this);
    divNode = event.currentTarget;
    data = divNode.dataset.key;
    console.log(divNode, data);
  }
  // Select associated audio tag
  const audio = document.querySelector(`audio[${attr}="${data}"]`);
  if (!audio) {
    console.log("Audio tag not found !!!");
  }
  if (!divNode) {
    console.log("Div Tag Not found.s");
  }
  // Because we want on each event it should restart from begin otherwise if it already playing it will not play again.
  audio.currentTime = 0;
  // Play audio
  audio.play();
  divNode.classList.add("music");
};

// Add EventListeners
document.addEventListener("DOMContentLoaded", function () {
  console.log(
    "Press Any button from middle alphabetical line of Keyboard[A-L] or use mouse to click"
  );

  window.addEventListener("keypress", handleMusic);
  document.querySelectorAll(".drum").forEach((node) => {
    node.addEventListener("click", handleMusic);
    node.addEventListener("transitionend", removeMusic);
  });
});
