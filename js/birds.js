document.addEventListener('DOMContentLoaded', function() {
    // Bird song audio elements
    const birdSong = document.getElementById('bird-song');
    const playButton = document.getElementById('play-song');
    const progressBar = document.getElementById('song-progress-bar');

    if (playButton && birdSong) {
        let isPlaying = false;

        // Play/pause functionality
        playButton.addEventListener('click', function() {
            if (isPlaying) {
                birdSong.pause();
                playButton.innerHTML = '<i class="fas fa-play"></i>';
            } else {
                birdSong.play();
                playButton.innerHTML = '<i class="fas fa-pause"></i>';
            }
            isPlaying = !isPlaying;
        });

        // Update progress bar
        birdSong.addEventListener('timeupdate', function() {
            const progress = (birdSong.currentTime / birdSong.duration) * 100;
            progressBar.style.width = progress + '%';
        });

        // Reset when audio ends
        birdSong.addEventListener('ended', function() {
            playButton.innerHTML = '<i class="fas fa-play"></i>';
            isPlaying = false;
            progressBar.style.width = '0%';
        });
    }

    // Back button functionality
    const backButton = document.querySelector('.back-link');
    if (backButton) {
        backButton.addEventListener('click', function(event) {
            // Optional: add smooth transition effect when going back
            event.preventDefault();
            document.body.classList.add('fade-out');
            setTimeout(function() {
                window.location.href = backButton.getAttribute('href');
            }, 500);
        });
    }

    // Add a class to enable transitions after page load
    document.body.classList.add('loaded');
});
