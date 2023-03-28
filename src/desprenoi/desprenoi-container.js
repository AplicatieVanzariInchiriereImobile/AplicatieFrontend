import React, { useState } from 'react'
import NavigationBar from "../navigation-bar";
import './desprenoi.css';
import {Button, Col, Container, Row} from "reactstrap";
import logoAdresa from "../commons/images/adresa-icon.svg";
import logoEmail from "../commons/images/email-icon.svg";
import logoTelefon from "../commons/images/phone-icon.svg";

export default function DesprenoiContainer() {
    return (
        <div>
            <NavigationBar />
            <div className="imaginePrincipalaDespreNoi">
                <h1 className="textImagineDespreNoi">Despre Noi</h1>
            </div>
            <div className="divPrezentareDespreNoi">
                <iframe
                    className="videoPrezentareDespreNoi"
                    width="560" height="315" src="https://www.youtube.com/embed/WDQ0cPwHYDA"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
                <p className="textPrezentareDespreNoi"> &emsp; Incepand cu anul 2018, am construit o echipa de specialisti atat in
                    marketing, cat si in businessul cu imobiliare. Avem contracte atat cu firme care se ocupa cu construirea
                    de noi imobile, pe care noi le vindem in continuare, cat si cu persoane fizice care doresc sa isi
                    vanda/inchirieze imobilul prin intermediul site-ului nostru.

                </p>
            </div>
            <div className="divContactDespreNoi">
                <Container>
                    <Row>
                        <Col><p className="textContactDespreNoi">Informatii de contact</p></Col>
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
            </div>
        </div>
    );
}