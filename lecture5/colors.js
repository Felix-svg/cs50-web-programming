document.addEventListener("DOMContentLoaded", () => {
  // const h1 = document.querySelector("#hello")
  // const redButton = document.querySelector("#red")
  // const blueButton = document.querySelector("#blue")
  // const greenButton = document.querySelector("#green")

  // redButton.addEventListener("click", () => h1.style.color="red")
  // blueButton.addEventListener("click", () => h1.style.color="blue")
  // greenButton.addEventListener("click", () => h1.style.color="green")

  //   document.querySelectorAll("button").forEach((button) => {
  //     button.addEventListener("click", () => {
  //       document.querySelector("#hello").style.color = button.dataset.color
  //     });
  //   });

  document.querySelector("select").addEventListener("onchange", function () {
    document.querySelector("#hello").style.color = this.value;
  });
});
