import React from 'react';
import logo_blue from '../assets/images/logo-blue.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header className="bg-gray-dark sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center py-4">

                    <div className="flex items-center">
                        <img src={logo_blue} alt="Logo" className="h-14 w-auto mr-4" />
                    </div>

                    <div className="flex md:hidden">
                        <button id="hamburger" className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path 
                                    d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>

                    <nav className="hidden md:flex md:flex-grow justify-center">
                        <ul className="flex justify-center space-x-4 text-white">
                            <li><Link to="/" className="hover:text-secondary font-bold">Home</Link></li>
                            <li><Link to="/about" className="hover:text-secondary font-bold">About Me</Link></li>
                            <li><Link to="/portfolio" className="hover:text-secondary font-bold">Portfolio</Link></li>
                            <li><Link to="/contact" className="hover:text-secondary font-bold">Contact Me</Link></li>
                        </ul>
                    </nav>

                </div>
            </header>
            <nav id="mobile-menu-placeholder" className="mobile-menu hidden flex flex-col items-center space-y-8 md:hidden">
                <ul>
                    <li><a href="index.html" className="hover:text-secondary font-bold">Home</a></li>
                    <li><a href="aboutus.html" className="hover:text-secondary font-bold">About us</a></li>
                    <li><a href="reviews.html" className="hover:text-secondary font-bold">Reviews</a></li>
                    <li><a href="portfolio.html" className="hover:text-secondary font-bold">Portfolio</a></li>
                    <li><a href="team.html" className="hover:text-secondary font-bold">Team</a></li>
                    <li><a href="404.html" className="hover:text-secondary font-bold">404</a></li>
                    <li><a href="contact.html" className="hover:text-secondary font-bold">Contact</a></li>
                </ul>
                <div className="flex flex-col mt-6 space-y-2 items-center">
                    <a href="https://spacema-dev.com/elevate-free-tailwind-business-template/"
                        className="bg-primary hover:bg-secondary text-white font-semibold px-4 py-2 rounded-full inline-block flex items-center justify-center min-w-[110px]">Download</a>
                </div>
            </nav>
        </>
    );
}