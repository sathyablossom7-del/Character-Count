# Character Counter Project

## Description
This is a simple web-based Character Counter application built with HTML, CSS, and JavaScript.  
It allows users to type text into a textbox and dynamically counts the number of characters typed, with a maximum limit of 200 characters.

## Features
- Real-time character counting
- Maximum character limit of 200
- Responsive and user-friendly design
- Lightweight and easy to use

**Technologies Used**
HTML5 for structure
CSS3 for styling and layout
JavaScript (ES6) for character counting logic
**How It Works**
The textarea listens for the input event.
The current character length is calculated using value.length.
If the length exceeds 200, the text is trimmed using substring(0, maxChars).
The character counter text (0/200) is updated dynamically.
A warning message is shown when the limit is reached and hidden when below the limit.
**Project Structure**
character-counter/ │ ├── index.html # Main HTML file ├── style.css # Styles for layout and design └── script.js # JavaScript character counter logic
