/**
 * Business facts.
 *
 * SINGLE SOURCE OF TRUTH. Editing this file updates the header, visit section,
 * footer, menu page, contact page and forms together.
 *
 * Every file in site/ is published, comments included. Keep notes about the
 * client, the sources or other businesses in content-needed.md instead.
 *
 * `confirmed: false` means the value has NOT been approved by the owner.
 * Anything unconfirmed is rendered with a visible "To confirm" marker.
 */

export const STATUS = {
  /** Flip to false only when the client has signed off and the site goes live. */
  isPreview: true,
  previewNote:
    'Work in progress by Laara Digital. The menu, prices, hours and photos come from the café’s Instagram and are still to be confirmed.',
  /**
   * Where the pages are published, with a trailing slash. Link previews
   * (og:image, og:url) need absolute URLs, so change this with the domain.
   */
  siteUrl: 'https://laaradigital.co.uk/sorellecafe-demo/',
};

export const BUSINESS = {
  name: 'Sorelle Café',
  locality: 'Cheshunt',

  /** `region` holds the post town, so the address reads as the café writes it. */
  address: {
    confirmed: false,
    street: '236 Churchgate Road',
    locality: 'Cheshunt',
    region: 'Waltham Cross',
    postcode: 'EN8 9EQ',
    country: 'GB',
    get oneLine() {
      return `${this.street}, ${this.locality}, ${this.region} ${this.postcode}`;
    },
  },

  /**
   * `null`: there is no public telephone number, so no call links are shown.
   * Shape when there is one: { confirmed, display, href: 'tel:+44…' }.
   */
  phone: null,

  /** Search-based directions link: no embed, no API key, no geolocation prompt. */
  directions: {
    confirmed: false,
    label: 'Open in Maps',
    get href() {
      return 'https://www.google.com/maps/search/?api=1&query=' +
        encodeURIComponent(`${BUSINESS.name}, ${BUSINESS.address.oneLine}`);
    },
  },

  /** Each entry: { label, handle, href, confirmed }. */
  social: [
    {
      label: 'Instagram',
      handle: '@sorellecafe.cheshunt',
      href: 'https://www.instagram.com/sorellecafe.cheshunt/',
      confirmed: true,
    },
  ],

  /**
   * `liveStatus` stays false so the site never claims "Open now" from
   * unconfirmed hours.
   */
  hours: {
    confirmed: false,
    liveStatus: false,
    timezone: 'Europe/London',
    /** Where the listed hours were read from, shown beside them. */
    source: 'As posted on the café’s Instagram.',
    groups: [
      // `dow`: JavaScript day numbers (0 = Sunday), so the header can show
      // today's listed hours. It shows the SCHEDULE for today, never a live
      // open/closed status - see liveStatus above.
      { days: 'Monday to Saturday', dow: [1, 2, 3, 4, 5, 6], opens: '08:00', closes: '17:00' },
      { days: 'Sunday', dow: [0], opens: '09:00', closes: '17:00' },
    ],
  },

  /**
   * A short practical note shown in the visit section, e.g. parking or step-
   * free access. `null` renders nothing. Shape: { note, qualifier }.
   */
  parking: null,

  /**
   * No ordering or booking provider has been confirmed, so nothing links to
   * one.
   */
  ordering: { available: false },
  booking: { available: false },

  /**
   * Contact forms (contact.html and the pop-up on every page).
   *
   * Submissions go through Web3Forms, which emails them to the café. Create a
   * free account at web3forms.com, verify the café's inbox as the
   * destination, and paste the Access Key it gives you below (it is meant to
   * be public - it only says where mail gets delivered, not who can send).
   * While it is empty the forms still validate, but say plainly that nothing
   * was sent.
   *
   * A table request is exactly that - a REQUEST. There is no booking system,
   * so the copy never says "booked" and the café gets back to confirm.
   */
  contact: {
    accessKey: '',
    /** Party size at which a table request becomes a private-hire enquiry. Unconfirmed. */
    privateHireFrom: 12,
    /** Minutes before closing that the last table request slot is offered. */
    lastSlotBeforeClose: 60,
    messageTopics: [
      'General question',
      'Allergens and dietary needs',
      'Feedback',
      'Lost property',
      'Something else',
    ],
    hireOccasions: [
      'Birthday',
      'Baby shower',
      'Christening or family gathering',
      'Work breakfast or lunch',
      'Something else',
    ],
    hireTimes: ['Morning', 'Lunchtime', 'Afternoon', 'Flexible'],
  },
};

/** Primary actions, per the brief. No ordering or booking CTA. */
export const ACTIONS = {
  primary: { label: 'View the menu', href: 'menu.html' },
  secondary: { label: 'Visit us', href: '#visit' },
};

export const NAV = [
  { label: 'Menu', href: 'menu.html', section: null },
  { label: 'Events', href: 'events.html', section: null },
  { label: 'The café', href: '#the-cafe', section: 'the-cafe' },
  { label: 'Gallery', href: '#gallery', section: 'gallery' },
  { label: 'Contact us', href: '#contact-us', section: 'contact-us' },
];
