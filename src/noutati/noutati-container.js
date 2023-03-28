import React, { useState } from 'react'
import NavigationBar from "../navigation-bar";
import './noutati.css';
import {Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle, Col, Container, Row} from "reactstrap";
import pozaNoutati1 from "../commons/images/pozaNoutati1.png";
import pozaNoutati2 from "../commons/images/pozaNoutati2.avif";
import pozaNoutati3 from "../commons/images/pozaNoutati3.png";
import logoAdresa from "../commons/images/adresa-icon.svg";
import logoEmail from "../commons/images/email-icon.svg";
import logoTelefon from "../commons/images/phone-icon.svg";

export default function NoutatiContainer() {
    return (
        <div>
            <NavigationBar />
            <div className="imaginePrincipalaNoutati">
                <h1 className="textImagineNoutati">Cele mai bune preturi la locuinte per metru patrat in luna actuala:</h1>
                <Card
                    className="cardNoutati ripple"
                >
                    <CardBody className="cardBodyNoutati">
                        <img
                            alt="Card cap"
                            src={pozaNoutati1}
                            className="imgCard"
                        />
                        <div className="divTextCard">
                            <p className="textCard">Casa, 200 metri patrati, 3 camere, 2 bai, bucatarie <br></br><br></br>
                                Strada Avram Iancu nr. 14, Cluj-Napoca, Cluj <br></br><br></br>
                                300.000 $ | inchiriere cu 1.000$/luna
                            </p>
                        </div>
                    </CardBody>
                </Card>
                <Card
                    className="cardNoutati ripple"
                >
                    <CardBody className="cardBodyNoutati">
                        <img
                            alt="Card cap"
                            src={pozaNoutati2}
                            className="imgCard"
                        />
                        <div className="divTextCard">
                            <p className="textCard">Casa, 250 metri patrati, 4 camere, 2 bai, bucatarie <br></br><br></br>
                                Strada Eroilor de la Tisa nr. 15, Cluj-Napoca <br></br><br></br>
                                350.000 $ | inchiriere cu 1.200$/luna
                            </p>
                        </div>
                    </CardBody>
                </Card>
                <Card
                    className="cardNoutati ripple"
                >
                    <CardBody className="cardBodyNoutati">
                        <img
                            alt="Card cap"
                            src={pozaNoutati3}
                            className="imgCard"
                        />
                        <div className="divTextCard">
                            <p className="textCard">Apartament, 120 metri patrati, 3 camere,  baie, bucatarie <br></br><br></br>
                                Strada Plopilor, nr. 23,Cluj-Napoca <br></br><br></br>
                                180.000 $ | inchiriere cu 650$/luna
                            </p>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className="divContactNoutati">
                <Container>
                    <Row>
                        <Col><p className="textContactNoutati">Informatii de contact</p></Col>
                    </Row>
                    <Row>
                        <Col xs="4"> <img src={logoAdresa} className="logoContactNoutati"  alt="logo adresa"/>
                            <p className="textLogoNoutati">Adresa</p></Col>
                        <Col xs="4"><img src={logoEmail} className="logoContactNoutati"  alt="logo adresa"/>
                            <p className="textLogoNoutati">Email</p></Col>
                        <Col xs="4"><img src={logoTelefon} className="logoContactNoutati"  alt="logo adresa"/>
                            <p className="textLogoNoutati">Telefon</p></Col>
                    </Row>
                    <Row>
                        <Col xs="4"><p className="textSubLogoNoutati">Strada Avram Iancu nr. 25, Cluj-Napoca, Romania</p></Col>
                        <Col xs="4"><p className="textSubLogoNoutati">sierra.imobiliare@gmail.com</p></Col>
                        <Col xs="4"><p className="textSubLogoNoutati">+40 726 123 456</p></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}