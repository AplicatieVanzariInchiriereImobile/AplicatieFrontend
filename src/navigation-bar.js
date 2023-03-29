import React from 'react'
import logo from './commons/images/building-icon.svg';
import './navigation-bar.css';
import {
    Button,
    Nav,
    Navbar,
    NavbarBrand,
    NavLink,
} from 'reactstrap';


//aici e o constanta, e un div
const NavigationBar = () => (
    <div style={{display:"unset"}}>
        <Navbar color="dark" light expand="md" style={{position:"sticky", top:"0vmax", width:"100%", zIndex:"1"}}>
            <NavbarBrand href="/">
                <img src={logo} width={"50"}
                     height={"35"} />
            </NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavLink className="navlink1" href="/noutati">Noutati</NavLink>
                <NavLink className="navlink1" href="/desprenoi">DespreNoi</NavLink>
                <NavLink className="navlink1" href="/inchirieri">Inchirieri</NavLink>
                <NavLink className="navlink1" href="/vanzari">Vanzari</NavLink>
                <NavLink className="navlink1" href="/contact">Contact</NavLink>
                <Button style={{borderRadius:"15px 15px 15px 15px", position: "absolute", right: "30px",
                    backgroundColor:"white", color:"black"}}>Login </Button>

            </Nav>
        </Navbar>
    </div>
);

export default NavigationBar
