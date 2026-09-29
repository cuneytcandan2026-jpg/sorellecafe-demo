/**
 * Image registry.
 *
 * Every entry maps to a source image under Assets/. Derivatives in site/media
 * are produced by tools/build-images.mjs; originals are untouched.
 *
 * `alt` describes what is genuinely visible, and `title` is a few words for
 * places where the full description would be read twice (gallery buttons).
 * Where a photograph matches a named menu item with confidence, `dish` records
 * it; where it does not, `dish` is null and the copy stays descriptive rather
 * than inventing a product name. `placeholder` is the colour painted while the
 * image loads: the photograph's average colour.
 */
import { BUSINESS } from './business.mjs';

export const PHOTOS = {
  'plates-marble': {
    dish: null,
    title: 'Three plates on marble',
    alt: 'Brunch on a dark marble table, seen from above: smashed avocado on toast with poached eggs, and two fried eggs with sujuk, grilled halloumi and salad.',
    placeholder: '#80664b',
  },
  'breakfast-medi': {
    dish: 'Medi',
    title: 'Medi',
    alt: 'Two fried eggs, slices of sujuk and grilled halloumi, sourdough and a side salad, with a small pot of jam, on a dark plate.',
    placeholder: '#947051',
  },
  'brunch-avo-burst': {
    dish: 'Avo Burst',
    title: 'Avo Burst',
    alt: 'Smashed avocado on toasted sourdough with two poached eggs, chives and orange edible flowers, beside a side salad on a long white plate.',
    placeholder: '#948764',
  },
  'plates-held': {
    dish: null,
    title: 'Two plates, held up',
    alt: 'Two plates held up in the sunlight: avocado toast with poached eggs and a side salad, and pancakes dusted with icing sugar and violas, with a fried egg, bacon, a sausage, berries and a small jug of syrup.',
    placeholder: '#907a61',
  },
  'brunch-sorelle-classic': {
    dish: 'Sorelle Classic',
    title: 'Sorelle Classic',
    alt: 'Smashed avocado on toast topped with mozzarella, poached eggs, sun-dried tomatoes, violas and chives, with a side salad, on a square black plate.',
    placeholder: '#887a57',
  },
  'table-spread': {
    dish: null,
    title: 'A table for breakfast',
    alt: 'A table in front of a blue velvet chair with a braided back: granola with berries, a coffee with latte art, an iced matcha in a rippled glass, sujuk, halloumi, olives, feta and sourdough, and an omelette with chips and salad.',
    placeholder: '#8f816a',
  },
  'lunch-chicken-caesar': {
    dish: 'Chicken Caesar',
    title: 'Chicken Caesar',
    alt: 'Chicken Caesar salad seen from above: grilled chicken, baby gem and parmesan shavings in a creamy dressing, with chives and a drizzle across the rim of a ribbed white bowl.',
    placeholder: '#c4b49d',
  },
  'drinks-sign': {
    dish: 'Iced Matcha',
    title: 'Under the sign',
    alt: 'Two hands hold up an iced matcha in a Sorelle takeaway cup and an iced coffee in a rippled glass, below a wooden “Sorelle” sign in script on a white wall.',
    placeholder: '#e4d9cc',
  },
  'coffee-latte-art': {
    dish: null,
    title: 'Latte art',
    alt: 'Seen from above, a gloved hand holds a cup of milky coffee with a rosetta poured on top, over a white counter.',
    placeholder: '#a48873',
  },
  'coffee-tray': {
    dish: 'Cappuccino',
    title: 'Iced latte and cappuccino',
    alt: 'An iced coffee with milk in a rippled glass and a cappuccino dusted with cocoa in a speckled pale green cup, on a round black tray.',
    placeholder: '#746453',
  },
  'iced-latte-cake': {
    dish: null,
    title: 'Iced latte and cake',
    alt: 'An iced latte in a rippled glass beside a slice of glazed sponge topped with lemon slices and icing sugar, with a pot of whipped cream.',
    placeholder: '#927d69',
  },
  'shopfront-coffee': {
    dish: null,
    title: 'Outside the café',
    alt: 'Outside the café, one hand holds a Sorelle takeaway cup while another holds up a phone showing the “Sorelle Café” sign above the window, with white and gold balloons behind.',
    placeholder: '#8e817a',
  },
  /* TEMPORARY DEMO PLACEHOLDER - see content-needed.md. Not a Sorelle
     photograph: a different, larger venue (open-sided terrace, a spirits
     bar, dozens of patrons), stood in only until the café supplies its own
     interior photo for the hero. Delete this entry once that photo arrives. */
  'placeholder-interior': {
    dish: null,
    title: 'Placeholder interior',
    alt: 'Placeholder photograph, not of Sorelle Café: a busy café-bar terrace with dark marble-look tables, a stocked bar and hanging plants, standing in for the café’s own interior photo until one is supplied.',
    placeholder: '#726150',
  },
};

/**
 * The photograph behind the homepage hero.
 * TEMPORARY: standing in on 'placeholder-interior' - not a photograph of
 * Sorelle, see content-needed.md - until the café supplies its own interior
 * shot. Swap back to a real photograph (e.g. 'plates-marble') then.
 */
export const HERO_PHOTO = 'placeholder-interior';
/** The link-preview (og:image) photograph, kept on a real, confirmed photo
 *  even while HERO_PHOTO points at the temporary placeholder above. */
export const SHARE_PHOTO = 'plates-marble';
/** The photograph beside the address, on the homepage and contact page. */
export const VISIT_PHOTO = 'shopfront-coffee';

/**
 * "Find your favourite" - four selectable moments.
 * Each pairs a photograph with a dish that genuinely appears on the menu, and
 * its description quotes the menu's own wording. Each dish's category label
 * is the course its `href` points into, read from data/menu.mjs, so the
 * showcase, the panels and the menu page share one name.
 *
 * `menuName` is the dish as it appears on the menu page, and is what appears
 * in the readout, so the honest name is always the one on screen beside the
 * picture.
 */
export const SHOWCASE = [
  {
    id: 'medi',
    href: 'menu.html#breakfast--medi',
    photo: 'breakfast-medi',
    title: 'Medi',
    menuName: 'MEDI',
    text: 'Two fried eggs, sujuk, halloumi, olives, tomatoes, cucumber, feta cheese, jam, clotted cream, honey and sourdough.',
  },
  {
    id: 'avo-burst',
    href: 'menu.html#brunch--avo-burst',
    photo: 'brunch-avo-burst',
    title: 'Avo Burst',
    menuName: 'AVO BURST',
    text: 'Smashed avocado on sourdough, two poached eggs and seasonal herbs, served with salad.',
  },
  {
    id: 'chicken-caesar',
    href: 'menu.html#grills-salads--chicken-caesar',
    photo: 'lunch-chicken-caesar',
    title: 'Chicken Caesar',
    menuName: 'CHICKEN CAESAR',
    text: 'Grilled chicken, baby gem, croutons, shaved parmesan and Caesar dressing.',
  },
  {
    id: 'cappuccino',
    href: 'menu.html#hot-drinks--cappuccino',
    photo: 'coffee-tray',
    title: 'Cappuccino',
    menuName: 'CAPPUCCINO',
    text: 'One of fourteen hot drinks, from espresso and cortado to dirty chai and matcha latte. Iced lattes, mochas and matcha are on the menu too.',
  },
];

/**
 * Atmosphere - three labels, three photographs.
 * The copy describes only what the supplied photograph actually shows: never
 * a terrace, garden or private room that is not in the picture.
 */
export const ATMOSPHERE = [
  {
    id: 'inside',
    label: `Inside ${BUSINESS.name}`,
    photo: 'table-spread',
    text: 'A blue velvet chair with a braided back, dark marble under the plates, and breakfast across the whole table.',
  },
  {
    id: 'coffee',
    label: 'The coffee',
    photo: 'coffee-latte-art',
    text: 'A rosetta poured at the counter. Espresso, flat whites, lattes, chai and matcha are all on the hot drinks list.',
  },
  {
    id: 'table',
    label: 'At the table',
    photo: 'plates-held',
    text: 'Avocado toast with poached eggs and edible flowers, and pancakes with berries and a jug of syrup, held up in the sun.',
  },
];

/* Read from business.mjs, so a change to the hours or address reaches this
   copy too. "236 Churchgate Road" -> "Churchgate Road"; "08:00" -> "8am". */
const streetName = BUSINESS.address.street.replace(/^\d+\s*/, '');
const weekdays = BUSINESS.hours.groups.find((g) => g.dow.includes(1)) || BUSINESS.hours.groups[0];
const ampm = (hhmm) => {
  const [h, m] = hhmm.split(':').map(Number);
  return `${h % 12 || 12}${m ? `:${String(m).padStart(2, '0')}` : ''}${h < 12 ? 'am' : 'pm'}`;
};

/** Editorial rows. Each preview thumbnail is a real photograph. */
export const EDITORIAL_ROWS = [
  {
    id: 'menu',
    title: 'Explore the menu',
    text: 'From a Full English and Turkish eggs to wraps, burgers and milkshakes.',
    href: 'menu.html',
    cta: 'See the full menu',
    photo: 'brunch-sorelle-classic',
  },
  {
    id: 'look',
    title: 'Take a look around',
    text: 'Plates, cups and glasses from the café’s own Instagram.',
    href: '#gallery',
    cta: 'See the photos',
    photo: 'iced-latte-cake',
  },
  {
    id: 'find',
    title: 'Find your way here',
    text: `${streetName}, ${BUSINESS.locality}. Open from ${ampm(weekdays.opens)}, ${weekdays.days}.`,
    href: '#visit',
    cta: 'See how to find us',
    photo: 'shopfront-coffee',
  },
];

/**
 * Gallery - ten photographs.
 *
 * The desktop collage is an EXACT tiling, not auto-placement: each row's
 * column spans add up to 6, and the aspect ratios within a row are chosen so
 * every item in that row resolves to the same height. That leaves no holes,
 * keeps visual order identical to DOM order (so tab order still makes sense),
 * and stays deterministic at every breakpoint.
 *
 *   row 1 (height 3u):  4 + 2
 *   row 2 (height 2u):  2 + 2 + 2
 *   row 3 (height 3u):  2 + 2 + 2
 *   row 4 (height 2u):  3 + 3
 *
 * `role` picks the nearest built derivative; `tilt` is the resting rotation,
 * inside the brief's restrained range.
 */
export const GALLERY = [
  // Row 1
  { photo: 'table-spread',           cols: 4, ar: '4 / 3', role: 'landscape', tilt: -1.4 },
  { photo: 'coffee-latte-art',       cols: 2, ar: '2 / 3', role: 'portrait',  tilt: 1.8 },
  // Row 2
  { photo: 'lunch-chicken-caesar',   cols: 2, ar: '1 / 1', role: 'square',    tilt: -2.2 },
  { photo: 'brunch-sorelle-classic', cols: 2, ar: '1 / 1', role: 'square',    tilt: 1.2 },
  { photo: 'iced-latte-cake',        cols: 2, ar: '1 / 1', role: 'square',    tilt: 2.4 },
  // Row 3
  { photo: 'drinks-sign',            cols: 2, ar: '2 / 3', role: 'portrait',  tilt: -1.6 },
  { photo: 'plates-held',            cols: 2, ar: '2 / 3', role: 'portrait',  tilt: 2 },
  { photo: 'coffee-tray',            cols: 2, ar: '2 / 3', role: 'portrait',  tilt: -1.8 },
  // Row 4
  { photo: 'plates-marble',          cols: 3, ar: '3 / 2', role: 'landscape', tilt: 1.5 },
  { photo: 'shopfront-coffee',       cols: 3, ar: '3 / 2', role: 'landscape', tilt: -2.4 },
];
