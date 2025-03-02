import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/home.html">GiftLink</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/app">Home</a> {/* Link to /app */}
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/app">Gifts</a> {/* Updated Link to /app */}
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/app/search">Search</a> {/* Link to /app/search */}
                    </li>
                </ul>
            </div>
        </nav>
    );
}