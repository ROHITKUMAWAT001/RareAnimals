import { NextResponse } from "next/server";

export interface Animal {
  id: string;
  name: string;
  scientificName: string;
  category: "mammals" | "birds" | "reptiles" | "marine" | "insects";
  description: string;
  habitat: string;
  diet: string;
  lifespan: string;
  conservationStatus:
    | "Least Concern"
    | "Near Threatened"
    | "Vulnerable"
    | "Endangered"
    | "Critically Endangered";
  funFact: string;
  image: string;
  population: string;
}

const animals: Animal[] = [
  {
    id: "1",
    name: "African Lion",
    scientificName: "Panthera leo",
    category: "mammals",
    description:
      "The African lion is the second-largest living cat after the tiger. Known as the 'King of the Jungle,' lions are the only cats that live in groups called prides, which consist of related females, their cubs, and a small number of adult males.",
    habitat: "Grasslands, savannas, and woodlands across sub-Saharan Africa",
    diet: "Carnivore — zebras, wildebeest, antelope, and other large prey",
    lifespan: "10–14 years in the wild, up to 20 years in captivity",
    conservationStatus: "Vulnerable",
    funFact:
      "A lion's roar can be heard from up to 5 miles (8 km) away, making it the loudest of any big cat!",
    image: "/animals/lion.png",
    population: "~23,000",
  },
  {
    id: "2",
    name: "Snow Leopard",
    scientificName: "Panthera uncia",
    category: "mammals",
    description:
      "The snow leopard, also known as the 'Ghost of the Mountains,' is a large cat native to the mountain ranges of Central and South Asia. Their beautiful thick fur and long tails help them survive in harsh, cold environments.",
    habitat:
      "Alpine and subalpine zones at elevations of 3,000–4,500 m in the mountains of Central Asia",
    diet: "Carnivore — bharal, ibex, hares, and small rodents",
    lifespan: "15–18 years in the wild",
    conservationStatus: "Vulnerable",
    funFact:
      "Snow leopards cannot roar. Instead, they communicate through chuffing, hissing, and mewing sounds!",
    image: "/animals/snow-leopard.png",
    population: "~4,000–6,500",
  },
  {
    id: "3",
    name: "African Elephant",
    scientificName: "Loxodonta africana",
    category: "mammals",
    description:
      "The African elephant is the largest living terrestrial animal. These intelligent creatures have complex social structures, demonstrate empathy, and are known for their remarkable memory and problem-solving abilities.",
    habitat: "Sub-Saharan Africa — savannas, forests, deserts, and marshes",
    diet: "Herbivore — grasses, leaves, bark, fruit, and roots",
    lifespan: "60–70 years in the wild",
    conservationStatus: "Endangered",
    funFact:
      "Elephants can recognize themselves in mirrors, showing self-awareness — one of the few animals that can do this!",
    image: "/animals/elephant.png",
    population: "~415,000",
  },
  {
    id: "4",
    name: "Red Fox",
    scientificName: "Vulpes vulpes",
    category: "mammals",
    description:
      "The red fox is the largest of the true foxes and has the widest distribution of any member of the order Carnivora. They are incredibly adaptable and can thrive in diverse environments from forests to urban areas.",
    habitat:
      "Northern Hemisphere — forests, grasslands, mountains, and urban areas",
    diet: "Omnivore — rodents, rabbits, berries, fruit, and insects",
    lifespan: "3–4 years in the wild, up to 14 years in captivity",
    conservationStatus: "Least Concern",
    funFact:
      "Foxes use the Earth's magnetic field to hunt. They can 'see' magnetic fields as a ring of shadow on their vision!",
    image: "/animals/fox.png",
    population: "Abundant (exact numbers unknown)",
  },
  {
    id: "5",
    name: "Grey Wolf",
    scientificName: "Canis lupus",
    category: "mammals",
    description:
      "The grey wolf is the largest member of the Canidae family and the ancestor of the domestic dog. Wolves are highly social animals that live and hunt in packs, with complex hierarchies and cooperative behaviors.",
    habitat: "Remote wilderness areas of North America, Europe, and Asia",
    diet: "Carnivore — elk, deer, moose, and other large ungulates",
    lifespan: "6–8 years in the wild, up to 13 years in captivity",
    conservationStatus: "Least Concern",
    funFact:
      "Wolves can travel up to 30 miles (48 km) in a single day while hunting, and their howls can be heard up to 10 miles away!",
    image: "/animals/wolf.png",
    population: "~300,000",
  },
  {
    id: "6",
    name: "Scarlet Macaw",
    scientificName: "Ara macao",
    category: "birds",
    description:
      "The scarlet macaw is a large, brilliantly colored parrot native to the tropical forests of Central and South America. Their striking red, yellow, and blue plumage makes them one of the most recognizable birds in the world.",
    habitat:
      "Tropical rainforests from southern Mexico to Amazonian Peru, Brazil, and Bolivia",
    diet: "Herbivore — nuts, fruits, seeds, and nectar",
    lifespan: "40–50 years in the wild, up to 75 years in captivity",
    conservationStatus: "Least Concern",
    funFact:
      "Macaws eat clay from riverbanks to neutralize toxins from the seeds they consume — nature's own medicine!",
    image: "/animals/macaw.png",
    population: "~20,000–50,000",
  },
  {
    id: "7",
    name: "Barn Owl",
    scientificName: "Tyto alba",
    category: "birds",
    description:
      "The barn owl is one of the most widely distributed birds in the world, found on every continent except Antarctica. Their distinctive heart-shaped face acts like a radar dish, channeling sound to their asymmetrically placed ears.",
    habitat:
      "Open countryside, farmland, woodland edges, and urban areas worldwide",
    diet: "Carnivore — small mammals, particularly voles, mice, and shrews",
    lifespan: "4–5 years in the wild, up to 15 years in captivity",
    conservationStatus: "Least Concern",
    funFact:
      "Barn owls can catch prey in complete darkness using only their hearing. Their ears are at different heights to pinpoint sound!",
    image: "/animals/owl.png",
    population: "~4.7 million",
  },
  {
    id: "8",
    name: "Green Sea Turtle",
    scientificName: "Chelonia mydas",
    category: "marine",
    description:
      "The green sea turtle is one of the largest sea turtles and the only herbivore among the different species. Named for the green color of their cartilage and fat, they play a vital role in maintaining healthy seagrass beds and coral reefs.",
    habitat:
      "Tropical and subtropical oceans worldwide — near coastlines and islands",
    diet: "Herbivore — seagrasses and algae (adults); omnivore (juveniles)",
    lifespan: "60–70+ years",
    conservationStatus: "Endangered",
    funFact:
      "Green sea turtles can hold their breath for up to 5 hours while sleeping underwater by slowing their heart rate!",
    image: "/animals/sea-turtle.png",
    population: "~85,000–90,000 nesting females",
  },
  {
    id: "9",
    name: "Great White Shark",
    scientificName: "Carcharodon carcharias",
    category: "marine",
    description:
      "The great white shark is the world's largest predatory fish, an apex predator that has existed for over 16 million years. Despite their fearsome reputation, they play a crucial role in maintaining the balance of marine ecosystems.",
    habitat:
      "Coastal and offshore waters in temperate and subtropical regions worldwide",
    diet: "Carnivore — fish, seals, sea lions, and small cetaceans",
    lifespan: "70+ years",
    conservationStatus: "Vulnerable",
    funFact:
      "Great whites can detect a single drop of blood in 100 liters of water and can sense tiny electrical impulses from living creatures!",
    image: "/animals/shark.png",
    population: "~3,500",
  },
  {
    id: "10",
    name: "Humpback Whale",
    scientificName: "Megaptera novaeangliae",
    category: "marine",
    description:
      "The humpback whale is known for its spectacular breaching behavior and complex songs that can last for hours. These gentle giants migrate up to 16,000 km each year between their feeding and breeding grounds.",
    habitat:
      "Oceans worldwide — migrate between polar feeding and tropical breeding grounds",
    diet: "Carnivore — krill and small schooling fish",
    lifespan: "45–100 years",
    conservationStatus: "Least Concern",
    funFact:
      "Humpback whale songs can travel over 10,000 miles through the ocean, and all males in a population sing the same song!",
    image: "/animals/whale.png",
    population: "~80,000",
  },
  {
    id: "11",
    name: "Panther Chameleon",
    scientificName: "Furcifer pardalis",
    category: "reptiles",
    description:
      "The panther chameleon is famous for its remarkable ability to change color. Found in the tropical forests of Madagascar, they use color changes for communication, temperature regulation, and expressing emotions rather than camouflage.",
    habitat:
      "Tropical forests and coastal lowlands of northeastern Madagascar",
    diet: "Carnivore — insects, small lizards, and occasionally vegetation",
    lifespan: "5–7 years",
    conservationStatus: "Near Threatened",
    funFact:
      "Chameleons can move their eyes independently, giving them 360° vision. Each eye can focus on different objects simultaneously!",
    image: "/animals/chameleon.png",
    population: "Unknown (declining)",
  },
  {
    id: "12",
    name: "King Cobra",
    scientificName: "Ophiophagus hannah",
    category: "reptiles",
    description:
      "The king cobra is the world's longest venomous snake, reaching lengths of up to 18 feet. Despite its fearsome reputation, the king cobra is generally shy and avoids humans. It is the only snake that builds a nest for its eggs.",
    habitat:
      "Dense highland forests of Southeast Asia and the Indian subcontinent",
    diet:
      "Carnivore — primarily other snakes (ophiophagous), lizards, and small mammals",
    lifespan: "Up to 20 years in the wild",
    conservationStatus: "Vulnerable",
    funFact:
      "A single bite from a king cobra contains enough venom to kill an elephant! Yet they'd rather flee than fight.",
    image: "/animals/cobra.png",
    population: "Unknown (declining)",
  },
  {
    id: "13",
    name: "Red-Eyed Tree Frog",
    scientificName: "Agalychnis callidryas",
    category: "reptiles",
    description:
      "The red-eyed tree frog is an iconic amphibian of Central American rainforests. Their vivid red eyes, blue and yellow striped sides, and bright green bodies serve as a defense mechanism called 'startle coloration' to confuse predators.",
    habitat:
      "Tropical lowland rainforests from southern Mexico to Colombia",
    diet: "Carnivore — insects, crickets, moths, and other small invertebrates",
    lifespan: "5–8 years",
    conservationStatus: "Least Concern",
    funFact:
      "When threatened, red-eyed tree frogs flash their bright red eyes and blue sides to startle predators — a trick called 'startle coloration'!",
    image: "/animals/tree-frog.png",
    population: "Stable (exact numbers unknown)",
  },
  {
    id: "14",
    name: "Monarch Butterfly",
    scientificName: "Danaus plexippus",
    category: "insects",
    description:
      "The monarch butterfly is famous for its incredible annual migration of up to 3,000 miles from North America to central Mexico. Their striking orange and black wings serve as a warning to predators about their toxicity.",
    habitat:
      "Open meadows, fields, marshes, and roadsides across North America",
    diet: "Herbivore — nectar from flowers; caterpillars eat milkweed",
    lifespan:
      "2–6 weeks (summer generation); 8–9 months (migratory generation)",
    conservationStatus: "Endangered",
    funFact:
      "Monarch butterflies navigate using a sun compass in their antennae and can sense the Earth's magnetic field for migration!",
    image: "/animals/butterfly.png",
    population: "Declining significantly",
  },
  {
    id: "15",
    name: "Blue Morpho Butterfly",
    scientificName: "Morpho menelaus",
    category: "insects",
    description:
      "The blue morpho is one of the world's largest butterflies, with wings spanning up to 8 inches. Their iridescent blue color isn't from pigment but from microscopic scales that reflect light, creating a shimmering effect.",
    habitat: "Tropical rainforests of Central and South America",
    diet:
      "Herbivore — fermenting fruit, tree sap, fungi, and wet mud (mud-puddling)",
    lifespan: "2–3 weeks as adults",
    conservationStatus: "Near Threatened",
    funFact:
      "The blue morpho's wings aren't actually blue! The color comes from microscopic scales that reflect blue light — it's structural coloration, not pigment!",
    image: "/animals/blue-butterfly.png",
    population: "Unknown (declining due to habitat loss)",
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  let filtered = animals;
  if (category && category !== "all") {
    filtered = animals.filter((a) => a.category === category);
  }

  return NextResponse.json({ animals: filtered, total: filtered.length });
}
