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
    
    // Bird play buttons
    const birdPlayButtons = document.querySelectorAll('.bird-play-button');
    const birdProgressBars = document.querySelectorAll('.bird-audio-progress-bar');

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

    // Bird audio functionality
    function setupBirdAudio(birdElement, audio) {
        if (!birdElement || !audio) return;
        
        // Find specific elements within this bird container
        const progressBar = birdElement.querySelector('.bird-audio-progress-bar');
        const playButton = birdElement.querySelector('.bird-play-button');
        
        if (!progressBar || !playButton) return;
        
        let isPlaying = false;
        
        // Initial click to show controls
        birdElement.addEventListener('click', function(e) {
            if (!birdElement.classList.contains('playing')) {
                stopAllBirdSounds();
                birdElement.classList.add('playing');
                audio.play();
                isPlaying = true;
                playButton.innerHTML = '<i class="fas fa-pause"></i>';
                e.stopPropagation();
            }
        });
        
        // Play/pause button inside controls
        playButton.addEventListener('click', function(e) {
            e.stopPropagation();
            if (isPlaying) {
                audio.pause();
                playButton.innerHTML = '<i class="fas fa-play"></i>';
            } else {
                audio.play();
                playButton.innerHTML = '<i class="fas fa-pause"></i>';
            }
            isPlaying = !isPlaying;
        });
        
        // Progress bar update
        audio.addEventListener('timeupdate', function() {
            const percent = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = percent + '%';
        });
        
        // Reset when audio ends
        audio.addEventListener('ended', function() {
            birdElement.classList.remove('playing');
            isPlaying = false;
            progressBar.style.width = '0%';
            playButton.innerHTML = '<i class="fas fa-play"></i>';
        });
        
        // Click outside to close controls
        document.addEventListener('click', function(e) {
            if (birdElement.classList.contains('playing') && !birdElement.contains(e.target)) {
                audio.pause();
                audio.currentTime = 0;
                birdElement.classList.remove('playing');
                isPlaying = false;
                progressBar.style.width = '0%';
                playButton.innerHTML = '<i class="fas fa-play"></i>';
            }
        });
    }
    
    if (americanRobin && carolinaChickadee && mourningDove) {
        setupBirdAudio(americanRobin, robinAudio);
        setupBirdAudio(carolinaChickadee, chickadeeAudio);
        setupBirdAudio(mourningDove, doveAudio);
    }
    
    // Function to stop all bird sounds
    function stopAllBirdSounds() {
        // Stop and reset all audio
        robinAudio.pause();
        robinAudio.currentTime = 0;
        chickadeeAudio.pause();
        chickadeeAudio.currentTime = 0;
        doveAudio.pause();
        doveAudio.currentTime = 0;
        
        // Reset all controls
        document.querySelectorAll('.bird-figure-left, .bird-figure-right').forEach(function(el) {
            el.classList.remove('playing');
        });
        
        document.querySelectorAll('.bird-audio-progress-bar').forEach(function(el) {
            el.style.width = '0%';
        });
        
        document.querySelectorAll('.bird-play-button').forEach(function(el) {
            el.innerHTML = '<i class="fas fa-play"></i>';
        });
    }
    
    // Handle initial page load animation
    document.body.classList.add('loaded');
});