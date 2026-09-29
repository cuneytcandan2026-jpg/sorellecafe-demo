/**
 * Events page entry point.
 *
 * The page is static: every event, date and price is in the HTML. This adds
 * the shared layer (header, hours, reveals, the menu panel, the contact
 * pop-up behind "Enquire about private hire") and relabels past events.
 */
import { initReveals } from './motion.js';
import { initMenuPanel, initHeader, initHours } from './nav.js';
import { initContact } from './contact.js';
import { initEventDates } from './events.js';

function mount(name, fn) {
  try {
    return fn() || (() => {});
  } catch (error) {
    console.error(`[site] "${name}" failed to start`, error);
    return () => {};
  }
}

const teardowns = [
  mount('event dates', initEventDates),
  mount('header', initHeader),
  mount('hours', initHours),
  mount('reveals', () => initReveals()),
  mount('menu panel', initMenuPanel),
  mount('contact', initContact),
];

window.addEventListener('pagehide', () => {
  while (teardowns.length) {
    try {
      teardowns.pop()();
    } catch {
      /* best effort */
    }
  }
});
