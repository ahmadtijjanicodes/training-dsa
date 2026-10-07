const names = [
  "Alex", "Avery", "Bailey", "Blake", "Casey",
  "Charlie", "Drew", "Elliot", "Emerson", "Finley",
  "Harper", "Hayden", "Jamie", "Jordan", "Kai",
  "Logan", "Morgan", "Parker", "Quinn", "Reese",
  "Riley", "Robin", "Rowan", "Sam", "Sawyer",
  "Skyler", "Taylor", "Aiden", "Amara", "Chloe",
  "Daniel", "Elena", "Ethan", "Fatima", "Grace",
  "Hana", "Isaac", "Jamal", "Leah", "Liam",
  "Maya", "Noah", "Olivia", "Priya", "Sofia",
  "Theo", "Victor", "Willow", "Yuki", "Zara",
];

function greetRandomNames(count = 50) {
  for (let i = 0; i < count; i += 1) {
    const name = names[Math.floor(Math.random() * names.length)];
    console.log(`Hello, ${name}!`);
  }
}

greetRandomNames();