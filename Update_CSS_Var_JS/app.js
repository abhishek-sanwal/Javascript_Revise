console.log("Javascript is running.");

const handleInput = function (event) {
  console.log(this);

  const root = document.querySelector(":root");
  const rs = getComputedStyle(root);
  const unit = this.dataset.unit || "";
  //   console.log(
  //     this.name,
  //     "value before",
  //     document.documentElement.getPropertyValue(`--${this.name}`)
  //   );

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + unit
  );

  //   console.log(this.name, "value after", rs.getPropertyValue(`--${this.name}`));
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("Dom loaded");

  document.querySelectorAll("input").forEach((node) => {
    node.addEventListener("input", handleInput);
  });
});
