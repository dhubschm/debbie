let currentStep = 0;

const steps = [
  {
    title: "Step 1 — Preliminary Design Review",
    desc: "Initial design review covering robot concept, weapon system, and component selection.",
    img: null,
    embed: "https://docs.google.com/presentation/d/1JJFm5Kvxa91Een1PfXsiuqzAxxnTXX7laExrPorpkIw/embed?start=false&loop=false&delayms=3000"
  },
  {
    title: "Step 2 — Initial Circuit Design",
    desc: "Fill in your description here.",
    img: "images/debbie_circuit.png",
    embed: null
  },
  {
    title: "Step 3 — Electronics Functionality Test",
    desc: "Fill in your description here.",
    img: null,
    embed: "https://drive.google.com/file/d/1jXLIljbv-Yfp3276jZB7SZtWAB1hHQei/preview"
  },
  {
    title: "Step 4 — Final Design Review + Final CAD",
    desc: "Fill in your description here.",
    img: null,
    embed: "https://docs.google.com/presentation/d/1fn0OKoky9zYJQWtJR_30QbjFXRFl8WWe7rBi4q2nqjg/embed?start=false&loop=false&delayms=3000"
  },
  {
    title: "Step 5 — Assembly + Testing",
    desc: "Fill in your description here.",
    img: null,
    embed: "https://drive.google.com/file/d/1dVWU1xVvbMZn0xP7XLR8n7QKwReNDmT-/preview"
  },
  {
    title: "Step 6 — Spontaneous Engineering on Competition Day",
    desc: "Fill in your description here.",
    img: ["images/dom_vandana_debbie.png", "images/dom_akshay_solder.png", "images/dom_akshay_solder2.png", "images/ian_akshay_drill.png", "images/debbie_team.png", "images/pizza_time.png"],
    embed: null
  },
  {
    title: "Step 7 — Competition Day Battle 1",
    desc: "Fill in your description here.",
    img: null,
    embed: "https://drive.google.com/file/d/1AAd4Lxvr7WYDibTFAAu1CESQyPYKgP7E/preview"
  },
  {
    title: "Step 8 — Competition Day Battle 2",
    desc: "Fill in your description here.",
    img: null,
    embed: "https://drive.google.com/file/d/1_9b298Zj5gHKHl_8wMNQvFCrj2PFKdUb/preview"
  }
];

function openStep(index) {
  currentStep = index;
  const step = steps[index];
  document.getElementById('modalTitle').textContent = step.title;
  document.getElementById('modalDesc').textContent = step.desc;

  const imgEl = document.getElementById('modalImg');
  const imgGallery = document.getElementById('modalGallery');
  const embedEl = document.getElementById('modalEmbed');

  if (step.embed) {
    embedEl.style.display = 'block';
    embedEl.src = step.embed;
  } else {
    embedEl.style.display = 'none';
    embedEl.src = '';
  }

  if (step.img) {
    if (Array.isArray(step.img)) {
      imgEl.style.display = 'none';
      imgGallery.style.display = 'flex';
      imgGallery.innerHTML = step.img.map(src =>
        `<img src="${src}" class="gallery-img">`
      ).join('');
    } else {
      imgGallery.style.display = 'none';
      imgGallery.innerHTML = '';
      imgEl.style.display = 'block';
      imgEl.src = step.img;
    }
  } else {
    imgEl.style.display = 'none';
    imgGallery.style.display = 'none';
    imgGallery.innerHTML = '';
  }

  document.getElementById('stepOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function navigateStep(direction) {
  const newIndex = currentStep + direction;
  if (newIndex >= 0 && newIndex < steps.length) {
    openStep(newIndex);
  }
}

function closeStep() {
  document.getElementById('stepOverlay').classList.remove('open');
  document.body.style.overflow = '';
  document.getElementById('modalEmbed').src = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeStep();
  if (e.key === 'ArrowRight') navigateStep(1);
  if (e.key === 'ArrowLeft') navigateStep(-1);
});