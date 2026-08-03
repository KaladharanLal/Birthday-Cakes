const button = document.querySelector("#celebrate");
const confettiContainer = document.querySelector("#confetti");
const glitterContainer = document.querySelector("#glitter");
const colors = ["#ff5d91", "#ffd36c", "#b797ff", "#75e6da", "#ffffff"];

const defaultButtonText = 'Make a wish <span>✦</span>';
const successButtonText = 'Your wish is in the stars <span>✦</span>';

function createConfettiPiece() {
  const piece = document.createElement("i");
  piece.className = "confetti";

  piece.style.left = `${Math.random() * 100}vw`;
  piece.style.top = `${-10 - Math.random() * 30}px`;
  piece.style.background = colors[Math.floor(Math.random() * colors.length)];
  piece.style.setProperty("--drift", `${-160 + Math.random() * 320}px`);
  piece.style.animationDelay = `${Math.random() * 0.45}s`;
  piece.style.transform = `rotate(${Math.random() * 180}deg)`;

  piece.addEventListener("animationend", () => piece.remove());

  return piece;
}

function celebrate() {
  for (let i = 0; i < 100; i += 1) {
    confettiContainer.appendChild(createConfettiPiece());
  }

  button.innerHTML = successButtonText;

  setTimeout(() => {
    button.innerHTML = defaultButtonText;
  }, 3200);
}

if (button) {
  button.addEventListener("click", celebrate);
}

for (let i = 0; i < 55; i += 1) {
  const speck = document.createElement("i");
  speck.className = "glitter-piece";
  speck.style.left = `${Math.random() * 100}vw`;
  speck.style.setProperty("--fall-time", `${5 + Math.random() * 7}s`);
  speck.style.setProperty("--fall-delay", `${-Math.random() * 12}s`);
  speck.style.setProperty("--glitter-scale", `${0.3 + Math.random() * 1.2}`);
  const shade = Math.floor(Math.random() * 4);
  if (shade === 1) speck.style.background = "radial-gradient(circle, #fff, red, transparent 67%)";
  if (shade === 2) speck.style.background = "radial-gradient(circle, #fff, violet, transparent 67%)";
  if (shade === 3) speck.style.background = "radial-gradient(circle, #fff, magenta, transparent 67%)";

  glitterContainer.appendChild(speck);
}
