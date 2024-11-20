// game.js

document.addEventListener("DOMContentLoaded", () => {
    const gameLinks = document.querySelectorAll('.game-list a');

    gameLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();  // Prevent the default action (opening the link)
            alert("You are about to play a fun game!");
            window.open(e.target.href, "_blank");  // Open the link in a new tab
        });
    });
});
