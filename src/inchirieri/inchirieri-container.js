import React, { useState } from 'react'
import NavigationBar from "../navigation-bar";
import './inchirieri.css';
import {Button, Card, CardBody, CardHeader, Col, Input, Label, Row} from "reactstrap";
import pozaApartamentInchiriere1 from "../commons/images/Strada Plopilor, nr. 23,Cluj-Napoca.avif";
import pozaApartamentInchiriere2 from "../commons/images/Strada Mihai Eminescu, nr. 7, Apahida, Cluj.avif";
import pozaApartamentInchiriere3 from "../commons/images/Strada Plopilor, nr. 10, Cluj-Napoca.avif";
import pozaCasaInchiriere1 from "../commons/images/Strada Mihai Eminescu, nr. 1, Apahida, Cluj.avif"
import pozaCasaInchiriere2 from "../commons/images/Strada Memorandumului nr. 2, Cluj-Napoca, Cluj.avif"
import pozaCasaInchiriere3 from "../commons/images/Strada Plopilor, nr. 19, Cluj-Napoca.avif"
import pozaGarsoniereInchiriere1 from "../commons/images/Strada Mihai Eminescu, nr. 77, Apahida, Cluj.avif"
export default function InchirieriContainer() {

    const cardsApartamente = [
        {
            text1: "Apartament, 120 metri patrati, 3 camere,  baie, bucatarie",
            text2: "Strada Plopilor, nr. 23,Cluj-Napoca",
            text3: "650$",
            img: pozaApartamentInchiriere1,
        },
        {
            text1: "Apartament, etaj 5, 85 metri patrati, 5 camere",
            text2: "Strada Mihai Eminescu, nr. 7, Apahida, Cluj",
            text3: "850$",
            img: pozaApartamentInchiriere2,
        },
        {
            text1: "Apartament, etaj 4, 80 metri patrati, 4 camere",
            text2: "Strada Plopilor, nr. 10, Cluj-Napoca",
            text3: "700$",
            img: pozaApartamentInchiriere3,
        },
    ];

    const cardsCase = [
        {
            text1: "Casa, 400 metri patrati, 5 camere, 3 bai, bucatarie",
            text2: "Strada Mihai Eminescu, nr. 1, Apahida, Cluj",
            text3: "1050$",
            img: pozaCasaInchiriere1,
        },
        {
            text1: "Casa, 200 metri patrati, 2 camere, 2 bai, bucatarie",
            text2: "Strada Memorandumului nr. 2, Cluj-Napoca, Cluj",
            text3: "850$",
            img: pozaCasaInchiriere2,
        },
        {
            text1: "Casa, 150 metri patrati, 3 camere, 1 baie, bucatarie",
            text2: "Strada Plopilor, nr. 19, Cluj-Napoca",
            text3: "700$",
            img: pozaCasaInchiriere3,
        },
    ];

    const cardsGarsoniere = [
        {
            text1: "Garsoniera, etaj 2, 35 metri patrati",
            text2: "Strada Mihai Eminescu, nr. 77, Apahida, Cluj",
            text3: "200$",
            img: pozaGarsoniereInchiriere1,
        },
    ];
    return (
        <div>
            <NavigationBar />
            <div className="sidenavInchirieri">
                <p className="sideNavTextInchirieri">Sierra Imobile</p>
                <Button className="sideNavCaseInchirieri"><a className="aSidenav" href="#sectionCaseInchirieri">Case</a></Button>
                <Button className="sideNavApartamentInchirieri"><a className="aSidenav" href="#sectionApartamenteInchirieri">Apartamente</a></Button>
                <Button className="sideNavGarsoniereInchirieri"><a className="aSidenav" href="#sectionGarsoniereInchirieri">Garsoniere</a></Button>
            </div>
            <div id="sectionCaseInchirieri" className="imagineCaseInchirieri">
                <h1 className="textImagineInchirieri">Case De Inchiriat</h1>
                <Row style={{width:"80%"}}>
                    <Label className="labelSearchInchirieri">Inserati locatia dorita</Label>
                </Row>
                <Row style={{width:"80%"}}>
                    <Input className="inputSearchInchirieri" type="text"></Input>
                    <Button className="buttonSearchInchirieri">Search</Button>
                </Row>
                <Row style={{width:"80%"}}>
                    {Array.from(Array(cardsCase.length)).map((item, index) => {
                        return (
                            <Col sm={{offset: 3}} key={index}>
                                <Card
                                    onClick={() => {}}
                                    className="cardInchirieri ripple"
                                >
                                    <CardBody className="cardBodyInchirieri">
                                        <div className="divTextCardDreaptaInchirieri">
                                            <p className="textCardDreaptaInchirieri">{cardsCase[index].text1} <br></br><br></br>
                                                {cardsCase[index].text2} <br></br><br></br>
                                                {cardsCase[index].text3}
                                            </p>
                                        </div>
                                        <img
                                            alt="Card cap"
                                            src={cardsCase[index].img}
                                            className="imgCardDreaptaVanzari"
                                        />
                                    </CardBody>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>
            <div id="sectionApartamenteInchirieri" className="imagineApartamenteInchirieri">
                <h1 className="textImagineInchirieri">Apartamente De Inchiriat</h1>
                <Row style={{width:"80%"}}>
                    <Label className="labelSearchInchirieri">Inserati locatia dorita</Label>
                </Row>
                <Row style={{width:"80%"}}>
                    <Input className="inputSearchInchirieri" type="text"></Input>
                    <Button className="buttonSearchInchirieri">Search</Button>
                </Row>
                <Row style={{width:"80%"}}>
                    {Array.from(Array(cardsApartamente.length)).map((item, index) => {
                        return (
                            <Col sm={{offset: 3}} key={index}>
                                <Card
                                    onClick={() => {}}
                                    className="cardInchirieri ripple"
                                >
                                    <CardBody className="cardBodyInchirieri">
                                        <div className="divTextCardDreaptaInchirieri">
                                            <p className="textCardDreaptaInchirieri">{cardsApartamente[index].text1} <br></br><br></br>
                                                {cardsApartamente[index].text2} <br></br><br></br>
                                                {cardsApartamente[index].text3}
                                            </p>
                                        </div>
                                        <img
                                            alt="Card cap"
                                            src={cardsApartamente[index].img}
                                            className="imgCardDreaptaVanzari"
                                        />
                                    </CardBody>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>
            <div id="sectionGarsoniereInchirieri" className="imagineGarsoniereInchirieri">
                <h1 className="textImagineInchirieri">Garsoniere De Inchiriat</h1>
                <Row style={{width:"80%"}}>
                    <Label className="labelSearchInchirieri">Inserati locatia dorita</Label>
                </Row>
                <Row style={{width:"80%"}}>
                    <Input className="inputSearchInchirieri" type="text"></Input>
                    <Button className="buttonSearchInchirieri">Search</Button>
                </Row>
                <Row style={{width:"80%"}}>
                    {Array.from(Array(cardsGarsoniere.length)).map((item, index) => {
                        return (
                            <Col sm={{offset: 3}} key={index}>
                                <Card
                                    onClick={() => {}}
                                    className="cardInchirieri ripple"
                                >
                                    <CardBody className="cardBodyInchirieri">
                                        <div className="divTextCardDreaptaInchirieri">
                                            <p className="textCardDreaptaInchirieri">{cardsGarsoniere[index].text1} <br></br><br></br>
                                                {cardsGarsoniere[index].text2} <br></br><br></br>
                                                {cardsGarsoniere[index].text3}
                                            </p>
                                        </div>
                                        <img
                                            alt="Card cap"
                                            src={cardsGarsoniere[index].img}
                                            className="imgCardDreaptaVanzari"
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