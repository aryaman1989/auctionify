// For a real auction, set this to false
export const isDemo = true;

// Specify item details
let items = [
  {
    primaryImage:
      "./img/items/DALL·E 2023-12-17 17.21.27 - A whimsical cat wearing a tiny wizard hat and cape, standing on its hind legs, with a background of twinkling stars and a crescent moon.png",
    title: "The Wizard Cat",
    subtitle: "A Magical Evening",
    detail:
      "A whimsical cat donning a wizard's attire, standing on hind legs amidst a starry night sky and a crescent moon, casting a spell of charm.",
    secondaryImage:
      "./img/items/DALL·E 2023-12-17 17.21.27 - A whimsical cat wearing a tiny wizard hat and cape, standing on its hind legs, with a background of twinkling stars and a crescent moon.png",
    currency: "£",
    amount: 55,
    endTime: "2023-04-25T00:00:00+00:00",
  },
  {
    primaryImage:
      "./img/items/DALL·E 2023-12-17 17.21.44 - A playful cat lounging in a hammock, surrounded by lush green plants, with a relaxed expression and a tropical drink beside it.png",
    title: "The Relaxing Cat",
    subtitle: "Tropical Bliss",
    detail:
      "A carefree cat lounging in a hammock, encircled by vibrant greenery, sipping a tropical beverage, embodying the essence of relaxation.",
    secondaryImage:
      "./img/items/DALL·E 2023-12-17 17.21.44 - A playful cat lounging in a hammock, surrounded by lush green plants, with a relaxed expression and a tropical drink beside it.png",
    currency: "£",
    amount: 60,
    endTime: "2023-04-25T00:05:00+00:00",
  },
  {
    primaryImage:
      "./img/items/DALL·E 2023-12-17 17.21.50 - A curious cat peering out of a spaceship window, with distant planets and stars visible in the background, giving a sense of wonder and explorat.png",
    title: "The Space Explorer Cat",
    subtitle: "Cosmic Curiosity",
    detail:
      "A curious cat gazing from a spaceship window, the cosmos with planets and stars stretching out behind, capturing the spirit of space exploration.",
    secondaryImage:
      "./img/items/DALL·E 2023-12-17 17.21.50 - A curious cat peering out of a spaceship window, with distant planets and stars visible in the background, giving a sense of wonder and explorat.png",
    currency: "£",
    amount: 20,
    endTime: "2023-04-25T00:10:00+00:00",
  },
  {
    primaryImage:
      "./img/items/DALL·E 2023-12-17 17.21.53 - A cat dressed as a detective, complete with a trench coat and magnifying glass, standing in a dimly lit alleyway, looking mysterious and ready t.png",
    title: "The Detective Cat",
    subtitle: "Mystery in the Alley",
    detail:
      "A mysterious detective cat, clad in a classic trench coat, magnifying glass in paw, standing in a shadowy alley, ready to unravel mysteries.",
    secondaryImage:
      "./img/items/DALL·E 2023-12-17 17.21.53 - A cat dressed as a detective, complete with a trench coat and magnifying glass, standing in a dimly lit alleyway, looking mysterious and ready t.png",
    currency: "£",
    amount: 0,
    endTime: "2023-04-25T00:15:00+00:00",
  },
  {
    primaryImage:
      "./img/items/DALL·E 2023-12-17 17.21.58 - A cat artist painting a masterpiece, surrounded by colorful paint tubes and brushes, with a beret on its head and a look of deep concentration.png",
    title: "The Artist Cat",
    subtitle: "A Stroke of Genius",
    detail:
      "An artistic cat deeply engrossed in painting, surrounded by a kaleidoscope of paint tubes and brushes, a beret perched artistically atop its head.",
    secondaryImage:
      "./img/items/DALL·E 2023-12-17 17.21.58 - A cat artist painting a masterpiece, surrounded by colorful paint tubes and brushes, with a beret on its head and a look of deep concentration.png",
    currency: "£",
    amount: 4,
    endTime: "2023-04-25T00:20:00+00:00",
  },
  {
    primaryImage:
      "./img/items/DALL·E 2023-12-17 17.22.00 - A majestic cat wearing a king's crown and robe, sitting on a luxurious throne with an expression of regal dignity, in a grand castle hall.png",
    title: "The Regal Cat",
    subtitle: "Royal Elegance",
    detail:
      "A majestic cat adorned with a regal crown and robe, seated upon a throne in a grand hall, exuding noble grace and dignity.",
    secondaryImage:
      "./img/items/DALL·E 2023-12-17 17.22.00 - A majestic cat wearing a king's crown and robe, sitting on a luxurious throne with an expression of regal dignity, in a grand castle hall.png",
    currency: "£",
    amount: 0,
    endTime: "2023-04-25T00:25:00+00:00",
  },
  {
    primaryImage:
      "./img/items/DALL·E 2023-12-17 17.22.03 - A cat astronaut floating in space, with a tiny space helmet and a backdrop of a colorful nebula and twinkling stars, looking amazed by the cosmi.png",
    title: "The Astronaut Cat",
    subtitle: "Starry-Eyed Explorer",
    detail:
      "An astronaut cat adrift in the vastness of space, tiny helmet on, awestruck by the surrounding nebula and stars, a true cosmic adventurer.",
    secondaryImage:
      "./img/items/DALL·E 2023-12-17 17.22.03 - A cat astronaut floating in space, with a tiny space helmet and a backdrop of a colorful nebula and twinkling stars, looking amazed by the cosmi.png",
    currency: "£",
    amount: 99,
    endTime: "2023-04-25T00:30:00+00:00",
  },
  {
    primaryImage:
      "./img/items/DALL·E 2023-12-17 17.22.07 - A cat chef cooking in a bustling kitchen, wearing a chef's hat and apron, surrounded by delicious food and kitchen utensils, looking focused and.png",
    title: "The Chef Cat",
    subtitle: "Culinary Master",
    detail:
      "A professional chef cat in the midst of a bustling kitchen, donning a chef's hat and apron, surrounded by an array of delectable dishes and utensils.",
    secondaryImage:
      "./img/items/DALL·E 2023-12-17 17.22.07 - A cat chef cooking in a bustling kitchen, wearing a chef's hat and apron, surrounded by delicious food and kitchen utensils, looking focused and.png",
    currency: "£",
    amount: 0,
    endTime: "2023-04-25T00:35:00+00:00",
  },
  {
    primaryImage:
      "./img/items/DALL·E 2023-12-17 17.22.10 - A cat ninja stealthily moving through a moonlit garden, with a small sword and a mask, surrounded by blooming cherry blossoms and a tranquil pon.png",
    title: "The Ninja Cat",
    subtitle: "Moonlit Stealth",
    detail:
      "A stealthy ninja cat, equipped with a tiny sword and mask, silently traversing a moonlit garden adorned with cherry blossoms and a serene pond.",
    secondaryImage:
      "./img/items/DALL·E 2023-12-17 17.22.10 - A cat ninja stealthily moving through a moonlit garden, with a small sword and a mask, surrounded by blooming cherry blossoms and a tranquil pon.png",
    currency: "£",
    amount: 12,
    endTime: "2023-04-25T00:40:00+00:00",
  },
  {
    primaryImage:
      "./img/items/DALL·E 2023-12-17 17.22.12 - A cat pirate standing on the deck of a ship, with a pirate hat and an eye patch, holding a treasure map, with the ocean and a tropical island in.png",
    title: "The Pirate Cat",
    subtitle: "Seafaring Adventurer",
    detail:
      "A rugged pirate cat on a ship's deck, eye patch and pirate hat in place, clutching a treasure map, with the ocean and an island in the backdrop.",
    secondaryImage:
      "./img/items/DALL·E 2023-12-17 17.22.12 - A cat pirate standing on the deck of a ship, with a pirate hat and an eye patch, holding a treasure map, with the ocean and a tropical island in.png",
    currency: "£",
    amount: 6,
    endTime: "2023-04-25T00:45:00+00:00",
  },
  {
    primaryImage:
      "./img/items/DALL·E 2023-12-17 17.22.15 - A cat superhero flying through the city skyline, wearing a cape and a mask, with tall buildings and a setting sun in the background, looking her.png",
    title: "The Superhero Cat",
    subtitle: "Hero of the Skies",
    detail:
      "A valiant superhero cat soaring through the cityscape, cape fluttering, mask on, against a backdrop of towering buildings and a setting sun.",
    secondaryImage:
      "./img/items/DALL·E 2023-12-17 17.22.15 - A cat superhero flying through the city skyline, wearing a cape and a mask, with tall buildings and a setting sun in the background, looking her.png",
    currency: "£",
    amount: 3,
    endTime: "2023-04-25T00:50:00+00:00",
  },
  {
    primaryImage:
      "./img/items/DALL·E 2023-12-17 17.22.17 - A cat relaxing on a sunny beach, with sunglasses, a sunhat, and a beach ball, surrounded by palm trees, with a clear blue ocean and a bright sky.png",
    title: "The Beach Cat",
    subtitle: "Sandy Serenity",
    detail:
      "A relaxed cat enjoying a beach day, equipped with sunglasses and sunhat, beach ball at the ready, surrounded by palm trees and a crystal blue ocean.",
    secondaryImage:
      "./img/items/DALL·E 2023-12-17 17.22.17 - A cat relaxing on a sunny beach, with sunglasses, a sunhat, and a beach ball, surrounded by palm trees, with a clear blue ocean and a bright sky.png",
    currency: "£",
    amount: 7,
    endTime: "2023-04-25T00:55:00+00:00",
  },
];

export async function getItems() {
  // Insert the index from the unsorted array as the item ID
  items.forEach((item, idx) => (item.id = idx));
  // Parse endTime from ISO 8601 string
  items.forEach((item) => (item.endTime = new Date(item.endTime)));
  // Sort items in ascending end time
  items.sort((a, b) => a["endTime"] - b["endTime"]);
  return items;
}
