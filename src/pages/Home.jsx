import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { searchMovies, getPopularMovies } from "../services/api"

function Home() {

    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]); // cache
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const data = await getPopularMovies();
                setMovies(data);
                setPopularMovies(data); // save a copy
            }
            catch (err) {
                console.log(err)
                setError("Failed to load movies.");
            }
            finally {
                setLoading(false);
            }
        }
        loadPopularMovies()
    }, [])

    useEffect(() => {
        if (!searchQuery) {
            setMovies(popularMovies);
            return;
        }
        searchMovies(searchQuery).then(setMovies);
    }, [searchQuery]);

    const handleSearch = (e) => {
        e.preventDefault();
    }


    return (
        <div className="space-y-10">

            {/* Search */}
            <form
                onSubmit={handleSearch}
                className="flex flex-col sm:flex-row gap-4"
            >
                <input
                    type="text"
                    placeholder="Search for movies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                />

                <button
                    type="submit"
                    className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition"
                >
                    Search
                </button>
            </form>

            {/* Movies Grid */}
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))
                }
            </div>
        </div>
    )
}

export default Home