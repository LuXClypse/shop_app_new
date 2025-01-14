import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const headerStyle = {
        backgroundColor: "#f8f9fa",
        padding: "10px",
        marginBottom: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };

    const navLinksStyle = {
        display: "flex",
        gap: "20px",
        alignItems: "center",
        listStyleType: "none",
        margin: "0",
        justifyContent: "center"
    };

    const linkStyle = {
        textDecoration: "none",
        color: "black",
        fontSize: "18px",
        padding: "10px"
    };

    return (
        <header style={headerStyle}>
            <nav style={navLinksStyle} className="nav-links">
                <h1>
                    <Link to="/" style={linkStyle}>Home</Link>
                </h1>
                <h1>
                    <Link to="/about" style={linkStyle}>About Us</Link>
                </h1>
                <h1>
                    <Link to="/contact" style={linkStyle}>Contact</Link>
                </h1>
            </nav>
        </header>
    );
};

export default Header;
