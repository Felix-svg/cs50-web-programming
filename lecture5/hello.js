document.addEventListener("DOMContentLoaded", () => {
    let myForm = document.querySelector("form")
    myForm.addEventListener("submit", () => {
        let inputValue = document.getElementById("name").value
        alert(`Details submitted by ${inputValue}`)
    })
})