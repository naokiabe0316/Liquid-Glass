const greetings = [
  "Hello, World 👋",
  "こんにちは、世界 🌏",
  "Bonjour le monde 🇫🇷",
  "Hola mundo 🌞",
  "안녕하세요 세계 ✨",
];

let index = 0;
const heading = document.querySelector(".glass-card h1");
const button = document.getElementById("greetBtn");

button.addEventListener("click", () => {
  index = (index + 1) % greetings.length;
  heading.textContent = greetings[index];
});
