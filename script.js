const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the.",
    "What do you get when you cross a snowman and a vampire? Frostbite."
];

function tellJoke() {
    const jokeElement = document.getElementById('joke');
    const laughingImage = document.getElementById('laughingImage');

    // Select a random joke
    constJoke = jokes[Math.floor(Math.random() * jokes.length)];

    // Display the joke Element.textContent = randomJoke;

    // Show the laughing emoji
    laughingImage.classList.remove('hidden');
}