// Canvas grid background with subtle parallax and animated nodes
(function initAnimatedGrid() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const gridSize = 32;
  const moveSpeed = 0.12;
  const nodePulse = 0.5;
  const linesOpacity = 0.10; // lighter grid lines
  const nodesOpacity = 0.55; // subtler nodes
  const color = 'rgba(255,255,255,';

  let offsetX = 0;
  let offsetY = 0;
  let lastTime = 0;

  function draw(time) {
    const dt = Math.min(32, time - lastTime) || 16;
    lastTime = time;
    offsetX += moveSpeed * dt * 0.02;
    offsetY += moveSpeed * dt * 0.015;

    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 1;

    // Draw grid lines
    ctx.strokeStyle = `${color}${linesOpacity})`;
    ctx.beginPath();
    for (let x = -((offsetX % gridSize)); x < width; x += gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }
    for (let y = -((offsetY % gridSize)); y < height; y += gridSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();

    // Draw pulsing nodes at intersections (sparser)
    const t = time * 0.001;
    for (let x = -((offsetX % gridSize)); x < width; x += gridSize * 2) {
      for (let y = -((offsetY % gridSize)); y < height; y += gridSize * 2) {
        const pulse = (Math.sin((x + y) * 0.01 + t * 2) * 0.5 + 0.5) * nodePulse + 0.1;
        ctx.fillStyle = `${color}${nodesOpacity * pulse})`;
        ctx.beginPath();
        ctx.arc(x, y, 1.2 + pulse * 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    requestAnimationFrame(draw);
  }

  function onResize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', onResize);
  requestAnimationFrame(draw);
})();

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.querySelector('.nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => nav.classList.toggle('open'));
}

// Inject year
document.getElementById('year').textContent = new Date().getFullYear();

// Data-driven rendering
function icon(name) {
  return `<iconify-icon icon="${name}" width="18" height="18"></iconify-icon>`;
}

function renderSocials(links) {
  const socialContainer = document.getElementById('social-links');
  if (!socialContainer) return;
  socialContainer.innerHTML = links
    .map(
      (s) => `<a class="btn btn-ghost" href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}">
        ${icon(s.icon)}
        ${s.label}
      </a>`
    )
    .join('');
}

function renderExperience(experiences) {
  const container = document.getElementById('experience-grid');
  if (!container) return;
  container.innerHTML = experiences
    .map(
      (e) => `<article class="card experience-item">
        <div class="item-head">
          <div class="item-title">${e.roleShort || e.role} · ${e.company}</div>
          <div class="item-meta">${e.period}</div>
        </div>
        <div class="muted">${e.location}</div>
        <p>${e.summary || ''}</p>
        ${e.tools?.length ? `<div class="tags">${e.tools.map((t) => `<span class="tag">${t}</span>`).join('')}</div>` : ''}
      </article>`
    )
    .join('');
}



function renderSkills(skills) {
  const container = document.getElementById('skills-grid');
  if (!container) return;
  container.innerHTML = skills
    .map(
      (s) => `<div class="skill-item" title="${s.label}">${icon(s.icon)} <span>${s.label}</span></div>`
    )
    .join('');
}

function renderEducation(education) {
  const container = document.getElementById('education-list');
  if (!container) return;
  container.innerHTML = education
    .map(
      (ed) => `<div class="timeline-item card">
        <div class="timeline-year">${ed.period}</div>
        <div>
          <div class="item-title">${ed.degree}</div>
          <div class="muted">${ed.school}${ed.location ? ` · ${ed.location}` : ''}</div>
        </div>
      </div>`
    )
    .join('');
}

function hydrateHero(profile) {
  document.getElementById('hero-name').textContent = profile.name;
  document.getElementById('hero-title').textContent = profile.title;
  document.getElementById('hero-summary').textContent = profile.summary;
  document.getElementById('hero-eyebrow').textContent = profile.eyebrow;
  document.getElementById('contact-email').textContent = profile.email;
  document.getElementById('contact-email').href = `mailto:${profile.email}`;
  document.getElementById('contact-location').textContent = profile.location;
  document.getElementById('resume-link').href = profile.resumeHref || './ResumeSubham4.pdf';
  document.getElementById('cta-resume').href = profile.resumeHref || './ResumeSubham4.pdf';
}

// Tags styling helpers
const style = document.createElement('style');
style.textContent = `.tags { display:flex; flex-wrap:wrap; gap:8px; margin-top: 12px; }
.tag { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); padding: 6px 8px; border-radius: 999px; font-size: 12px; color: var(--muted); }`;
document.head.appendChild(style);

// Load data from data.js (global PORTFOLIO_DATA)
window.addEventListener('DOMContentLoaded', () => {
  if (!window.PORTFOLIO_DATA) return;
  const d = window.PORTFOLIO_DATA;
  hydrateHero(d.profile);
  renderSocials(d.socials);
  renderExperience(d.experience);

  renderSkills(d.skills);
  renderEducation(d.education);
});

