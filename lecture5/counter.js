if (!localStorage.getItem("counter")) {
  localStorage.setItem("counter", 0);
}

function count() {
  let counter = localStorage.getItem("counter");
  counter++;
  document.querySelector("h1").textContent = counter;
  localStorage.setItem("counter", counter);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("h1").textContent = localStorage.getItem("counter");
  document.querySelector("button").addEventListener("click", () => count());

  let resetButton = document.querySelector("#reset");
  resetButton.addEventListener("click", () => {
    document.querySelector("h1").textContent = localStorage.setItem(
      "counter",
      0
    );
  });
});
