document.addEventListener('DOMContentLoaded', function() {
    // Audio narration elements
    const narration = document.getElementById('narration');
    const playButton = document.getElementById('play-button');
    const speedSlider = document.getElementById('speed-slider');
    const speedValue = document.getElementById('speed-value');
    const progressBar = document.getElementById('progress-bar');

    // Bird card elements
    const americanRobinCard = document.getElementById('american-robin');
    const carolinaChickadeeCard = document.getElementById('carolina-chickadee');
    const mourningDoveCard = document.getElementById('mourning-dove');
    
    // Modal elements
    const modal = document.getElementById('bird-modal');
    const modalContent = document.getElementById('modal-content');
    const closeButton = document.querySelector('.close-button');

    // Audio narration functionality
    if (playButton && narration) {
        let isPlaying = false;

        playButton.addEventListener('click', function() {
            if (isPlaying) {
                narration.pause();
                playButton.innerHTML = '<i class="fas fa-play"></i>';
            } else {
                narration.play();
                playButton.innerHTML = '<i class="fas fa-pause"></i>';
            }
            isPlaying = !isPlaying;
        });

        // Update playback speed
        if (speedSlider) {
            speedSlider.addEventListener('input', function() {
                const speed = parseFloat(this.value);
                narration.playbackRate = speed;
                speedValue.textContent = speed.toFixed(1) + 'x';
            });
        }

        // Update progress bar
        narration.addEventListener('timeupdate', function() {
            const progress = (narration.currentTime / narration.duration) * 100;
            progressBar.style.width = progress + '%';
        });

        // Reset when audio ends
        narration.addEventListener('ended', function() {
            playButton.innerHTML = '<i class="fas fa-play"></i>';
            isPlaying = false;
        });
    }

    // Bird card functionality - redirect to bird pages
    if (americanRobinCard) {
        americanRobinCard.addEventListener('click', function() {
            window.location.href = 'american-robin.html';
        });
    }

    if (carolinaChickadeeCard) {
        carolinaChickadeeCard.addEventListener('click', function() {
            window.location.href = 'carolina-chickadee.html';
        });
    }

    if (mourningDoveCard) {
        mourningDoveCard.addEventListener('click', function() {
            window.location.href = 'mourning-dove.html';
        });
    }

    // Modal functionality (for mobile/alternative approach)
    // This is an alternative to the separate pages approach
    function openModal(birdName, imgSrc, description, audioSrc) {
        modalContent.innerHTML = `
            <h3>${birdName}</h3>
            <img src="${imgSrc}" alt="${birdName}" style="max-width: 100%; margin-bottom: 1rem;">
            <p>${description}</p>
            <div class="audio-player bird-song">
                <h4>Listen to the ${birdName}</h4>
                <audio controls src="${audioSrc}"></audio>
            </div>
        `;
        modal.style.display = 'block';
    }

    if (closeButton) {
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle initial page load animation
    document.body.classList.add('loaded');
});
