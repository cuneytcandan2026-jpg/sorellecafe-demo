/**
 * Page copy: headlines, section introductions and page descriptions.
 *
 * Only the words that belong to this business live here. Interface wording
 * that any café would share ("Find it on the menu", "Load map") stays in
 * tools/build-html.mjs beside the markup it labels.
 *
 * Headlines are arrays of lines; each line is masked and revealed on its own,
 * so keep to three lines for the hero and two for section headings. Wrap a
 * word in *asterisks* to set it in the accent colour.
 *
 * Nothing here may claim a fact the café has not given (see the honesty rules
 * in README.md). The sources are the café's menu, its own business
 * description and what the photographs show.
 */
import { BUSINESS } from './business.mjs';

const NAME = BUSINESS.name;
const { locality } = BUSINESS.address;

export const COPY = {
  meta: {
    home: {
      title: `${NAME} — breakfast, brunch and coffee in ${locality}`,
      description: `${NAME} on Churchgate Road, ${locality}: freshly prepared breakfast, brunch and lunch, specialty coffee and homemade cakes. Menu, opening hours and directions.`,
    },
    menu: {
      title: `Menu — ${NAME}, ${locality}`,
      description: `The ${NAME} menu: breakfast, brunch, lunch and drinks, from a Full English and Turkish eggs to wraps, burgers, smoothies and milkshakes.`,
    },
    contact: {
      title: `Contact — ${NAME}, ${locality}`,
      description: `Request a table, send a message or enquire about private hire at ${NAME}, ${locality}.`,
    },
    events: {
      title: `Events — ${NAME}, ${locality}`,
      description: `Events at ${NAME} on Churchgate Road, ${locality}, and where to hear about the next one.`,
    },
    notFound: {
      title: `Page not found — ${NAME}, ${locality}`,
      description: `This page doesn’t exist. Find the menu, opening hours and directions for ${NAME}, ${locality}.`,
    },
  },

  hero: {
    lines: ['Breakfast, brunch', 'and coffee', `in *${locality}*.`],
    lead: 'Freshly prepared plates, specialty coffee and homemade cakes on Churchgate Road.',
    cta: 'View the menu',
    contact: 'Contact us',
    cue: 'Scroll down to see more',
    /** Circular stamp, bottom-right on desktop. Keep it true and short: ~40 characters. */
    stampRing: `BREAKFAST · BRUNCH · LUNCH · ${locality.toUpperCase()} · `,
  },

  favourites: {
    eyebrow: 'Find your favourite',
    lines: ['Four from', 'the *menu*.'],
    lead: 'A breakfast, a brunch plate, a salad and a coffee. Open a photograph to see what it is, or press play and let them come to you.',
    note: 'Every dish shown is on the menu.',
  },

  menuPreview: {
    eyebrow: 'What we serve',
    lines: ['Breakfast through', 'to *lunch*.'],
    lead: 'A Full English or Turkish butter eggs, avocado on sourdough, wraps, burgers and salads, with coffee, smoothies and milkshakes alongside.',
  },

  cafe: {
    eyebrow: 'The café',
    lines: ['Your local', 'on *Churchgate Road*.'],
    lead: 'Somewhere to meet friends, bring the family or stop for your daily coffee. Breakfast, brunch and lunch are freshly prepared, and the cakes are homemade.',
  },

  gallery: {
    eyebrow: `Life at ${NAME}`,
    lines: ['On the table', 'at *Sorelle*.'],
  },

  reviews: {
    eyebrow: 'Google reviews',
    lines: ['Kind words', 'from *guests*.'],
    lead: 'From the café’s Google reviews, quoted as they were written.',
  },

  visit: {
    eyebrow: 'Visit us',
    /** The titles of the café's own Instagram cards, lower case as it sets them. */
    hoursTitle: 'opening *hours*',
    addressTitle: 'address',
  },

  menuPage: {
    lines: ['From a Full English', 'to a *milkshake*.'],
    /** Short facts beside the menu headline. Only confirmed ones. */
    facts: ['Brunch served with salad', 'Kids’ meals for under-12s'],
    /** Suggested searches in the no-results message. */
    searchExamples: ['eggs', 'latte'],
    favouritesNote: 'From the café’s own Instagram.',
  },

  eventsPage: {
    eyebrow: 'Events',
    lines: ['What’s on', 'at *Sorelle*.'],
    lead: 'Events at the café on Churchgate Road. For upcoming ones, follow the café on Instagram.',
    /** Beside the private hire link. */
    hire: 'Planning an occasion of your own?',
  },
};
