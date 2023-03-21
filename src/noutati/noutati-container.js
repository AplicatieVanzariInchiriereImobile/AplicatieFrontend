import { useState } from 'react'
import NavigationBar from "../navigation-bar";
import './noutati.css';

export default function NoutatiContainer() {
    return (
        <div>
            <NavigationBar />
            <h1 className="home-header">Pagina Noutati</h1>
        </div>
    );
}