import React, { useState } from 'react'
import NavigationBar from "../navigation-bar";
import './contact.css';
import {Button, Col, Container, Row} from "reactstrap";
import logoAdresa from "../commons/images/adresa-icon.svg";
import logoEmail from "../commons/images/email-icon.svg";
import logoTelefon from "../commons/images/phone-icon.svg";

export default function ContactContainter() {
    return (
        <div>
            <NavigationBar />
            <div className="imaginePrincipalaContact">
                <h1 className="textImagineContact">Contact - Sierra Imobile</h1>
            </div>
            <div className="divContactContact">
                <Container>
                    <Row style={{marginBottom: "7%"}}>
                        <Col><p className="textContactContact">Informatii de contact</p></Col>
                    </Row>
                    <Row className="rowContact">
                        <Col xs="6"> <img src={logoAdresa} className="logoContactContact"  alt="logo adresa"/>
                            <p className="textLogoContact">Adresa</p></Col>
                        <Col xs="6"><p className="textSubLogoContact">Strada Avram Iancu nr. 25, Cluj-Napoca</p></Col>
                    </Row>
                    <Row className="rowContact">
                        <Col xs="6"><img src={logoEmail} className="logoContactContact"  alt="logo adresa"/>
                            <p className="textLogoContact">Email</p></Col>
                        <Col xs="6"><p className="textSubLogoContact">sierra.imobiliare@gmail.com</p></Col>
                    </Row>
                    <Row className="rowContact">
                        <Col xs="6"><img src={logoTelefon} className="logoContactContact"  alt="logo adresa"/>
                            <p className="textLogoContact">Telefon</p></Col>
                        <Col xs="6"><p className="textSubLogoContact">+40 726 123 456</p></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}