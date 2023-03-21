import { useState } from 'react'
import NavigationBar from "../navigation-bar";
import './inchirieri.css';

export default function InchirieriContainer() {
    return (
        <div>
            <NavigationBar />
            <h1 className="home-header">Pagina Inchirieri</h1>
        </div>
    );
}