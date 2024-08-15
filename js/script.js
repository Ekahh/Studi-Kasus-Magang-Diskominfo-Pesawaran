document.addEventListener("DOMContentLoaded", function () {
  const dropbtn = document.querySelector(".dropbtn");
  const dropdown = document.getElementById("myDropdown");

  dropbtn.addEventListener("click", function (e) {
    e.preventDefault();
    dropdown.classList.toggle("show");
  });

  window.addEventListener("click", function (e) {
    if (!e.target.matches(".dropbtn")) {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    }
  });
});
