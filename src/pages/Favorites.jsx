import { useMovieContext } from "../context/FavoritesContext"
import MovieCard from "../components/MovieCard";

function Favorites() {

    const { favorites } = useMovieContext();

    if (favorites.length > 0) {
        return (
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {favorites.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center text-center py-20 space-y-4">
            <h2 className="text-3xl font-bold text-red-500">
                No Favorite Movies Yet
            </h2>
            <p className="text-gray-400 max-w-md">
                Start adding movies to your favorites and they will appear here.
            </p>
        </div>
    )
}

export default Favorites