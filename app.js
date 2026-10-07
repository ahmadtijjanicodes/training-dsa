const names = [
  "Alex", "Avery", "Bailey", "Blake", "Casey",
  "Charlie", "Drew", "Elliot", "Emerson", "Finley",
];

function greetRandomNames(count = 50) {
  for (let i = 0; i < count; i += 1) {
    const name = names[Math.floor(Math.random() * names.length)];
    console.log(`Hello, ${name}!`);
  }
}

greetRandomNames();