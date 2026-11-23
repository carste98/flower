const bloomButton = document.getElementById("bloomButton");
const petals = document.getElementById("petals");
const bouquet = document.querySelector(".bouquet");

const palette = ["#f95f88", "#ff9a71", "#f2c15d", "#ffd9e4", "#c2284f", "#f7b2c6"];

function createPetal() {
  const petal = document.createElement("span");
  petal.className = "petal";

  const left = Math.random() * window.innerWidth;
  const drift = (Math.random() * 160) - 80;
  const duration = 2.8 + Math.random() * 2.2;
  const size = 10 + Math.random() * 10;

  petal.style.left = `${left}px`;
  petal.style.background = palette[Math.floor(Math.random() * palette.length)];
  petal.style.setProperty("--x", `${Math.random() * 50 - 25}px`);
  petal.style.setProperty("--swing", `${drift}px`);
  petal.style.setProperty("--fall", `${duration}s`);
  petal.style.width = `${size}px`;
  petal.style.height = `${size}px`;

  petals.appendChild(petal);
  petal.addEventListener("animationend", () => petal.remove());
}

function burstPetals(count = 34, pace = 55) {
  for (let i = 0; i < count; i += 1) {
    setTimeout(createPetal, i * pace);
  }
}

bloomButton.addEventListener("click", () => {
  bouquet.classList.remove("bloom");
  void bouquet.offsetWidth;
  bouquet.classList.add("bloom");
  burstPetals(34, 45);
  setTimeout(() => burstPetals(14, 70), 420);
});

// Launch with a soft opening effect.
setTimeout(() => burstPetals(20, 65), 450);
