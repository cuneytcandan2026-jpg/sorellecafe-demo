/**
 * Events at the café, soonest first, for events.html. Each is set in an arch,
 * the frame of the café's own event flyers.
 *
 *   id         the anchor on the Events page
 *   title      `*word*` sets it in Bodoni italic, as in the copy layer
 *   date       YYYY-MM-DD; `starts` is 24-hour, as in business.mjs
 *   confirmed  false shows a "To confirm" marker beside the date
 *   price      per person, in pounds; `includes` is what the price covers
 *   soldOut    labels the event "Sold out"
 *
 * Once its date has passed, an event is labelled "Past event" instead: when
 * the page is built, and again in the browser (scripts/events.js), so a page
 * left online does not go on advertising an evening that has been and gone.
 *
 * Show only what the café has said about an event. Nothing about what it
 * involves, who it is for, when it ends or how to book unless the café says.
 */
export const EVENTS = [
  {
    id: 'sip-and-paint',
    title: 'Sip *&* Paint',
    date: '2026-10-14',
    starts: '18:30',
    confirmed: false,
    price: 30,
    includes: 'a complimentary glass of prosecco',
    soldOut: true,
  },
];
