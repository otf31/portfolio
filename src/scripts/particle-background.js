export function initParticleBackground(canvas, cursorGlow) {
  if (!canvas || canvas.dataset.ready === 'true') return;
  canvas.dataset.ready = 'true';
  const context = canvas.getContext('2d', { alpha: true });
  if (!context) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pointer = { x: -1000, y: -1000, active: false, inside: false, lastMove: 0 };
  const pointerFadeMs = 2800;
  let particles = [];
  let width = 0;
  let height = 0;
  let raf = 0;
  let lastFrame = 0;
  const dpr = Math.min(window.devicePixelRatio || 1, 1.7);

  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(145, Math.max(55, Math.round((width * height) / 10500)));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      offsetX: 0,
      offsetY: 0,
      vx: (Math.random() - 0.5) * 1.4,
      vy: (Math.random() - 0.5) * 1.4,
      radius: Math.random() * 2.2 + 1.4,
      phase: Math.random() * Math.PI * 2,
    }));
    paint(performance.now(), true);
  };

  const paint = (time = 0, staticFrame = false) => {
    context.clearRect(0, 0, width, height);
    const dark = document.documentElement.classList.contains('dark');
    const rgb = dark ? '96, 193, 243' : '0, 99, 151';
    const linkDistance = Math.min(165, width * 0.15);
    const pointerAge = Math.max(0, time - pointer.lastMove);
    const pointerStrength = !pointer.active ? 0 : pointer.inside ? 1 : Math.max(0, 1 - pointerAge / pointerFadeMs);

    if (cursorGlow) cursorGlow.style.opacity = String(pointerStrength);
    if (pointer.active && pointerStrength === 0) {
      pointer.active = false;
      cursorGlow?.classList.remove('is-active');
    }

    if (pointerStrength > 0) {
      const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 210);
      glow.addColorStop(0, `rgba(${rgb}, ${(dark ? 0.08 : 0.06) * pointerStrength})`);
      glow.addColorStop(1, `rgba(${rgb}, 0)`);
      context.fillStyle = glow;
      context.fillRect(pointer.x - 210, pointer.y - 210, 420, 420);
    }

    particles.forEach((particle) => {
      if (!staticFrame && !reducedMotion) {
        particle.phase += 0.01;
        particle.x += particle.vx + Math.cos(particle.phase + time * 0.00045) * 0.65;
        particle.y += particle.vy + Math.sin(particle.phase + time * 0.00038) * 0.65;
        if (particle.x < -5) particle.x = width + 5;
        if (particle.x > width + 5) particle.x = -5;
        if (particle.y < -5) particle.y = height + 5;
        if (particle.y > height + 5) particle.y = -5;
      }

      const dx = particle.x - pointer.x;
      const dy = particle.y - pointer.y;
      const distance = Math.hypot(dx, dy);
      const radius = 195;
      const maxOffset = reducedMotion ? 6 : 23;
      const displacement = distance > 0 && distance < radius
        ? (Math.sin(Math.PI * distance / radius) * maxOffset * pointerStrength) / distance
        : 0;
      const response = reducedMotion ? 1 : displacement > 0 ? 0.36 : 0.12;
      particle.offsetX += (dx * displacement - particle.offsetX) * response;
      particle.offsetY += (dy * displacement - particle.offsetY) * response;
    });

    particles.forEach((particle, index) => {
      const x = particle.x + particle.offsetX;
      const y = particle.y + particle.offsetY;
      context.beginPath();
      context.arc(x, y, particle.radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(${rgb}, ${0.62 + 0.28 * (0.5 + 0.5 * Math.sin(particle.phase + time * 0.001))})`;
      context.fill();

      for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
        const next = particles[nextIndex];
        const nextX = next.x + next.offsetX;
        const nextY = next.y + next.offsetY;
        const dx = nextX - x;
        const dy = nextY - y;
        const distance = Math.hypot(dx, dy);
        if (distance < linkDistance) {
          context.beginPath();
          context.moveTo(x, y);
          context.lineTo(nextX, nextY);
          context.strokeStyle = `rgba(${rgb}, ${(1 - distance / linkDistance) * (dark ? 0.28 : 0.24)})`;
          context.lineWidth = 0.9;
          context.stroke();
        }
      }
    });

    if (pointerStrength > 0) {
      context.beginPath();
      context.arc(pointer.x, pointer.y, 11, 0, Math.PI * 2);
      context.strokeStyle = `rgba(${rgb}, ${(dark ? 0.25 : 0.2) * pointerStrength})`;
      context.lineWidth = 1.4;
      context.stroke();
      particles.forEach((particle) => {
        const x = particle.x + particle.offsetX;
        const y = particle.y + particle.offsetY;
        const distance = Math.hypot(pointer.x - x, pointer.y - y);
        if (distance < 190) {
          context.beginPath();
          context.moveTo(pointer.x, pointer.y);
          context.lineTo(x, y);
          context.strokeStyle = `rgba(${rgb}, ${(1 - distance / 190) * 0.22 * pointerStrength})`;
          context.lineWidth = 1.15;
          context.stroke();
        }
      });
    }
  };

  const tick = (time) => {
    if (time - lastFrame > 30) {
      paint(time);
      lastFrame = time;
    }
    if (!reducedMotion || (pointer.active && !pointer.inside)) raf = requestAnimationFrame(tick);
    else raf = 0;
  };

  window.addEventListener('pointermove', (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
    pointer.inside = true;
    pointer.lastMove = performance.now();
    if (cursorGlow) {
      cursorGlow.style.left = `${pointer.x}px`;
      cursorGlow.style.top = `${pointer.y}px`;
      cursorGlow.classList.add('is-active');
    }
    if (reducedMotion) paint(pointer.lastMove, true);
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', () => {
    pointer.inside = false;
    pointer.lastMove = performance.now();
    if (reducedMotion && !raf) raf = requestAnimationFrame(tick);
  });
  window.addEventListener('resize', resize, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(raf);
      raf = 0;
    } else if (!raf && (!reducedMotion || (pointer.active && !pointer.inside))) {
      raf = requestAnimationFrame(tick);
    }
  });
  resize();
  if (!reducedMotion) raf = requestAnimationFrame(tick);
}
