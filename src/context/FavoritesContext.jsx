import { createContext, use, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export const useMovieContext = () => useContext(FavoritesContext)

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    // Get the favorites in local storage, converting it to string to array
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")
        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    // Every time state favorites changes, we update what we are storing in local storage
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie]) // this gets the previous values inside in favorites, update state to array
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }
    return <FavoritesContext.Provider value={value}>
        {children}
    </FavoritesContext.Provider>
}