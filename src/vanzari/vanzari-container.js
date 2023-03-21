import { useState } from 'react'
import NavigationBar from "../navigation-bar";
import './vanzari.css';

export default function VanzariContainer() {
    return (
        <div>
            <NavigationBar />
            <h1 className="home-header">Pagina Vanzari</h1>
        </div>
    );
}