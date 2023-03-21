import { useState } from 'react'
import NavigationBar from "../navigation-bar";
import './desprenoi.css';

export default function DesprenoiContainer() {
    return (
        <div>
            <NavigationBar />
            <h1 className="home-header">Pagina Despre Noi</h1>
        </div>
    );
}