/**
 * Events: relabel an event whose date has passed.
 *
 * The page is built with each event labelled against the day it was built.
 * A page left online outlives that, so this checks each date again against
 * today in the café's own time zone and, once the day is over, replaces
 * "Sold out" with "Past event". An event stays current through its own date.
 */
import { BUSINESS } from '../data/business.mjs';

const PAST_LABEL = 'Past event';

/** Today in the café's time zone as YYYY-MM-DD, which compares correctly as a string. */
function todayIso(timeZone) {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
    timeZone, year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(new Date()).map((p) => [p.type, p.value]));
  return `${parts.year}-${parts.month}-${parts.day}`;
}

export function initEventDates() {
  const events = [...document.querySelectorAll('[data-event-date]')];
  if (!events.length) return () => {};
  const today = todayIso(BUSINESS.hours.timezone);

  for (const ev of events) {
    if (ev.hasAttribute('data-past') || today <= ev.dataset.eventDate) continue;
    ev.setAttribute('data-past', '');
    const flag = ev.querySelector('[data-event-flag]');
    if (flag) {
      flag.textContent = PAST_LABEL;
      flag.hidden = false;
    }
  }
  return () => {};
}
