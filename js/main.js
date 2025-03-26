document.addEventListener('DOMContentLoaded', function() {
    // Audio narration elements
    const narration = document.getElementById('narration');
    const playButton = document.getElementById('play-button');
    const speedSlider = document.getElementById('speed-slider');
    const speedValue = document.getElementById('speed-value');
    const progressBar = document.getElementById('progress-bar');

    // Bird elements
    const americanRobin = document.getElementById('american-robin');
    const carolinaChickadee = document.getElementById('carolina-chickadee');
    const mourningDove = document.getElementById('mourning-dove');
    
    // Audio files for birds
    const robinAudio = new Audio('audio/american-robin-song.mp3');
    const chickadeeAudio = new Audio('audio/carolina-chickadee-song.mp3');
    const doveAudio = new Audio('audio/mourning-dove-song.mp3');

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
        if (speedSlider && speedValue) {
            // Initial display update to make sure it's correct
            speedValue.textContent = parseFloat(speedSlider.value).toFixed(1) + 'x';
            
            // Update on slider change
            speedSlider.addEventListener('input', function() {
                const speed = parseFloat(this.value);
                narration.playbackRate = speed;
                speedValue.textContent = speed.toFixed(1) + 'x';
                console.log("Speed updated to: " + speed.toFixed(1) + 'x'); // Debug line
            });
            
            // Also handle 'change' event for better mobile support
            speedSlider.addEventListener('change', function() {
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

    // Bird chirping functionality
    if (americanRobin) {
        americanRobin.addEventListener('click', function() {
            stopAllBirdSounds();
            robinAudio.play();
        });
    }

    if (carolinaChickadee) {
        carolinaChickadee.addEventListener('click', function() {
            stopAllBirdSounds();
            chickadeeAudio.play();
        });
    }

    if (mourningDove) {
        mourningDove.addEventListener('click', function() {
            stopAllBirdSounds();
            doveAudio.play();
        });
    }
    
    // Function to stop all bird sounds
    function stopAllBirdSounds() {
        robinAudio.pause();
        robinAudio.currentTime = 0;
        chickadeeAudio.pause();
        chickadeeAudio.currentTime = 0;
        doveAudio.pause();
        doveAudio.currentTime = 0;
    }

    // Handle initial page load animation
    document.body.classList.add('loaded');
});