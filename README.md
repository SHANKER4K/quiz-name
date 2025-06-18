# Which Element Are You? – React + Vite Quiz App

A fun, interactive quiz app built with React and Vite. Users answer a question to discover which classical element (Fire, Water, Earth, Air) matches their personality, and see a related artwork fetched from the Metropolitan Museum of Art's public API.

## Features

- ⚡ Fast development with Vite and React 19
- 🔥 Hot Module Replacement (HMR) for instant feedback
- 🧑‍💻 Modern React (hooks, context, functional components)
- 🎨 Fetches and displays artwork from the Met Museum API
- 🧭 Routing with React Router
- 🧹 Linting with ESLint and recommended React rules

## Demo

![App Screenshot](public/vite.svg) <!-- Replace with actual screenshot if available -->

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or bun

### Installation

```sh
npm install
# or
bun install
```

### Running the App

```sh
npm run dev
# or
bun run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```sh
npm run build
```

### Lint

```sh
npm run lint
```

## Project Structure

```
src/
  App.jsx           # Main app logic and routing
  main.jsx          # Entry point
  components/
    Header.jsx      # App header and navigation
    Home.jsx        # Home page
    Question.jsx    # Quiz question UI
    Results.jsx     # Results and artwork display
    UserContext.jsx # Context for user state
    UserForm.jsx    # Name input form
public/
  vite.svg          # App icon
```

## How It Works

1. Enter your name to start.
2. Answer the quiz question.
3. The app determines your element and fetches a related artwork.
4. See your result and the artwork!

## Dependencies

- react, react-dom
- react-router-dom
- vite
- @vitejs/plugin-react
- eslint (with react-hooks and react-refresh plugins)

## License

MIT
