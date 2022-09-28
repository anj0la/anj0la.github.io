button = document.getElementById("button");
year = document.getElementById("year");

button.addEventListener("click", () => {
  window.location.href = "https://linktr.ee/mathandcompscitutoring";
});

date = new Date();
current_year = date.getFullYear();
year.innerText = current_year;
