const button = document.querySelector('#celebrate');
const confetti = document.querySelector('#confetti');
const colors = ['#ff5d91', '#ffd36c', '#b797ff', '#75e6da', '#ffffff'];

function celebrate() {
  for (let i = 0; i < 100; i++) {
    const bit = document.createElement('i');
    bit.className = 'confetti';
    bit.style.left = `${Math.random() * 100}vw`;
    bit.style.top = `${-10 - Math.random() * 30}px`;
    bit.style.background = colors[Math.floor(Math.random() * colors.length)];
    bit.style.setProperty('--drift', `${-160 + Math.random() * 320}px`);
    bit.style.animationDelay = `${Math.random() * .45}s`;
    bit.style.transform = `rotate(${Math.random() * 180}deg)`;
    confetti.appendChild(bit);
    bit.addEventListener('animationend', () => bit.remove());
  }
  button.innerHTML = 'Your wish is in the stars ✨';
  setTimeout(() => { button.innerHTML = 'Make a wish <span>✦</span>'; }, 3200);
}
button.addEventListener('click', celebrate);
