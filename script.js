const currencyFirst = document.getElementById("currencyFirst");
const currencySecond = document.getElementById("currencySecond");
const count = document.getElementById("count");
const span = document.getElementById("equal");
const exchangeRate = document.getElementById("exchangeRate");
const themeToggle = document.getElementById("theme-toggle");
updateRate();
function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/2090956a9911300fe69543f5/latest/${currencyFirst.value}`
  )
    .then((resolve) => resolve.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecond.value];

      exchangeRate.textContent = `1 ${currencyFirst.value} = ${rate} ${currencySecond.value}`;
      span.textContent = (count.value * rate).toFixed(2);
    })
    .catch((error) => {
      console.error("Döviz kuru alınırken hata oluştu:", error);
    });
}

currencyFirst.addEventListener("change", updateRate);
currencySecond.addEventListener("change", updateRate);
count.addEventListener("input", updateRate);

const temaDegistir = document.getElementById("theme-toggle");
temaDegistir.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    temaDegistir.textContent = "Dark Mode";
  } else {
    temaDegistir.textContent = "Light Mode";
  }
});
