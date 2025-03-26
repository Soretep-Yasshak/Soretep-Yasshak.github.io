# Lullwater Website

This repository contains a website based on an essay about Lullwater Preserve at Emory University. The website includes audio narration capabilities and interactive bird elements.

## Features

- Responsive design that works on desktops, tablets, and mobile devices
- Audio narration with adjustable playback speed (0.5x to 2.5x)
- Interactive bird elements that link to dedicated pages with bird songs
- Clean, nature-inspired design that complements the essay's content

## Project Structure

```
lullwater-website/
├── index.html               # Main page with essay content
├── american-robin.html      # Page dedicated to American Robin
├── carolina-chickadee.html  # Page dedicated to Carolina Chickadee
├── mourning-dove.html       # Page dedicated to Mourning Dove
├── references.html          # Works cited page
├── styles.css               # CSS styling for all pages
├── js/
│   ├── main.js              # JavaScript for main page functionality
│   └── birds.js             # JavaScript for bird pages functionality
├── audio/
│   ├── lullwater-narration.mp3     # Full essay narration
│   ├── american-robin-song.mp3     # American Robin song
│   ├── carolina-chickadee-song.mp3 # Carolina Chickadee song
│   └── mourning-dove-song.mp3      # Mourning Dove song
└── images/
    ├── lullwater-gate.jpg          # Entrance to Lullwater Preserve
    ├── lullwater-view.jpg          # View of Lullwater Preserve
    ├── waterfall.jpg               # Small waterfall at Lullwater
    ├── mansion.jpg                 # Lullwater Mansion
    ├── tower.jpg                   # Hydroelectric tower
    ├── american-robin.jpg          # American Robin thumbnail
    ├── american-robin-large.jpg    # American Robin full image
    ├── carolina-chickadee.jpg      # Carolina Chickadee thumbnail
    ├── carolina-chickadee-large.jpg # Carolina Chickadee full image
    ├── mourning-dove.jpg           # Mourning Dove thumbnail
    └── mourning-dove-large.jpg     # Mourning Dove full image
```

## Setup Instructions

### Prerequisites

- A web browser
- A text editor (if you want to modify the code)
- Git (for version control and deployment)

### Local Development

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/lullwater-website.git
   ```

2. Navigate to the project directory:
   ```
   cd lullwater-website
   ```

3. Open `index.html` in your web browser to view the website locally.

### Deployment to GitHub Pages

1. Create a new GitHub repository.

2. Push your code to the repository:
   ```
   git remote add origin https://github.com/yourusername/lullwater-website.git
   git branch -M main
   git push -u origin main
   ```

3. Go to your repository settings on GitHub.

4. In the "Pages" section, set the source branch to `main` and folder to `/ (root)`.

5. Click "Save" and GitHub will provide you with a URL where your site is published.

## Audio Files

For this project, you'll need to record or obtain the following audio files:

1. `lullwater-narration.mp3`: A recording of someone reading the entire essay
2. Bird song audio files:
   - `american-robin-song.mp3`
   - `carolina-chickadee-song.mp3`
   - `mourning-dove-song.mp3`

You can record these yourself or find free bird song recordings from sources like:
- [Xeno-canto](https://www.xeno-canto.org/) (CC-licensed bird recordings)
- [Macaulay Library](https://www.macaulaylibrary.org/) at the Cornell Lab of Ornithology

## Image Files

The website uses various images from Lullwater Preserve. You should replace the placeholder image filenames with actual images related to the content. Make sure you have permission to use any images you include in the website.

## Customization

Feel free to customize this website by:

- Changing colors in the CSS variables at the top of `styles.css`
- Adding more bird species or other interactive elements
- Incorporating additional media like videos or panoramic views
- Adding a contact form for feedback

## License

This project is provided for educational purposes. Please respect all copyright laws regarding images, audio, and text content. 

## Credits

- Essay content and implemenation by Peteros Kahssay for ENGRD

