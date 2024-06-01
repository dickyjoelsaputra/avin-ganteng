import React from 'react';
import gambar_ig from '../assets/images/social_icons/instagram.png';
import logo from '../assets/images/logo-gray.png';



export default function Footer() {
    return (
        <>
            <footer className="py-10">
                {/* <img src={logo} alt="Logo" className="h-14 w-auto mx-auto mb-5" /> */}
                    <span className="block text-center text-gray-txt font-semibold">© 2024. All Rights Reserved.
                        Developerd by <a href="https://spacema-dev.com" className="text-primary">Spacema-dev</a>
                    </span>
                    <ul className="flex justify-center mt-10 space-x-8">
                        <li>
                            <a href="#">
                                <img src={gambar_ig} alt="Instagram" className="h-10 w-10"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/images/social_icons/youtube.png" alt="YouTube" className="h-10 w-10"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/images/social_icons/facebook.png" alt="Facebook" className="h-10 w-10"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/images/social_icons/twitter.png" alt="Twitter" className="h-10 w-10"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/images/social_icons/linkedin.png" alt="LinkedIn" className="h-10 w-10"/>
                            </a>
                        </li>
                    </ul>
            </footer>

        </>
    );
}