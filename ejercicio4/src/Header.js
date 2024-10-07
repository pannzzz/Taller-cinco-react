    import React from 'react';
    import './Header.css';


    const Header = () => {
    return (
        <header className="bg-purple-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold">
            Menu pan
            </div>

            {/* Menú de navegación */}
            <nav>
            <ul className="flex space-x-6">
                <li>
                <a href="#home" className="hover:text-gray-300 transition">Home</a>
                </li>
                <li>
                <a href="#about" className="hover:text-gray-300 transition">About</a>
                </li>
                <li>
                <a href="#services" className="hover:text-gray-300 transition">Services</a>
                </li>
                <li>
                <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
                </li>
            </ul>
            </nav>
        </div>
        </header>
    );
    }

    export default Header;
