import React, { useState } from 'react'
import NavigationBar from "../navigation-bar";
import './vanzari.css';
import {Button, Card, CardBody, Col, Input, Label, Row} from "reactstrap";

import pozaApartamentVanzare1 from "../commons/images/pozaApartamentVanzare1.avif";
import pozaCasaVanzare1 from "../commons/images/pozaCasaVanzare1.avif";
import pozaCasaVanzare2 from "../commons/images/pozaCasaVanzare2.avif";
import pozaCasaVanzare3 from "../commons/images/pozaCasaVanzare3.avif";
import pozaGarsoniereVanzare1 from "../commons/images/pozaGarsonieraVanzare1.avif";
import pozaGarsoniereVanzare2 from "../commons/images/pozaGarsonieraVanzare2.avif";

const cardsApartamente = [
    {
        text1: "Apartament, etaj 1,  70 metri patrati, 3 camere",
        text2: "Strada Dorobantilor  nr. 14, Cluj-Napoca, Cluj",
        text3: "125000$",
        img: pozaApartamentVanzare1,
    },
];

const cardsCase = [
    {
        text1: "Casa, 200 metri patrati, 3 camere, 2 bai, bucatarie",
        text2: "Strada Avram Iancu nr. 14, Cluj-Napoca, Cluj",
        text3: "300000$",
        img: pozaCasaVanzare1,
    },
    {
        text1: "Casa, 250 metri patrati, 3 camere, 2 bai, bucatarie",
        text2: "Strada Memorandumului nr. 28, Cluj-Napoca, Cluj",
        text3: "400000$",
        img: pozaCasaVanzare2,
    },
    {
        text1: "Casa, 100 metri patrati, 2 camere, 1 baie, bucatarie",
        text2: "Strada Avram Iancu nr. 18, Cluj-Napoca, Cluj",
        text3: "100000$",
        img: pozaCasaVanzare3,
    },
];

const cardsGarsoniere = [
    {
        text1: "Garsoniera, etaj 4,  30 metri patrati",
        text2: "Strada Dorobantilor  nr. 14, Cluj-Napoca, Cluj",
        text3: "75000$",
        img: pozaGarsoniereVanzare1,
    },
    {
        text1: "Garsoniera, etaj 1, 50 metri patrati",
        text2: "Strada Memorandumului nr. 28, Cluj-Napoca, Cluj",
        text3: "100000$",
        img: pozaGarsoniereVanzare2,
    },
];

export default function VanzariContainer() {
    return (
        <div>
            <NavigationBar />
            <div className="sidenav">
                <p className="sideNavText">Sierra Imobile</p>
                <Button className="sideNavCase"><a className="aSidenav" href="#sectionCase">Case</a></Button>
                <Button className="sideNavApartament"><a className="aSidenav" href="#sectionApartamente">Apartamente</a></Button>
                <Button className="sideNavGarsoniere"><a className="aSidenav" href="#sectionGarsoniere">Garsoniere</a></Button>
            </div>
            <div id="sectionCase" className="imagineCaseVanzare">
                <h1 className="textImagineVanzari">Case De Vanzare</h1>
                <Row style={{width:"80%"}}>
                    <Label className="labelSearch">Inserati locatia dorita</Label>
                </Row>
                <Row style={{width:"80%"}}>
                    <Input className="inputSearch" type="text"></Input>
                    <Button className="buttonSearch">Search</Button>
                </Row>
                <Row style={{width:"80%"}}>
                    {Array.from(Array(cardsCase.length)).map((item, index) => {
                        return (
                            <Col sm={{offset: 3}} key={index}>
                                <Card
                                    onClick={() => {}}
                                    className="cardVanzari ripple"
                                >
                                    <CardBody className="cardBodyVanzari">
                                        <div className="divTextCardVanzari">
                                            <p className="textCardVanzari">{cardsCase[index].text1} <br></br><br></br>
                                                {cardsCase[index].text2} <br></br><br></br>
                                                {cardsCase[index].text3}
                                            </p>
                                        </div>
                                        <img
                                            alt="Card cap"
                                            src={cardsCase[index].img}
                                            className="imgCardVanzari"
                                        />
                                    </CardBody>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>
            <div id="sectionApartamente" className="imagineApartamenteVanzare">
                <h1 className="textImagineVanzari">Apartamente De Vanzare</h1>
                <Row style={{width:"80%"}}>
                    <Label className="labelSearch">Inserati locatia dorita</Label>
                </Row>
                <Row style={{width:"80%"}}>
                    <Input className="inputSearch" type="text"></Input>
                    <Button className="buttonSearch">Search</Button>
                </Row>
                <Row style={{width:"80%"}}>
                    {Array.from(Array(cardsApartamente.length)).map((item, index) => {
                        return (
                            <Col sm={{offset: 3}} key={index}>
                                <Card
                                    onClick={() => {}}
                                    className="cardVanzari ripple"
                                >
                                    <CardBody className="cardBodyVanzari">
                                        <div className="divTextCardVanzari">
                                            <p className="textCardVanzari">{cardsApartamente[index].text1} <br></br><br></br>
                                                {cardsApartamente[index].text2} <br></br><br></br>
                                                {cardsApartamente[index].text3}
                                            </p>
                                        </div>
                                        <img
                                            alt="Card cap"
                                            src={cardsCase[index].img}
                                            className="imgCardVanzari"
                                        />
                                    </CardBody>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>
            <div id="sectionGarsoniere" className="imagineGarsoniereVanzare">
                <h1 className="textImagineVanzari">Garsoniere De Vanzare</h1>
                <Row style={{width:"80%"}}>
                    <Label className="labelSearch">Inserati locatia dorita</Label>
                </Row>
                <Row style={{width:"80%"}}>
                    <Input className="inputSearch" type="text"></Input>
                    <Button className="buttonSearch">Search</Button>
                </Row>
                <Row style={{width:"80%"}}>
                    {Array.from(Array(cardsGarsoniere.length)).map((item, index) => {
                        return (
                            <Col sm={{offset: 3}} key={index}>
                                <Card
                                    onClick={() => {}}
                                    className="cardVanzari ripple"
                                >
                                    <CardBody className="cardBodyVanzari">
                                        <div className="divTextCardVanzari">
                                            <p className="textCardVanzari">{cardsGarsoniere[index].text1} <br></br><br></br>
                                                {cardsGarsoniere[index].text2} <br></br><br></br>
                                                {cardsGarsoniere[index].text3}
                                            </p>
                                        </div>
                                        <img
                                            alt="Card cap"
                                            src={cardsCase[index].img}
                                            className="imgCardVanzari"
                                        />
                                    </CardBody>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
}