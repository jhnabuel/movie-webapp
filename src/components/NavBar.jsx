import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="bg-gray-950 shadow-md border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <Link
                    to="/"
                    className="text-2xl font-bold text-red-500 hover:text-red-400 transition">
                    Movie App
                </Link>

                <div className="flex gap-6">
                    <Link
                        to="/"
                        className="hover:text-red-400 transition">
                        Home
                    </Link>

                    <Link
                        to="/favorites"
                        className="hover:text-red-400 transition">
                        Favorites
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar