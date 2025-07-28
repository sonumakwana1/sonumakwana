import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Auth from './Auth';

const Navbar = () => {
    const [HeaderContent, setHeader] = useState();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    useEffect(() => {
        const renderHeader = () => {
            let content;

            if (localStorage.getItem("token") !== undefined && localStorage.getItem("role") === "admin") {
                content = (
                    <header>
                        <Link to="/adminhome"><img src="assets/images/logo.png" alt="" /></Link>
                        <div className={`nav-options ${isMenuOpen ? "show" : ""}`}>
                            <Link to="/adminhome" onClick={() => setIsMenuOpen(false)}>AdminHome</Link>
                            <Link to="/message" onClick={() => setIsMenuOpen(false)}>Messages</Link>
                            <Link to="/manageproject" onClick={() => setIsMenuOpen(false)}>ManageProject</Link>
                            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Update</Link>
                            <Link to="/logout" onClick={() => setIsMenuOpen(false)}>Logout</Link>
                        </div>
                        <div className="menu" onClick={toggleMenu}>
                            <i className="fa-solid fa-bars"></i>
                        </div>
                    </header>
                );
            } else if (localStorage.getItem("token") !== undefined && localStorage.getItem("role") === "user") {
                content = (
                    <header>
                        <Link to="/"><img src="assets/images/logo.png" alt="" /></Link>
                        <div className={`nav-options ${isMenuOpen ? "show" : ""}`}>
                            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                            <Link to="/project" onClick={() => setIsMenuOpen(false)}>Project</Link>
                            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        </div>
                        <div className="menu" onClick={toggleMenu}>
                            <i className="fa-solid fa-bars"></i>
                        </div>
                    </header>
                );
            } else {
                content = (
                    <header>
                        <Link to="/"><img src="assets/images/logo.png" alt="" /></Link>
                        <div className={`nav-options ${isMenuOpen ? "show" : ""}`}>
                            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                            <Link to="/project" onClick={() => setIsMenuOpen(false)}>Project</Link>
                            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                            <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                        </div>
                        <div className="menu" onClick={toggleMenu}>
                            <i className="fa-solid fa-bars"></i>
                        </div>
                    </header>
                );
            }

            setHeader(content);
        };

        renderHeader(); // run on mount

        const interval = setInterval(renderHeader, 1000); // keep syncing with localStorage

        return () => clearInterval(interval); // cleanup
    }, [isMenuOpen]);

    return (
        <>
            <Auth />
            {HeaderContent}
        </>
    );
};

export default Navbar;
