# Movie App

A React application that allows users to search and browse movies using an external movie database API. Users can explore titles and save their favorite movies for quick access later.

---

## Features

- Search movies by title
- Browse and explore movie listings
- Save and remove favorite movies
- Responsive UI styled with Tailwind CSS

---

## Tech Stack

This project was built using the following technologies:

- React
- JavaScript (ES6+)
- TMDB API (or your external movie API)
- Fetch API
- Tailwind CSS

---

## Project Structure

```
movie-app/
│
├─ public/
│   └─ index.html
│
├─ src/
│   ├─ components/      # Reusable UI components (MovieCard, SearchBar, etc.)
│   ├─ pages/           # Application pages or views (Home, Favorites)
│   ├─ services/        # API calls and movie data fetching
│   ├─ context/         # Global state for favorites
│   ├─ App.jsx
│   └─ main.jsx
│
├─ .env.example
├─ .gitignore
├─ package.json
└─ README.md
```

---

## Installation

Clone the repository.

```bash
git clone https://github.com/jhnabuel/movie-webapp.git
```

Move into the project directory.

```bash
cd movie-webapp
```

Install dependencies.

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory and add your API key.

```
VITE_MOVIE_API_KEY=your_api_key_here
VITE_MOVIE_API_BASE_URL=https://api.themoviedb.org/3
```

You can obtain a free API key by creating an account at [themoviedb.org](https://www.themoviedb.org/).

---

## Running the Application

Start the development server.

```bash
npm run dev
```

Then open the application in your browser.

```
http://localhost:5173
```

---

## Learning Objectives

This project was built as a learning exercise to practice:

- Fetching and displaying data from a third-party REST API
- React component structure and props
- State management with hooks (`useState`, `useEffect`,)
- Persisting favorites using useContext or local state
- Responsive UI design with Tailwind CSS

---

## Future Improvements

Possible improvements for the project:

- Add user authentication to persist favorites across sessions.
- Add movie filtering by genre, year, or rating.
- Implement pagination or infinite scroll.
- Add a dedicated movie detail page.
- Improve error handling and loading states
- Add a "watched" list feature


---

## License

This project is intended for educational purposes.