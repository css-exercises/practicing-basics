var backdrop = document.querySelector(".backdrop")
var modal = document.querySelector(".modal")
var modalNoButton = document.querySelector(".modal__action--negative")
var selectPlanButton = document.querySelectorAll(".plan button")
var toggleButton = document.querySelector(".toggle-button")
var mobileNav = document.querySelector(".mobile-nav")

for (var i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", function () {
    modal.classList.add("open")
    backdrop.classList.add("open")
  })
}

backdrop.addEventListener("click", function () {
  mobileNav.style.display = "none"
  closeModal()
})

modalNoButton.addEventListener("click", closeModal)

toggleButton.addEventListener("click", function () {
  mobileNav.style.display = "block"
  backdrop.style.display = "block"
})

function closeModal() {
  modal.classList.remove("open")
  backdrop.classList.remove("open")
}
