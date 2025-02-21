document.querySelector(".blow-button").addEventListener('click', function () {
    Swal.fire({
      title: '',
      text: ' Goodluck sa exam, lods.',
      iconHtml: `
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ff6999"/>
        </svg>`,
      customClass: {
        icon: 'custom-heart-icon',
        confirmButton: 'custom-confirm-btn',
        container: 'custom-swal-container'
      },
      confirmButtonText: 'Close'
    });
  });

  // Function to launch confetti
function launchConfetti() {
    confetti({
        particleCount: 200,       // Increase the number of confetti particles
        spread: 90,                // Increase the spread
        origin: { x: 0.5, y: 0.5 },  // Start from the center
        colors: ['#ff0', '#0ff', '#f0f', '#ff69b4'], // Custom colors
        ticks: 300,                // Set ticks to a high number for longer duration (higher value = longer time)
        gravity: 0.5,              // Adjust gravity to slow down the fall of confetti
    });
}

// Function for endless confetti
function endlessConfetti() {
    setInterval(function () {
        confetti({
            particleCount: 200,      // Larger number of particles
            spread: 90,              // Wider spread
            origin: { y: 0 },        // Origin from the top of the screen
            colors: ['#ff0', '#0ff', '#f0f', '#ff69b4'], // Custom colors
            gravity: 0.5,            // Slow down the fall of the confetti
        });
    }, 1000);  // Trigger confetti every 1 second (1000 milliseconds)
}

// Get the play music button and the audio element
const playMusicButton = document.getElementById('playMusicBtn');
const music = document.getElementById('music');

// Event listener for button click to play music and trigger confetti
playMusicButton.addEventListener('click', function () {
    // Play the music
    music.play();

    // Launch confetti
    launchConfetti();

    // Start endless confetti
    endlessConfetti();
});

  // Get the button and audio element