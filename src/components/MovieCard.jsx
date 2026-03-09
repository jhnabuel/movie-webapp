import { useState, useEffect } from "react"
import { useMovieContext } from "../context/FavoritesContext";

function MovieCard({ movie }) {

    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
    const favorite = isFavorite(movie.id)

    function onFavoriteClick() {
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    return (
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">

            {/* Poster */}
            <div className="relative group">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-80 object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                    <button
                        onClick={onFavoriteClick}
                        className={`    px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition ${favorite ? "active" : ""}`}
                    >
                        ❤️ Favorite
                    </button>
                </div>
            </div>

            {/* Info */}
            <div className="p-4">
                <h3 className="text-lg font-bold">{movie.title}</h3>
                <p className="text-gray-400 text-sm">{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    )
}

export default MovieCard