/**
 * Reviews: the slow, endless row.
 *
 * The HTML holds each review once, as a grid, and that is what shows without
 * JavaScript, under reduced motion and in print. With full motion this lays
 * them out in one row and adds copies of it, marked aria-hidden and inert, so
 * the row can loop without a gap and a screen reader still meets each review
 * once. Every copy moves left by its own width (`rv-marquee` in sections.css),
 * so the loop needs no measuring beyond how many copies fill the screen and
 * how long one lap takes at `SPEED`.
 *
 * Moving text must be possible to stop (WCAG 2.2.2), so there is a pause
 * button, and the row also stops under a mouse pointer, off screen and in a
 * background tab. The visitor's pause holds until they press play.
 */
import { motion, whileVisible } from './motion.js';

/** Pixels per second: slow enough to read a card as it passes. */
const SPEED = 28;

const PLAY_ICON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg>';
const PAUSE_ICON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4h4v16H7zM13 4h4v16h-4z"/></svg>';

export function initReviews() {
  const root = document.querySelector('[data-reviews]');
  const track = root?.querySelector('[data-rv-track]');
  const set = track?.querySelector('.rv-set');
  const controls = root?.querySelector('[data-rv-controls]');
  const toggle = controls?.querySelector('[data-rv-toggle]');
  if (!root || !track || !set || !toggle) return () => {};
  const label = toggle.querySelector('[data-rv-label]');
  const icon = toggle.querySelector('[data-rv-icon]');
  const clones = [];
  let paused = false;

  /* Enough copies that the row still reaches the right-hand edge when every
     copy has moved one width to the left; and one lap timed to SPEED. */
  const fit = () => {
    if (!root.classList.contains('is-running')) return;
    const width = set.getBoundingClientRect().width;
    if (!width) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const needed = Math.ceil(root.clientWidth / (width + gap)) + 1;
    while (clones.length + 1 < needed) {
      const copy = set.cloneNode(true);
      copy.removeAttribute('role');
      copy.setAttribute('aria-hidden', 'true');
      copy.inert = true;
      copy.dataset.rvClone = '';
      track.append(copy);
      clones.push(copy);
    }
    root.style.setProperty('--rv-duration', `${((width + gap) / SPEED).toFixed(1)}s`);
  };

  const setPaused = (want) => {
    paused = want;
    root.classList.toggle('is-paused', paused);
    if (label) label.textContent = paused ? 'Play the reviews' : 'Pause the reviews';
    if (icon) icon.innerHTML = paused ? PLAY_ICON : PAUSE_ICON;
  };
  const onToggle = () => setPaused(!paused);
  toggle.addEventListener('click', onToggle);

  const applyMotion = (reduced) => {
    root.classList.toggle('is-running', !reduced);
    controls.hidden = reduced;
    fit();
  };
  const offMotion = motion.onChange(applyMotion);
  applyMotion(motion.reduced);

  const resize = 'ResizeObserver' in window ? new ResizeObserver(fit) : null;
  resize?.observe(root);

  // Idle until first seen: whileVisible only reports changes, and a row
  // that starts below the fold has not changed.
  root.classList.add('is-idle');
  const stopVisibility = whileVisible(root, {
    onActive: () => root.classList.remove('is-idle'),
    onIdle: () => root.classList.add('is-idle'),
  });

  return () => {
    toggle.removeEventListener('click', onToggle);
    offMotion();
    resize?.disconnect();
    stopVisibility();
    clones.forEach((c) => c.remove());
    controls.hidden = true;
    root.classList.remove('is-running', 'is-paused', 'is-idle');
    root.style.removeProperty('--rv-duration');
  };
}
