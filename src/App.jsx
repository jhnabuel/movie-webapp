import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import { MovieProvider } from './context/FavoritesContext'

function App() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <MovieProvider>
        <NavBar />
        <main className="max-w-7xl mx-auto px-6 py-10">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </main>
      </MovieProvider>
    </div>
  )
}

export default App
