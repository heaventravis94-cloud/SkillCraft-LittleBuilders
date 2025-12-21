import {
  Home,
  Utensils,
  Palette,
  Leaf,
  BookOpen,
  Gem,
  Hammer,
  FlaskConical, // New icon for Mini Scientist Adventures
  Feather,      // New icon for Storytelling & Imagination
  LucideIcon,
} from "lucide-react";

export interface ActivityStep {
  stepNumber: number;
  description: string;
}

export interface Activity {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  steps: ActivityStep[];
}

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon; // Using LucideIcon type for consistency
  description: string;
}

export const categories: Category[] = [
  {
    id: "everyday-life",
    name: "Everyday Life Skills",
    icon: Home,
    description: "Learn to manage daily routines and responsibilities.",
  },
  {
    id: "kitchen-basics",
    name: "Kitchen & Food Basics",
    icon: Utensils,
    description: "Discover kitchen safety and how to make simple snacks.",
  },
  {
    id: "creativity-crafts",
    name: "Creativity & Crafts",
    icon: Palette,
    description: "Unleash your imagination with fun craft projects.",
  },
  {
    id: "nature-care",
    name: "Nature & Care Skills",
    icon: Leaf,
    description: "Connect with nature and learn basic care for plants and pets.",
  },
  {
    id: "learning-responsibility",
    name: "Learning & Responsibility",
    icon: BookOpen,
    description: "Develop important skills like organization and goal setting.",
  },
  {
    id: "jewelry-making",
    name: "Jewelry Making",
    icon: Gem,
    description: "Create beautiful accessories with simple materials.",
  },
  {
    id: "woodworking-basics",
    name: "Woodworking Basics",
    icon: Hammer,
    description: "Explore the basics of woodworking with safe, simple projects.",
  },
  {
    id: "mini-scientist",
    name: "Mini Scientist Adventures",
    icon: FlaskConical,
    description: "Explore the wonders of science with exciting experiments!",
  },
  {
    id: "storytelling-imagination",
    name: "Storytelling & Imagination",
    icon: Feather,
    description: "Unleash your creativity by crafting amazing stories and characters.",
  },
];

export const activities: Activity[] = [
  // Everyday Life Skills
  {
    id: "make-bed",
    categoryId: "everyday-life",
    title: "Make Your Bed",
    description: "Learn how to make your bed neatly every morning.",
    steps: [
      { stepNumber: 1, description: "Pull up your fitted sheet smoothly." },
      { stepNumber: 2, description: "Lay your flat sheet evenly." },
      { stepNumber: 3, description: "Place your blanket or duvet." },
      { stepNumber: 4, description: "Fluff and arrange your pillows." },
      { stepNumber: 5, description: "Add any decorative throws or cushions." },
    ],
  },
  {
    id: "pack-backpack",
    categoryId: "everyday-life",
    title: "Pack Your Backpack",
    description: "Organize your backpack for school or an outing.",
    steps: [
      { stepNumber: 1, description: "Gather all your books and notebooks." },
      { stepNumber: 2, description: "Put heavier items at the back, closest to your spine." },
      { stepNumber: 3, description: "Place lighter items on top." },
      { stepNumber: 4, description: "Organize smaller items like pencils and snacks in front pockets." },
      { stepNumber: 5, description: "Check for anything you might have forgotten!" },
    ],
  },
  {
    id: "clean-room",
    categoryId: "everyday-life",
    title: "Tidy Your Room",
    description: "Learn how to clean and organize your personal space.",
    steps: [
      { stepNumber: 1, description: "Put away all toys and books in their designated spots." },
      { stepNumber: 2, description: "Place dirty clothes in the laundry hamper." },
      { stepNumber: 3, description: "Make your bed (if you haven't already!)." },
      { stepNumber: 4, description: "Wipe down surfaces with a damp cloth (ask an adult for help)." },
      { stepNumber: 5, description: "Sweep or vacuum the floor." },
    ],
  },
  // Kitchen & Food Basics
  {
    id: "fruit-skewer",
    categoryId: "kitchen-basics",
    title: "Rainbow Fruit Skewers",
    description: "Make a colorful and healthy snack.",
    steps: [
      { stepNumber: 1, description: "Wash your hands thoroughly." },
      { stepNumber: 2, description: "Gather various fruits like strawberries, oranges, grapes, kiwi, and blueberries." },
      { stepNumber: 3, description: "Carefully cut fruits into bite-sized pieces (ask an adult for help if needed)." },
      { stepNumber: 4, description: "Thread the fruit onto skewers in a rainbow pattern." },
      { stepNumber: 5, description: "Enjoy your delicious and healthy snack!" },
    ],
  },
  {
    id: "sandwich-making",
    categoryId: "kitchen-basics",
    title: "Build Your Own Sandwich",
    description: "Learn to make a simple and tasty sandwich.",
    steps: [
      { stepNumber: 1, description: "Wash your hands and gather your ingredients: bread, spread, fillings." },
      { stepNumber: 2, description: "Place two slices of bread on a clean plate." },
      { stepNumber: 3, description: "Spread your favorite condiment (like peanut butter or cream cheese) on one or both slices." },
      { stepNumber: 4, description: "Add your fillings, such as sliced cheese, turkey, or cucumber." },
      { stepNumber: 5, description: "Put the two slices of bread together and cut your sandwich in half if you like." },
    ],
  },
  {
    id: "measure-ingredients",
    categoryId: "kitchen-basics",
    title: "Measuring Ingredients Fun",
    description: "Practice measuring liquids and solids for cooking.",
    steps: [
      { stepNumber: 1, description: "Gather measuring cups, spoons, and ingredients like water, flour, or sugar." },
      { stepNumber: 2, description: "Practice filling a measuring cup with water to the line." },
      { stepNumber: 3, description: "Scoop flour into a measuring cup and level it off with a straight edge." },
      { stepNumber: 4, description: "Use measuring spoons for smaller amounts like salt or spices." },
      { stepNumber: 5, description: "Understand that precise measurements are important for good recipes!" },
    ],
  },
  // Creativity & Crafts
  {
    id: "paper-airplane",
    categoryId: "creativity-crafts",
    title: "Fold a Paper Airplane",
    description: "Create a classic paper airplane and watch it fly!",
    steps: [
      { stepNumber: 1, description: "Take a rectangular piece of paper." },
      { stepNumber: 2, description: "Fold it in half lengthwise and then unfold." },
      { stepNumber: 3, description: "Fold the top two corners to meet the center crease." },
      { stepNumber: 4, description: "Fold the new top edges towards the center crease again." },
      { stepNumber: 5, description: "Fold the entire plane in half along the original center crease." },
      { stepNumber: 6, description: "Fold down the wings on each side." },
      { stepNumber: 7, description: "Launch your airplane and see how far it goes!" },
    ],
  },
  {
    id: "diy-bookmark",
    categoryId: "creativity-crafts",
    title: "DIY Corner Bookmark",
    description: "Make a fun and colorful bookmark for your books.",
    steps: [
      { stepNumber: 1, description: "Get a square piece of paper, scissors, and markers/crayons." },
      { stepNumber: 2, description: "Fold the square in half diagonally to make a triangle." },
      { stepNumber: 3, description: "Fold the top corner of the triangle down to the bottom edge." },
      { stepNumber: 4, description: "Take the left corner of the triangle and fold it up to meet the top corner." },
      { stepNumber: 5, description: "Repeat with the right corner." },
      { stepNumber: 6, description: "Tuck these two folded corners into the pocket you created." },
      { stepNumber: 7, description: "Decorate your bookmark with drawings and colors!" },
    ],
  },
  // Nature & Care Skills
  {
    id: "plant-seed",
    categoryId: "nature-care",
    title: "Plant a Seed",
    description: "Learn how to plant a seed and watch it grow.",
    steps: [
      { stepNumber: 1, description: "Choose a small pot and fill it with potting soil." },
      { stepNumber: 2, description: "Make a small hole in the center of the soil with your finger." },
      { stepNumber: 3, description: "Place one or two seeds in the hole." },
      { stepNumber: 4, description: "Gently cover the seeds with a little more soil." },
      { stepNumber: 5, description: "Water your seeds lightly." },
      { stepNumber: 6, description: "Place the pot in a sunny spot and remember to water it regularly!" },
    ],
  },
  {
    id: "pet-awareness",
    categoryId: "nature-care",
    title: "Basic Pet Care Awareness",
    description: "Understand how to care for common pets.",
    steps: [
      { stepNumber: 1, description: "Learn about different types of pets and their needs (food, water, shelter)." },
      { stepNumber: 2, description: "Understand that pets need fresh water every day." },
      { stepNumber: 3, description: "Know that pets need regular meals and the right kind of food." },
      { stepNumber: 4, description: "Learn about safe ways to play with pets and how to be gentle." },
      { stepNumber: 5, description: "Always ask an adult before interacting with an unfamiliar animal." },
    ],
  },
  // Learning & Responsibility
  {
    id: "set-table",
    categoryId: "learning-responsibility",
    title: "Set the Table",
    description: "Practice setting the table for a meal.",
    steps: [
      { stepNumber: 1, description: "Place a placemat at each seat (optional)." },
      { stepNumber: 2, description: "Put the dinner plate in the center of the placemat." },
      { stepNumber: 3, description: "Place the fork on the left side of the plate." },
      { stepNumber: 4, description: "Place the knife (blade facing the plate) and spoon on the right side of the plate." },
      { stepNumber: 5, description: "Put a drinking glass above the knife." },
      { stepNumber: 6, description: "Fold a napkin and place it under the fork or on the plate." },
    ],
  },
  {
    id: "follow-directions",
    categoryId: "learning-responsibility",
    title: "Following Multi-Step Directions",
    description: "Practice listening and following instructions carefully.",
    steps: [
      { stepNumber: 1, description: "Listen carefully to all the instructions before starting." },
      { stepNumber: 2, description: "Break down the task into smaller, manageable steps." },
      { stepNumber: 3, description: "Complete each step in order." },
      { stepNumber: 4, description: "If you forget a step, ask for clarification." },
      { stepNumber: 5, description: "Review your work to make sure all directions were followed." },
    ],
  },
  // Jewelry Making
  {
    id: "beaded-bracelet",
    categoryId: "jewelry-making",
    title: "Simple Beaded Bracelet",
    description: "Create a colorful bracelet using beads and elastic string.",
    steps: [
      { stepNumber: 1, description: "Gather elastic string, various beads, and scissors." },
      { stepNumber: 2, description: "Cut a piece of elastic string about 10-12 inches long." },
      { stepNumber: 3, description: "Tie a knot at one end of the string to prevent beads from falling off." },
      { stepNumber: 4, description: "Start threading your beads onto the string in any pattern you like." },
      { stepNumber: 5, description: "Once you have enough beads to fit your wrist, tie a secure double knot to close the bracelet." },
      { stepNumber: 6, description: "Trim any excess string." },
    ],
  },
  {
    id: "friendship-bracelet",
    categoryId: "jewelry-making",
    title: "Friendship Bracelet",
    description: "Learn to make a simple braided friendship bracelet.",
    steps: [
      { stepNumber: 1, description: "Choose three colors of embroidery floss or yarn." },
      { stepNumber: 2, description: "Cut three equal lengths (about 2-3 feet each)." },
      { stepNumber: 3, description: "Tie all three strands together with a knot at one end." },
      { stepNumber: 4, description: "Secure the knotted end to a surface (e.g., with tape or a clip)." },
      { stepNumber: 5, description: "Braid the three strands together, keeping them tight and even." },
      { stepNumber: 6, description: "Continue braiding until the bracelet is long enough to fit your wrist." },
      { stepNumber: 7, description: "Tie another knot at the end and trim excess floss. Share with a friend!" },
    ],
  },
  // Woodworking Basics
  {
    id: "wooden-coaster",
    categoryId: "woodworking-basics",
    title: "Decorate a Wooden Coaster",
    description: "Personalize a simple wooden coaster with paint or markers.",
    steps: [
      { stepNumber: 1, description: "Get a plain wooden coaster, paints or markers, and a brush (if using paint)." },
      { stepNumber: 2, description: "Make sure your coaster is clean and dry." },
      { stepNumber: 3, description: "Plan your design! You can draw a picture, write your name, or create a pattern." },
      { stepNumber: 4, description: "Carefully paint or draw your design onto the coaster." },
      { stepNumber: 5, description: "Let your coaster dry completely before using it." },
    ],
  },
  {
    id: "build-birdhouse",
    categoryId: "woodworking-basics",
    title: "Simple Birdhouse Kit Assembly",
    description: "Assemble a pre-cut birdhouse kit (with adult supervision).",
    steps: [
      { stepNumber: 1, description: "Gather your birdhouse kit, wood glue, and small nails/hammer (if included)." },
      { stepNumber: 2, description: "Identify all the pieces of the birdhouse (sides, front, back, roof, base)." },
      { stepNumber: 3, description: "Follow the kit's instructions to glue or nail the pieces together, one by one." },
      { stepNumber: 4, description: "Ensure all joints are secure and the birdhouse is stable." },
      { stepNumber: 5, description: "Decorate your birdhouse with paint once the glue is dry." },
      { stepNumber: 6, description: "Hang it in your garden and wait for birds to visit!" },
    ],
  },
  // Mini Scientist Adventures
  {
    id: "baking-soda-volcano",
    categoryId: "mini-scientist",
    title: "Baking Soda Volcano",
    description: "Create an exciting erupting volcano using household ingredients!",
    steps: [
      { stepNumber: 1, description: "Gather a small bottle, baking soda, vinegar, dish soap, red food coloring, and a tray." },
      { stepNumber: 2, description: "Place the bottle in the center of the tray. Mold clay or foil around it to make a volcano shape." },
      { stepNumber: 3, description: "Add 2 tablespoons of baking soda to the bottle." },
      { stepNumber: 4, description: "Add a squirt of dish soap and a few drops of red food coloring." },
      { stepNumber: 5, description: "Pour about 1/4 cup of vinegar into the bottle and watch it erupt!" },
    ],
  },
  {
    id: "rain-cloud-jar",
    categoryId: "mini-scientist",
    title: "Rain Cloud in a Jar",
    description: "Observe how rain forms by making a mini cloud in a jar.",
    steps: [
      { stepNumber: 1, description: "Fill a clear jar about 3/4 full with water." },
      { stepNumber: 2, description: "Spray shaving cream on top of the water to create a 'cloud'." },
      { stepNumber: 3, description: "Mix blue food coloring with water in a separate small cup." },
      { stepNumber: 4, description: "Use a dropper to gently add drops of blue water onto the shaving cream cloud." },
      { stepNumber: 5, description: "Watch as the 'rain' falls through the cloud into the water below!" },
    ],
  },
  // Storytelling & Imagination
  {
    id: "create-character",
    categoryId: "storytelling-imagination",
    title: "Create Your Own Character",
    description: "Design a unique character for your stories.",
    steps: [
      { stepNumber: 1, description: "Think about what your character looks like: hair color, eye color, clothes, special features." },
      { stepNumber: 2, description: "Decide on their personality: are they brave, shy, funny, smart?" },
      { stepNumber: 3, description: "Give them a name and think about their favorite things or special powers." },
      { stepNumber: 4, description: "Draw a picture of your character or write a short description." },
      { stepNumber: 5, description: "Imagine a small adventure your character could have!" },
    ],
  },
  {
    id: "story-starter",
    categoryId: "storytelling-imagination",
    title: "Story Starter Challenge",
    description: "Begin a new story with a fun prompt.",
    steps: [
      { stepNumber: 1, description: "Choose a story starter: 'One sunny morning, a talking squirrel...', or 'Deep in the enchanted forest, a hidden door...'" },
      { stepNumber: 2, description: "Think about what happens next. Who is the main character? What do they discover?" },
      { stepNumber: 3, description: "Write down or draw the first few sentences or scenes of your story." },
      { stepNumber: 4, description: "Don't worry about finishing it, just enjoy starting!" },
      { stepNumber: 5, description: "Share your story beginning with a friend or family member." },
    ],
  },
];

export const getCategoryById = (id: string) => categories.find((cat) => cat.id === id);
export const getActivitiesByCategoryId = (categoryId: string) => activities.filter((activity) => activity.categoryId === categoryId);
export const getActivityById = (id: string) => activities.find((activity) => activity.id === id);