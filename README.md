# Quiz App
This is a simple quiz application built with React and TypeScript. It allows users to take a quiz by answering multiple-choice questions fetched from an external API.



## Technologies Used
- React: Frontend library for building user interfaces.
- TypeScript: Superset of JavaScript that adds static typing.
- HTML/CSS: Used for structuring and styling the application.
- Fetch API: Used to make HTTP requests to fetch quiz questions from the Open Trivia Database.
- Utilis: Utility function for shuffling arrays.

## How to Use
1. Clone the repository:
git clone https://github.com/dulmini1119/quiz-app.git

2. Install dependencies:
   ```bash
   cd quiz-app
   npm install

3. Start the development server:
   ```bash
   npm start

4. Open your browser and navigate to http://localhost:3000 to view the application.

## Features
- Fetches quiz questions from an external API based on the selected difficulty level.
- Allows users to answer multiple-choice questions and tracks their score.
- Displays the current question number and total number of questions.
- Provides feedback on whether the selected answer is correct or incorrect.
- Supports navigation between questions and restarting the quiz.

## Directory Structure
### src/
- components/: Contains React components.
- utilis/: Contains utility functions.
- App.tsx: Main component for the application.
- API.ts: Module for fetching quiz questions.
- index.tsx: Entry point of the application.

## Credits
- Quiz questions are fetched from the Open Trivia Database.
- This project is inspired by tutorial.



