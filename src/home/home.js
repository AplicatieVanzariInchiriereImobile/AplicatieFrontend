import React, {useContext, useEffect, useState} from 'react'
import NavigationBar from "../navigation-bar";
import './home.css';
import {Button, Col, Container, Row, Modal, ModalBody, ModalHeader, Input} from "reactstrap";
import logoAdresa from '../commons/images/adresa-icon.svg';
import logoEmail from '../commons/images/email-icon.svg';
import logoTelefon from '../commons/images/phone-icon.svg';

import RegisterForm from "./components/register-form";
import LoginForm from "./components/login-form";
import {AppContext} from "../AppContext";

import * as API_HOME from "./api/home-api";

export default function Home() {
    const [value, setValue]= useState(0);

    const [selected, setSelected] = useState(false);

    const { isAdmin, isLoggedIn, emailLoggedUser, setIsAdmin, setIsLoggedIn, setEmailLoggedUser } = useContext(AppContext);

    const [LoginOrNot, setLoginOrNot]= useState();

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("isLoggedIn"));
        setIsAdmin(localStorage.getItem("isAdmin"));
        setEmailLoggedUser(localStorage.getItem("emailLoggedUser"));

        if (isLoggedIn ==="true")
            setLoginOrNot(<div className="divRegister">
                <Input style={{width: "80%"}} value={emailLoggedUser} readOnly={true}
                />
            </div>)
        else {
            setLoginOrNot(<div className="divRegister">
                <p className="textRegister">Nu ai cont?</p>
                <Button style={{
                    borderRadius: "15px 15px 15px 15px",
                    backgroundColor: "white", color: "black"
                }}
                        color="secondary"
                        onClick={toggleForm}>Register </Button>
            </div>)
            console.log("Intra bine aici")
        }
    },[isLoggedIn, emailLoggedUser])

    const toggleForm = () => {
        setSelected(!selected);
    }

    const reload = () => {
        toggleForm();
    }


    const handleIncrement = () => {
        setValue(value + 1)
    }
    const handleDecrement = () => {
        setValue(value - 1)
    }

    const fetchUserData = () => {
        return API_HOME.getUserData((result, status, err) => {

            if (result !== null && status === 200) {
                // this.setState({
                //     tableData: result,
                //     isLoaded: true
                // });
            } else {
                // this.setState(({
                //     errorStatus: status,
                //     error: err
                // }));
            }
        });
    }


    return (
        <div>
            <NavigationBar />
            {/*<h1 className="home-header">COUNTER</h1>*/}
            {/*<div className="buttons">*/}
            {/*    <button data-testid="increment" onClick={handleIncrement}>Increment</button>*/}
            {/*    <button data-testid="decrement" onClick={handleDecrement}>Decrement</button>*/}
            {/*</div>*/}
            {/*<p data-testid="count">{value}</p>*/}
            <div className="imaginePrincipala">
                <h1 className="textImagine">Sierra Imobiliare</h1>
                {/*<div className="divRegister">*/}
                {/*    <p className="textRegister">Nu ai cont?</p>*/}
                {/*    <Button style={{borderRadius:"15px 15px 15px 15px",*/}
                {/*        backgroundColor:"white", color:"black"}}*/}
                {/*             color="secondary"*/}
                {/*            onClick={toggleForm}>Register </Button>*/}
                {/*</div>*/}
                {LoginOrNot}
            </div>
            <div className="divInformatii">
                <p className="textInformatii">Anunturi imobiliare oriunde in tara</p>
                <div className="lineInformatii"></div>
                <p className="textInfoStanga"> &ensp; Case, apartamente, birouri, spatii comerciare de vanzare la cele mai bune preturi de pe piata.</p>
                <p className="textInfoDreapta"> &ensp; Optiunea de inchiriere pe perioade determinate la preturi accesibile si negociabile.</p>
            </div>
            <div className="divPrezentare">
                <iframe
                    className="videoPrezentare"
                    width="560" height="315" src="https://www.youtube.com/embed/gxNl9TQ3fqc"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
                <p className="textPrezentare"> &emsp; Incepand cu anul 2018, am construit o echipa de specialisti atat in
                    marketing, cat si in businessul cu imobiliare. Avem contracte atat cu firme care se ocupa cu construirea
                    de noi imobile, pe care noi le vindem in continuare, cat si cu persoane fizice care doresc sa isi
                    vanda/inchirieze imobilul prin intermediul site-ului nostru.

                </p>
            </div>
            <div className="divContact">
                <Container>
                    <Row>
                        <Col><p className="textContact">Informatii de contact</p></Col>
                    </Row>
                    <Row>
                        <Col xs="4"> <img src={logoAdresa} className="logoContact"  alt="logo adresa"/>
                            <p className="textLogo">Adresa</p></Col>
                        <Col xs="4"><img src={logoEmail} className="logoContact"  alt="logo adresa"/>
                            <p className="textLogo">Email</p></Col>
                        <Col xs="4"><img src={logoTelefon} className="logoContact"  alt="logo adresa"/>
                            <p className="textLogo">Telefon</p></Col>
                    </Row>
                    <Row>
                        <Col xs="4"><p className="textSubLogo">Strada Avram Iancu nr. 25, Cluj-Napoca, Romania</p></Col>
                        <Col xs="4"><p className="textSubLogo">sierra.imobiliare@gmail.com</p></Col>
                        <Col xs="4"><p className="textSubLogo">+40 726 123 456</p></Col>
                    </Row>
                </Container>

                <Modal isOpen={selected} toggle={toggleForm}
                       // className={this.props.className}
                       size="lg">
                    <ModalHeader style={{backgroundColor: '#496185'}} toggle={toggleForm}> Register: </ModalHeader>
                    <ModalBody style={{backgroundColor: '#496185'}}>
                        <RegisterForm reloadHandler={reload}/>
                    </ModalBody>
                </Modal>

            </div>
        </div>
    );
}