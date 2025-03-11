// Function for "Yes" button
document.querySelector(".Yesbtn").addEventListener("click", () => {
    alert("Yay! I love you too! 💖");
    document.body.style.backgroundColor = "#ffccd5"; // Change background to a lighter pink

    // Change the question text and add a GIF
    const question = document.querySelector(".question");
    question.innerHTML = "I love you too!";

    const gif = document.createElement("img");
    gif.src = "https://media2.giphy.com/media/IzXiddo2twMmdmU8Lv/200.webp";
    gif.alt = "Happy GIF";
    gif.style.marginTop = "20px";
    gif.style.width = "300px"; // Adjust GIF size
    document.body.appendChild(gif);
});

// Function for "No" button
document.querySelector(".Nobtn").addEventListener("click", () => {
    alert("Why not? 😢");
    document.body.style.backgroundColor = "#d3d3d3"; // Change background to grey
});

// Adding interactivity to make the "No" button move
document.querySelector(".Nobtn").addEventListener("mouseover", (event) => {
    const button = event.target;
    const x = Math.random() * (window.innerWidth - 100); // Random X position
    const y = Math.random() * (window.innerHeight - 50); // Random Y position
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});
