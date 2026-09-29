/**
 * "What we serve": the row of menu boxes below 64rem.
 *
 * The row itself is CSS: it scrolls sideways and snaps a box at a time, and
 * its chips are links to the boxes, so it swipes and jumps without this.
 * This adds what needs to know where the row is: the chip for the box in
 * view is marked (aria-current, and the chip's selected look), the dots
 * follow, the arrows step a box at a time, and a chip scrolls the row rather
 * than the page. On a desktop the boxes are a grid and none of it applies.
 */
import { motion } from './motion.js';

const ROW = window.matchMedia('screen and (max-width: 63.99rem)');

export function initMenuCard() {
  const root = document.querySelector('[data-mc]');
  const track = root?.querySelector('[data-mc-track]');
  const cards = track ? [...track.querySelectorAll('[data-mc-card]')] : [];
  if (!root || cards.length < 2) return () => {};
  const tabs = [...root.querySelectorAll('[data-mc-tab]')];
  const tabRow = tabs[0]?.closest('ul');
  const dots = [...root.querySelectorAll('[data-mc-dot]')];
  const controls = root.querySelector('[data-mc-controls]');
  const prev = root.querySelector('[data-mc-prev]');
  const next = root.querySelector('[data-mc-next]');
  const clamp = (i) => Math.max(0, Math.min(cards.length - 1, i));
  const behavior = () => (motion.reduced ? 'instant' : 'smooth');

  let current = -1;
  let aim = null;      // the box an arrow or chip last asked for, until the row settles
  let settle;

  const atStart = () => track.scrollLeft <= 2;
  const atEnd = () => track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
  /** The box nearest the row's start, or the last once the row is at its end. */
  const inView = () => {
    if (atEnd()) return cards.length - 1;
    const step = cards[1].offsetLeft - cards[0].offsetLeft;
    return clamp(Math.round(track.scrollLeft / step));
  };

  const update = () => {
    if (!ROW.matches) return;
    if (prev) prev.disabled = atStart();
    if (next) next.disabled = atEnd();
    const i = inView();
    if (i === current) return;
    current = i;
    tabs.forEach((t, n) => {
      t.classList.toggle('is-active', n === i);
      if (n === i) t.setAttribute('aria-current', 'true');
      else t.removeAttribute('aria-current');
    });
    dots.forEach((d, n) => d.classList.toggle('is-current', n === i));
    cards.forEach((c, n) => c.classList.toggle('is-current', n === i));
    // Keep the marked chip in sight on a screen too narrow for all of them,
    // scrolling the chips alone: never the page.
    const tab = tabs[i];
    if (tab && tabRow && tabRow.scrollWidth > tabRow.clientWidth) {
      const r = tab.getBoundingClientRect();
      const box = tabRow.getBoundingClientRect();
      if (r.left < box.left || r.right > box.right) {
        tabRow.scrollBy({ left: r.left - box.left - (box.width - r.width) / 2, behavior: behavior() });
      }
    }
  };

  const go = (i) => {
    aim = clamp(i);
    track.scrollTo({ left: cards[aim].offsetLeft - cards[0].offsetLeft, behavior: behavior() });
  };

  const onScroll = () => {
    update();
    clearTimeout(settle);
    settle = setTimeout(() => { aim = null; }, 160);
  };
  const onTab = (event) => {
    if (!ROW.matches) return;
    event.preventDefault();
    go(tabs.indexOf(event.currentTarget));
  };
  const onPrev = () => go((aim ?? current) - 1);
  const onNext = () => go((aim ?? current) + 1);

  track.addEventListener('scroll', onScroll, { passive: true });
  tabs.forEach((t) => t.addEventListener('click', onTab));
  prev?.addEventListener('click', onPrev);
  next?.addEventListener('click', onNext);

  const clear = () => {
    current = -1;
    tabs.forEach((t) => {
      t.classList.remove('is-active');
      t.removeAttribute('aria-current');
    });
    dots.forEach((d) => d.classList.remove('is-current'));
    cards.forEach((c) => c.classList.remove('is-current'));
  };
  const applyMode = () => {
    const live = ROW.matches;
    if (controls) controls.hidden = !live;
    track.toggleAttribute('data-mc-live', live);
    clear();
    update();
  };
  if (typeof ROW.addEventListener === 'function') ROW.addEventListener('change', applyMode);
  applyMode();

  // A box's width follows the screen's, so where the row stands has to be
  // read again when the screen changes size.
  const resize = 'ResizeObserver' in window
    ? new ResizeObserver(() => { current = -1; update(); })
    : null;
  resize?.observe(track);

  return () => {
    track.removeEventListener('scroll', onScroll);
    tabs.forEach((t) => t.removeEventListener('click', onTab));
    prev?.removeEventListener('click', onPrev);
    next?.removeEventListener('click', onNext);
    if (typeof ROW.removeEventListener === 'function') ROW.removeEventListener('change', applyMode);
    resize?.disconnect();
    clearTimeout(settle);
    clear();
    if (controls) controls.hidden = true;
    track.removeAttribute('data-mc-live');
  };
}
