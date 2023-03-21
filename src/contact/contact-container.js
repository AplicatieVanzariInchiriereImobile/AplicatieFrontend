import { useState } from 'react'
import NavigationBar from "../navigation-bar";
import './contact.css';

export default function ContactContainter() {
    return (
        <div>
            <NavigationBar />
            <h1 className="home-header">Pagina Contact</h1>
        </div>
    );
}