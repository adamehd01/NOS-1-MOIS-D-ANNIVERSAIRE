// animation d'apparition de la galerie au scroll
const figs = document.querySelectorAll('#grid figure');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('show');
  });
}, { threshold: 0.2 });
figs.forEach(f => obs.observe(f));

// jeu "Je t'aime"
let progress = 0;
const box = document.getElementById('gameBox');
const btn = document.getElementById('loveBtn');
const fill = document.getElementById('progressFill');
const label = document.getElementById('progressLabel');

function moveBtn() {
  const boxRect = box.getBoundingClientRect();
  const btnW = btn.offsetWidth;
  const btnH = btn.offsetHeight;
  const maxX = Math.max(boxRect.width - btnW - 20, 20);
  const maxY = Math.max(boxRect.height - btnH - 20, 20);
  const x = Math.random() * maxX + 10;
  const y = Math.random() * maxY + 10;
  btn.style.left = x + btnW / 2 + 'px';
  btn.style.top = y + btnH / 2 + 'px';
}

function loveClick() {
  if (progress >= 100) return;
  progress = Math.min(progress + 10, 100);
  fill.style.width = progress + '%';
  label.textContent = progress + '%';
  if (progress < 100) {
    moveBtn();
  } else {
    btn.textContent = '❤️';
    btn.style.left = '50%';
    btn.style.top = '50%';
    btn.style.transform = 'translate(-50%,-50%) scale(2.4)';
    btn.style.transition = 'transform 0.8s ease';
    setTimeout(() => {
      document.getElementById('final').scrollIntoView({ behavior: 'smooth' });
    }, 700);
  }
}
