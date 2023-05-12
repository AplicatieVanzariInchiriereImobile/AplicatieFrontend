import React, {useContext, useEffect, useState} from 'react'
import logo from './commons/images/building-icon.svg';
import './navigation-bar.css';
import {
    Button, Input, Modal, ModalBody, ModalHeader,
    Nav,
    Navbar,
    NavbarBrand,
    NavLink,
} from 'reactstrap';

import LoginForm from "./home/components/login-form";
import {AppContext} from "./AppContext";
import * as API_HOME from "./home/api/home-api";
//import RegisterForm from "./home/components/register-form";

//aici e o constanta, e un div
export default function NavigationBar() {

    const [selected, setSelected] = useState(false);
    const { isAdmin, isLoggedIn, emailLoggedUser, setIsAdmin, setIsLoggedIn, setEmailLoggedUser,
        descriere, setDescriere, adresa, setAdresa, pret, setPret, tip, setTip } = useContext(AppContext);
    const [LoginOrNot, setLoginOrNot]= useState();

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("isLoggedIn"));
        setIsAdmin(localStorage.getItem("isAdmin"));
        setEmailLoggedUser(localStorage.getItem("emailLoggedUser"));
        if (isLoggedIn==="true")
            setLoginOrNot(<div>
                         <Button
                            onClick={() => handleLogout(setIsLoggedIn, setIsAdmin, setEmailLoggedUser)}
                             style={{
                                 borderRadius: "15px 15px 15px 15px", position: "absolute", right: "30px",
                                 backgroundColor: "white", color: "black"
                            }}>Logout </Button>
                     </div>)
        else {
            setLoginOrNot(<div>
                         <Button
                             onClick={toggleForm}
                             style={{
                                 borderRadius: "15px 15px 15px 15px", position: "absolute", right: "30px",
                                 backgroundColor: "white", color: "black"
                             }}>Login </Button>
                     </div>)
        }
    },[isLoggedIn])

    const toggleForm = () => {
        setSelected(!selected);
    }

    const reload = () => {
        toggleForm();
    }

    const logoutUser = (setIsLoggedIn, setIsAdmin, setEmailLoggedUser) => {
        return API_HOME.logoutUser((result, status, error) => {
            //console.log(result);
            if ((status === 200 || status === 201)) {
                //console.log("User: " + result.email + " " + result.name + " " + result.role);
                //this.reloadHandler();
                setIsLoggedIn(false);
                localStorage.setItem("isLoggedIn", false);
                setEmailLoggedUser("");
                localStorage.setItem("emailLoggedUser","");
                setIsAdmin(false);
                localStorage.setItem("isAdmin", false);
                setEmailLoggedUser("");
                localStorage.setItem("emailLoggedUser","");
                setDescriere("");
                localStorage.setItem("descriere", "");
                setAdresa("");
                localStorage.setItem("adresa", "");
                setPret("");
                localStorage.setItem("pret", "");
                setTip("");
                localStorage.setItem("tip", "");
            }
            else {
                // this.setState(({
                //     errorStatus: status,
                //     error: error
                // }));
                //window.alert("Incorect credentials")
            }
        });
    }

    const handleLogout = (setIsLoggedIn, setIsAdmin, setEmailLoggedUser) => {

        logoutUser(setIsLoggedIn, setIsAdmin, setEmailLoggedUser);
        //this.props.appContext.setIsAdmin(true);
        //console.log(this.props.appContext.isAdmin);
    }


    // if(isLoggedIn)
    //     LoginOrNot = <div>
    //         <Button
    //             onClick={() => handleLogout(setIsLoggedIn, setIsAdmin, setEmailLoggedUser)}
    //             style={{
    //                 borderRadius: "15px 15px 15px 15px", position: "absolute", right: "30px",
    //                 backgroundColor: "white", color: "black"
    //             }}>Logout </Button>
    //     </div>
    // else
    //    LoginOrNot = <div>
    //         <Button
    //             onClick={toggleForm}
    //             style={{
    //                 borderRadius: "15px 15px 15px 15px", position: "absolute", right: "30px",
    //                 backgroundColor: "white", color: "black"
    //             }}>Login </Button>
    //     </div>

    return (<div style={{display: "unset"}}>
        <Navbar color="dark" light expand="md" style={{position: "sticky", top: "0vmax", width: "100%", zIndex: "1"}}>
            <NavbarBrand href="/">
                <img src={logo} width={"50"}
                     height={"35"}/>
            </NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavLink className="navlink1" href="/noutati">Noutati</NavLink>
                <NavLink className="navlink1" href="/desprenoi">DespreNoi</NavLink>
                <NavLink className="navlink1" href="/inchirieri">Inchirieri</NavLink>
                <NavLink className="navlink1" href="/vanzari">Vanzari</NavLink>
                <NavLink className="navlink1" href="/contact">Contact</NavLink>
                {LoginOrNot}

            </Nav>
        </Navbar>

        <Modal isOpen={selected} toggle={toggleForm}
            // className={this.props.className}
               size="lg">
            <ModalHeader style={{backgroundColor: '#496185'}} toggle={toggleForm}> Login: </ModalHeader>
            <ModalBody style={{backgroundColor: '#496185'}}>
                <LoginForm reloadHandler={reload}/>
            </ModalBody>
        </Modal>
    </div>)
};

//export default NavigationBar
