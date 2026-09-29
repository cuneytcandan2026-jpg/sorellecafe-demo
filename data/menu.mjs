/**
 * Menu data.
 *
 * PROVENANCE, READ BEFORE PUBLISHING
 * ----------------------------------
 * Transcribed from the three menu pages the café posted on Instagram. Where it
 * came from, and every piece of tidying, is recorded in content-needed.md (not
 * deployed).
 *
 * `PRICE_POLICY` below controls how prices render:
 *   'archived'  - shows the figures with a visible "to be confirmed" notice
 *   'confirmed' - shows them plainly (only once the client has approved them)
 *   'hidden'    - shows no prices at all
 *
 * DIETARY MARKS: `tags` holds every mark exactly as printed: 'V' (vegetarian),
 * 'VG' (vegan) and 'N' (contains nuts). Only 'V' is shown on the site for now.
 * Nothing is inferred: a dish the printed menu leaves unmarked stays unmarked.
 *
 * STRUCTURE
 * ---------
 * Item names, prices, descriptions and marks are as printed, with spelling
 * and punctuation tidied; anything that could change meaning is left as
 * printed and asked about instead. Sections may be renamed so the name says
 * what is in them: `printed` records the name on the printed menu.
 *
 * A section's printed note is broken into `includes` (what every dish comes
 * with, shown as ticks), `options` (a list to choose from), `upgrades` (paid
 * add-ons) and `note` (anything left over).
 *
 * `layout` picks how a section is set on the menu page:
 *   'dishes' - name, price and description rows (the default)
 *   'build'  - build your own: a price ladder plus the list to choose from.
 *              Ladder rows carry `short`; the "add a topping" row is `extra`.
 *   'group'  - one price for the whole section, shown once; an item that
 *              costs something different still shows its own price
 *   'list'   - short names in columns with a dotted leader
 *   'addons' - a list inside a panel that opens (still readable without JS)
 *
 * Every section `id` is a stable anchor that the homepage links to.
 */

/** 'archived' | 'confirmed' | 'hidden' */
export const PRICE_POLICY = 'archived';

/** Public wording, shown while PRICE_POLICY is 'archived'. */
export const PRICE_NOTE =
  'Some prices may have changed since this menu was published. Please check ' +
  'with the team when you order.';

export const MENU_META = {
  sourceNote:
    'Transcribed from the menu the café posted on Instagram. Dishes marked (V) ' +
    'are marked vegetarian there. No other dietary or allergen information is ' +
    'given here.',
  allergenNote:
    'Allergen information is not published here. Please ask a member of the ' +
    'team about ingredients and allergens before ordering.',
};

export const COURSES = [
  { id: 'breakfast', label: 'Breakfast', short: 'Breakfast', photo: 'breakfast-medi' },
  { id: 'brunch', label: 'Brunch', short: 'Brunch', photo: 'brunch-avo-burst' },
  { id: 'lunch', label: 'Lunch', short: 'Lunch', photo: 'lunch-chicken-caesar' },
  { id: 'drinks', label: 'Drinks', short: 'Drinks', photo: 'coffee-tray' },
];

export const MENU = [
  /* ---------------------------------------------------------------- BREAKFAST */
  {
    id: 'breakfast',
    course: 'breakfast',
    name: 'Breakfast',
    note: 'One item may be substituted from the set breakfast.',
    items: [
      { name: 'Full English', price: 12.9, desc: 'Two fried eggs, bacon, Cumberland sausage, hash brown, tomatoes, beans, Portobello mushroom & toast.' },
      { name: 'Sorelle Classic', price: 11.9, desc: 'Two fried eggs, bacon, Cumberland sausage, black pudding, beans, hash brown & toast.' },
      { name: 'Vegetarian', price: 11.9, tags: ['V'], desc: 'Two fried eggs, Portobello mushroom, two veg sausages, beans, tomatoes, hash brown & toast.' },
      { name: 'Vegan', price: 10.9, tags: ['VG'], desc: 'Spinach, Portobello mushroom, grilled cherry tomatoes, beans, avocado, falafel & sourdough.' },
      { name: 'Choice of Eggs on 2 Toast', price: 7.9 },
      { name: 'Beans on Toast', price: 7.9 },
      { name: 'Medi', price: 13.9, desc: 'Two fried eggs, sujuk, halloumi, olives, tomatoes, cucumber, feta cheese, jam, clotted cream, honey & sourdough.' },
      { name: 'Sunrise', price: 13.9, desc: 'Smoked salmon, scrambled egg, avocado, grilled cherry tomatoes & sourdough.' },
      { name: 'American French', price: 13.9, desc: 'French toast with bacon, Cumberland sausage, cinnamon cream, seasonal fruits & Nutella.' },
      { name: 'Menemen', price: 9.9, tags: ['V'], desc: 'Skillet-cooked tomato, green peppers, spices, chilli flakes, dried basil, a sunny-side-up egg & sourdough.' },
      { name: 'Turkish Butter Eggs', price: 9.9, tags: ['V'], desc: 'Turkish homemade yogurt, poached eggs, Aleppo flakes, butter, chilli flakes and chickpeas, served with sourdough.' },
    ],
  },
  {
    id: 'omelettes',
    course: 'breakfast',
    name: 'Omelettes',
    layout: 'build',
    includes: ['Chips', 'Salad'],
    options: {
      label: 'Toppings',
      list: ['Cheese', 'Ham', 'Spinach', 'Bacon', 'Mushroom', 'Pepper', 'Onion', 'Sweetcorn', 'Tomato'],
    },
    items: [
      { name: 'Plain Omelette', short: 'Plain', price: 7.5 },
      { name: 'Omelette with 1 topping', short: '1 topping', price: 9.5 },
      { name: 'Omelette with 2 toppings', short: '2 toppings', price: 10.5 },
      { name: 'Omelette with 3 toppings', short: '3 toppings', price: 11.5 },
    ],
  },
  {
    id: 'sweet-breakfast',
    course: 'breakfast',
    name: 'Sweet Breakfast',
    items: [
      { name: 'Granola', price: 7.9, tags: ['N', 'V'], desc: 'Yogurt, granola and seasonal fruits drizzled with honey.' },
      { name: 'French Toast', price: 9.9, tags: ['N', 'V'], desc: 'French toast and seasonal fruits drizzled with Canadian maple syrup.' },
      { name: 'Cinnamonisa', price: 10.9, tags: ['V'], desc: 'Four layered pancakes and seasonal fruits drizzled with Canadian maple syrup, served with homemade cinnamon butter cream.' },
    ],
  },

  /* ------------------------------------------------------------------ BRUNCH */
  {
    id: 'brunch',
    course: 'brunch',
    name: 'Brunch',
    includes: ['Salad'],
    note: 'Extras available: check the menu in the café.',
    items: [
      { name: 'Avo Burst', price: 9.9, tags: ['V'], desc: 'Smashed avocado on sourdough, two poached eggs & seasonal herbs.' },
      { name: 'Sorelle Classic', price: 11.9, tags: ['V'], desc: 'Smashed avocado on sourdough, two poached eggs, sun-dried tomatoes & mozzarella.' },
      { name: 'Eggs Benedict', price: 9.9, desc: 'Two poached eggs with ham on an English muffin, topped with hollandaise sauce.' },
      { name: 'Eggs Florentine', price: 9.9, tags: ['V'], desc: 'Two poached eggs with spinach on an English muffin, topped with hollandaise sauce.' },
      { name: 'Eggs Royale', price: 11.9, desc: 'Two poached eggs with smoked salmon on an English muffin, topped with hollandaise sauce.' },
    ],
  },

  /* ------------------------------------------------------------------- LUNCH */
  {
    id: 'sandwiches',
    course: 'lunch',
    name: 'Sandwiches',
    layout: 'list',
    note: 'On brown, white, sourdough or panini bread, and they can be toasted.',
    upgrades: [{ name: 'Add chips', price: 2 }],
    items: [
      { name: 'Egg', price: 4.5 },
      { name: 'Bacon', price: 4.5 },
      { name: 'Sausage', price: 4.5 },
      { name: 'Ham & Cheese', price: 7.5 },
      { name: 'Cheese & Tomato', price: 6.5, tags: ['V'] },
      { name: 'Smoked Salmon & Cream Cheese', price: 7.9 },
      { name: 'Tuna Melt', price: 7.9 },
      { name: 'Mozzarella, Tomato & Pesto', price: 7.9, tags: ['N'] },
      { name: 'Egg, Bacon & Sausage', price: 7.5 },
      { name: 'Avocado, Halloumi & Pesto', price: 8.5, tags: ['N'] },
      { name: 'Grilled Chicken, Lettuce, Tomato & Mayo', price: 8.9 },
    ],
  },
  {
    id: 'wraps',
    course: 'lunch',
    name: 'Wraps',
    includes: ['Salad', 'Coleslaw'],
    upgrades: [{ name: 'Add chips', price: 2 }],
    items: [
      { name: 'Breakfast Wrap', price: 9.9, desc: 'Fried egg, bacon, sausage & hash brown.' },
      { name: 'Falafel & Hummus', price: 9.9, tags: ['VG'] },
      { name: 'Chicken Avocado', price: 11.9, desc: 'Grilled chicken, avocado, tomato, lettuce & mayo.' },
      { name: 'Chicken Pesto', price: 11.9, tags: ['N'], desc: 'Grilled chicken, sun-dried tomatoes, mozzarella, pesto & salad.' },
    ],
  },
  {
    id: 'burgers',
    course: 'lunch',
    name: 'Burgers',
    includes: ['Chips'],
    upgrades: [{ name: 'Double patty on the Classic Beef Burger', price: 2 }],
    items: [
      { name: 'Classic Beef Burger', price: 10.9, desc: 'Cheese, onion, lettuce & tomato.' },
      { name: 'Dirty Burger', price: 12.9, desc: 'Fried egg, bacon, onion, lettuce & tomato.' },
      { name: 'Sorelle Burger', price: 12.9, desc: 'Grilled chicken, halloumi, avocado, tomato and mixed leaves with sweet chilli.' },
      { name: 'Veggie Burger', price: 9.9, desc: 'Veggie patty with lettuce & tomato.' },
    ],
  },
  {
    id: 'grills-salads',
    course: 'lunch',
    name: 'Grills & Salads',
    items: [
      { name: 'Grilled Chicken', price: 12.9, desc: 'Grilled chicken with chips & salad.' },
      { name: 'Chicken Schnitzel', price: 12.9, desc: 'Served with chips & salad.' },
      { name: 'Chicken Nuggets', price: 12.9, desc: 'Eight pieces, with chips.' },
      { name: 'Sea Bass Fillet', price: 13.9, desc: 'Served with chips & salad.' },
      { name: 'Avo & Halloumi Salad', price: 12.9, tags: ['V'], desc: 'Avocado, halloumi, cherry tomato, mixed leaves, pomegranate, cucumber, red onion & sour pomegranate dressing.' },
      { name: 'Chicken Caesar', price: 11.9, desc: 'Grilled chicken, baby gem, croutons, shaved parmesan & Caesar dressing.' },
      { name: 'Feta Salad', price: 10.9, tags: ['V'], desc: 'Feta cheese, mixed leaves, cherry tomato, olives, cucumber, red onion & pomegranate dressing.' },
    ],
  },
  {
    id: 'pasta',
    course: 'lunch',
    name: 'Pasta',
    layout: 'list',
    items: [
      { name: 'Spaghetti Bolognese', price: 12.9 },
      { name: 'Penne Arrabbiata', price: 11.9, tags: ['V'] },
      { name: 'Lasagna with Side Salad', price: 13.9 },
      { name: 'Veg Lasagna with Salad', price: 10.9, tags: ['V'] },
    ],
  },
  {
    id: 'jacket-potatoes',
    course: 'lunch',
    name: 'Jacket Potatoes',
    printed: 'Jacket Potato',
    layout: 'list',
    includes: ['Salad', 'Coleslaw'],
    items: [
      { name: 'Cheese & Beans', price: 8.5 },
      { name: 'Tuna Sweetcorn', price: 9.5 },
      { name: 'Chilli', price: 10.5 },
      { name: 'Chicken', price: 10.5 },
    ],
  },
  {
    id: 'kids',
    course: 'lunch',
    name: 'Kids’ Meals',
    printed: 'Kids Meal',
    layout: 'group',
    note: 'Served with a Fruit Shoot. For under-12s only.',
    items: [
      { name: 'Kids Breakfast', price: 7.9, desc: 'Eggs, sausage, beans & chips.' },
      { name: 'Cheeseburger', price: 7.9, desc: 'Served with chips.' },
      { name: 'Kids Pancake', price: 7.9, desc: 'Two pancakes, Nutella & strawberries.' },
      { name: 'Chicken Nuggets', price: 7.9, desc: 'Five pieces & chips.' },
      { name: 'Penne Pomodoro', price: 7.9, desc: 'Or plain.' },
    ],
  },

  /* ------------------------------------------------------------------ DRINKS */
  {
    id: 'hot-drinks',
    course: 'drinks',
    name: 'Hot Drinks',
    layout: 'list',
    upgrades: [
      { name: 'Alternative milk', price: 0.5 },
      { name: 'Syrups', price: 0.5 },
    ],
    items: [
      { name: 'Espresso', price: 2.6 },
      { name: 'Double Espresso', price: 3.1 },
      { name: 'Flat White', price: 3.5 },
      { name: 'Latte', price: 3.8 },
      { name: 'Cappuccino', price: 3.8 },
      { name: 'Mocha', price: 4.1 },
      { name: 'Macchiato', price: 2.8 },
      { name: 'Cortado', price: 3.4 },
      { name: 'Americano', price: 3.3 },
      { name: 'Hot Chocolate', price: 3.5 },
      { name: 'Chai Latte', price: 3.8 },
      { name: 'Dirty Chai', price: 4.2 },
      { name: 'Matcha Latte', price: 4.3 },
      { name: 'Tea Selections', price: 4.3 },
    ],
  },
  {
    id: 'iced-drinks',
    course: 'drinks',
    name: 'Iced Drinks',
    layout: 'list',
    items: [
      { name: 'Iced Latte', price: 4.5 },
      { name: 'Iced Mocha', price: 4.7 },
      { name: 'Iced Americano', price: 4.3 },
      { name: 'Iced Chai Latte', price: 4.4 },
      { name: 'Iced Lemonade', price: 4.2 },
      { name: 'Iced Matcha', price: 4.9 },
    ],
  },
  {
    id: 'smoothies',
    course: 'drinks',
    name: 'Smoothies',
    layout: 'group',
    items: [
      { name: 'Merry Berry', price: 5.9, desc: 'Blackberry, strawberry, raspberry, blueberry & banana.' },
      { name: 'Strawberry Sunshine', price: 5.9, desc: 'Strawberry, mango & banana.' },
      { name: 'Tropical Crush', price: 5.9, desc: 'Passion fruit, papaya, mango & pineapple.' },
      { name: 'Peachy Green', price: 5.9, desc: 'Kale, broccoli, peach, mango & kiwi.' },
    ],
  },
  {
    id: 'fresh-juice',
    course: 'drinks',
    name: 'Fresh Juice',
    layout: 'list',
    upgrades: [{ name: 'Add ginger or lemon', price: 1 }],
    items: [
      { name: 'Orange', price: 4.9 },
      { name: 'Orange, Apple & Carrot', price: 5.9 },
    ],
  },
  {
    id: 'milkshakes',
    course: 'drinks',
    name: 'Milkshakes',
    layout: 'list',
    items: [
      { name: 'Vanilla', price: 5.5 },
      { name: 'Chocolate', price: 5.5 },
      { name: 'Strawberry', price: 5.5 },
      { name: 'Oreo', price: 6.5 },
      { name: 'Lotus', price: 6.5 },
      { name: 'Coffee', price: 6.5 },
      { name: 'Nutella', price: 6.5 },
    ],
  },
  {
    id: 'soft-drinks',
    course: 'drinks',
    name: 'Soft Drinks',
    layout: 'list',
    items: [
      { name: 'Still or Sparkling Water, 330ml', price: 2.5 },
      { name: 'Still or Sparkling Water, 750ml', price: 4.5 },
      { name: 'Coca-Cola', price: 2.9 },
      { name: 'Diet Coke', price: 2.9 },
      { name: 'Coke Zero', price: 2.9 },
      { name: 'Sprite', price: 2.9 },
      { name: 'Fanta', price: 2.9 },
      { name: 'San Pellegrino Lemon', price: 2.9 },
      { name: 'Orange Juice', price: 2.5 },
      { name: 'Apple Juice', price: 2.5 },
      { name: 'Fruit Shoot', price: 1.9 },
      { name: 'Lucozade', price: 3.2 },
      { name: 'Red Bull', price: 3.5 },
    ],
  },
];

/** "Good places to start": photographed dishes at the top of the menu page. */
export const MENU_FAVOURITES = [
  { photo: 'breakfast-medi', section: 'breakfast', dish: 'Medi' },
  { photo: 'brunch-avo-burst', section: 'brunch', dish: 'Avo Burst' },
  { photo: 'brunch-sorelle-classic', section: 'brunch', dish: 'Sorelle Classic' },
  { photo: 'lunch-chicken-caesar', section: 'grills-salads', dish: 'Chicken Caesar' },
  { photo: 'coffee-tray', section: 'hot-drinks', dish: 'Cappuccino' },
  { photo: 'coffee-latte-art', section: 'hot-drinks', label: 'Hot drinks' },
];

/**
 * Optional spotlight beside the menu headline: a few dishes the café is
 * known for, wherever they sit on the menu. `null` leaves it out.
 */
export const MENU_SPOTLIGHT = {
  title: 'With the café’s name on',
  note: 'Three dishes carry the Sorelle name.',
  items: [
    { section: 'breakfast', dish: 'Sorelle Classic' },
    { section: 'brunch', dish: 'Sorelle Classic' },
    { section: 'burgers', dish: 'Sorelle Burger' },
  ],
};

/**
 * The menu card on the homepage ("What we serve"), set the way the printed
 * menu is: a ruled box for each part of the menu, a short note under its
 * title and a few of its dishes, and a link to that part of the menu page.
 *
 * `course` is a course id above: the box takes its title from the course
 * label and counts its dishes from MENU. `dishes` name items exactly as they
 * appear in MENU, so a renamed or removed dish stops the build rather than
 * leaving the card out of date. `label` is the name to show where a short
 * name needs its section to make sense ("Lotus" is a milkshake).
 * `layout: 'list'` sets names and prices only, like the printed drinks boxes.
 *
 * Order matters. Below 64rem the boxes are a row to swipe through, and each
 * shows only its first five dishes, by name and price, so put first the ones
 * that say most about that part of the menu. The order of MENU_CARD is the
 * order of the row and of its chips. On a desktop the first box sets its
 * dishes in two columns, row by row, so the
 * breakfast card keeps the English plates on the left and the Medi and the
 * Turkish eggs on the right, as the printed menu does.
 * `countNoun` names what is counted (default 'dishes').
 */
export const MENU_CARD = [
  {
    course: 'breakfast',
    href: 'menu.html#breakfast',
    note: 'One item may be substituted from the set breakfast.',
    dishes: [
      { section: 'breakfast', dish: 'Full English' },
      { section: 'breakfast', dish: 'Medi' },
      { section: 'breakfast', dish: 'Sorelle Classic' },
      { section: 'breakfast', dish: 'Turkish Butter Eggs' },
    ],
  },
  {
    course: 'brunch',
    href: 'menu.html#brunch',
    note: 'All served with salad.',
    dishes: [
      { section: 'brunch', dish: 'Avo Burst' },
      { section: 'brunch', dish: 'Sorelle Classic' },
      { section: 'brunch', dish: 'Eggs Royale' },
    ],
  },
  {
    course: 'lunch',
    href: 'menu.html#sandwiches',
    note: 'Sandwiches, wraps, burgers, grills and salads, pasta, jacket potatoes and a kids’ menu.',
    dishes: [
      { section: 'burgers', dish: 'Sorelle Burger' },
      { section: 'grills-salads', dish: 'Avo & Halloumi Salad' },
      { section: 'grills-salads', dish: 'Chicken Caesar' },
    ],
  },
  {
    course: 'drinks',
    href: 'menu.html#hot-drinks',
    note: 'Hot and iced coffee, tea, smoothies, fresh juice, milkshakes and soft drinks.',
    layout: 'list',
    countNoun: 'drinks',
    dishes: [
      { section: 'hot-drinks', dish: 'Flat White' },
      { section: 'hot-drinks', dish: 'Cappuccino' },
      { section: 'hot-drinks', dish: 'Dirty Chai' },
      { section: 'iced-drinks', dish: 'Iced Latte' },
      { section: 'iced-drinks', dish: 'Iced Matcha' },
      { section: 'smoothies', dish: 'Merry Berry', label: 'Merry Berry Smoothie' },
      { section: 'milkshakes', dish: 'Lotus', label: 'Lotus Milkshake' },
      { section: 'fresh-juice', dish: 'Orange', label: 'Fresh Orange Juice' },
    ],
  },
];
