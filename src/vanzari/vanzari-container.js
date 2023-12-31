import React, {useContext, useEffect, useState} from 'react'
import NavigationBar from "../navigation-bar";
import './vanzari.css';
import {Button, Card, CardBody, Col, Input, Label, Modal, ModalBody, ModalHeader, Row} from "reactstrap";

import * as API_VANZARI from "./api/vanzari-api";
import {AppContext} from "../AppContext";
import VanzariFormAdd from "./components/vanzari-form-add";
import VanzariFormUpdate from "./components/vanzari-form-update";
import VanzariFormDelete from "./components/vanzari-form-delete";
import ProgramariFormAdd from "./components/programari-form-add";
import RezervationChartForm from "./components/rezervations-chart-form";


export default function VanzariContainer() {

    const [cardsApartamente, setCardsApartamente] = useState([]);
    const [cardsCase, setCardsCase] = useState([]);
    const [cardsGarsoniere, setCardsGarsoniere] = useState([]);

    const { isAdmin, isLoggedIn, emailLoggedUser, setIsAdmin, setIsLoggedIn, setEmailLoggedUser,
        descriere, setDescriere, adresa, setAdresa, pret, setPret, tip, setTip} = useContext(AppContext);
    const [selectedAdd, setSelectedAdd] = useState(false);
    const [selectedUpdate, setSelectedUpdate] = useState(false);
    const [selectedDelete, setSelectedDelete] = useState(false);
    const [AdminOrNot, setAdminOrNot]= useState();

    const [selectedAddProgramare, setSelectedAddProgramare] = useState(false);
    const [selectedViewChart, setSelectedViewChart] = useState(false);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const fetchVanzari = () => {
        return API_VANZARI.getVanzari((result, status, err) => {
            setCardsApartamente([]);
            setCardsCase([]);
            setCardsGarsoniere([]);
            console.log(result);
            if (result !== null && status === 200) {
                //result.forEach(
                //    {} => setCardsApartamente(oldArray => [...oldArray, vanzare]))
                for(const vanzare of result.lista_vanzari)
                {
                    if(vanzare.tip === "Apartament")
                    {
                        setCardsApartamente(oldArray => [...oldArray, vanzare])
                    }
                    else if(vanzare.tip === "Casa")
                    {
                        setCardsCase(oldArray => [...oldArray, vanzare])
                    }
                    else if(vanzare.tip === "Garsoniera")
                    {
                        setCardsGarsoniere(oldArray => [...oldArray, vanzare])
                    }
                }
            } else {
            }
        });
    }

    useEffect(() => {
        fetchVanzari();


        setIsLoggedIn(localStorage.getItem("isLoggedIn"));
        setIsAdmin(localStorage.getItem("isAdmin"));
        setAdresa(localStorage.getItem("adresa"));

        if (isLoggedIn ==="true" && isAdmin === "true" && localStorage.getItem("adresa") !== "")
            setAdminOrNot(<div style={{paddingTop: "2%", paddingBottom:"2%", width:"100%", height:"fit-content"}}>
                <h2>Admin Operations - Last Selected: {adresa}</h2>
                <Button style={{marginRight: "1%"}} className="buttonSearch" onClick={toggleFormAdd}>Add</Button>
                <Button style={{marginRight: "1%"}} className="buttonSearch" onClick={toggleFormUpdate}>Update</Button>
                <Button className="buttonSearch" onClick={toggleFormDelete}>Delete</Button>
            </div>)
        else if (isLoggedIn ==="true" && isAdmin === "true" && localStorage.getItem("adresa") === "")
            setAdminOrNot(<div style={{paddingTop: "2%", paddingBottom:"2%", width:"100%", height:"fit-content"}}>
                <h2>Admin Operations - Last Selected: {adresa}</h2>
                <Button style={{marginRight: "1%"}} className="buttonSearch" onClick={toggleFormAdd}>Add</Button>
            </div>)
        else if (isLoggedIn ==="true" && isAdmin === "false" && localStorage.getItem("adresa") !== ""){
            setAdminOrNot(<div style={{paddingTop: "2%", paddingBottom:"2%", width:"100%", height:"fit-content"}}>
                <h2>Add Reservation - Last Selected: {adresa}</h2>
                <Button style={{marginRight: "1%"}} className="buttonSearch" onClick={toggleFormAddProgramare}>Add Reservation</Button>
            </div>)
            }
        else if (isLoggedIn ==="true" && isAdmin === "false" && localStorage.getItem("adresa") === ""){
            setAdminOrNot(<div style={{paddingTop: "2%", paddingBottom:"2%", width:"100%", height:"fit-content"}}>
                <h2>Add Reservation - Last Selected: {adresa}</h2>
            </div>)
        }
        else{
            setAdminOrNot(<div>
            </div>)
        }

    },[isLoggedIn, isAdmin, selectedAdd, selectedUpdate, selectedDelete, adresa, selectedAddProgramare])


    const toggleFormAdd = () => {
        setSelectedAdd(!selectedAdd);
    }

    const toggleFormUpdate = () => {
        setSelectedUpdate(!selectedUpdate);
    }

    const toggleFormDelete = () => {
        setSelectedDelete(!selectedDelete);
    }

    const toggleFormAddProgramare = () => {
        setSelectedAddProgramare(!selectedAddProgramare);
    }

    const toggleFormViewChart = (adresaChart) => {

        if(selectedViewChart === false)
        {
            localStorage.setItem("adresaChart", adresaChart);
        }
        else
        {
            localStorage.setItem("adresaChart", "");
        }
        setSelectedViewChart(!selectedViewChart);
    }

    const reload = (whichOne) => {
        if(whichOne === 1)
        {
            toggleFormAdd();
        }
        else if(whichOne === 2)
        {
            toggleFormUpdate();
        }
        else if(whichOne === 3)
        {
            toggleFormDelete();
        }
        else if(whichOne === 4)
        {
            toggleFormAddProgramare();
        }
        else if(whichOne === 5)
        {
            toggleFormViewChart();
        }
    }

    const setSelectedFields = (descriere, adresa, pret, tip) => {
        if (isLoggedIn ==="true")
        {
            setDescriere(descriere);
            localStorage.setItem("descriere", descriere);
            setAdresa(adresa);
            localStorage.setItem("adresa", adresa);
            setPret(pret);
            localStorage.setItem("pret", pret);
            setTip(tip);
            localStorage.setItem("tip", tip);
        }
    }


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
                {AdminOrNot}
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
                            <Row style={{width:"100%"}}>
                                <Col sm={{offset: 2}} key={index}>
                                    <Card
                                        onClick={() => setSelectedFields(cardsCase[index].descriere, cardsCase[index].adresa, cardsCase[index].pret,
                                            "Casa")}
                                        className="cardVanzari ripple"
                                    >
                                        <CardBody className="cardBodyVanzari">
                                            <div className="divTextCardVanzari">
                                                <p className="textCardVanzari">{cardsCase[index].descriere} <br></br><br></br>
                                                    {cardsCase[index].adresa} <br></br><br></br>
                                                    {cardsCase[index].pret + "$"}
                                                </p>
                                            </div>
                                            <img
                                                alt="Card cap"
                                                src={require("../commons/images/" + cardsCase[index].adresa + ".avif")}
                                                className="imgCardVanzari"
                                            />
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col style={{width:"10%", marginTop:"12%"}}>
                                    <Button className="buttonSearch" type={"submit"} onClick={() => toggleFormViewChart(cardsCase[index].adresa)}>  View Chart </Button>
                                </Col>
                            </Row>
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
                            <Row style={{width:"100%"}}>
                                <Col sm={{offset: 2}} key={index}>
                                    <Card
                                        onClick={() => setSelectedFields(cardsApartamente[index].descriere, cardsApartamente[index].adresa, cardsApartamente[index].pret,
                                            "Apartament")}
                                        className="cardVanzari ripple"
                                    >
                                        <CardBody className="cardBodyVanzari">
                                            <div className="divTextCardVanzari">
                                                <p className="textCardVanzari">{cardsApartamente[index].descriere} <br></br><br></br>
                                                    {cardsApartamente[index].adresa} <br></br><br></br>
                                                    {cardsApartamente[index].pret + "$"}
                                                </p>
                                            </div>
                                            <img
                                                alt="Card cap"
                                                src={require("../commons/images/" + cardsApartamente[index].adresa + ".avif")}
                                                className="imgCardVanzari"
                                            />
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col style={{width:"10%", marginTop:"12%"}}>
                                    <Button className="buttonSearch" type={"submit"} onClick={() => toggleFormViewChart(cardsApartamente[index].adresa)}>  View Chart </Button>
                                </Col>
                            </Row>
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
                            <Row style={{width:"100%"}}>
                                <Col sm={{offset: 2}} key={index}>
                                    <Card
                                        onClick={() => setSelectedFields(cardsGarsoniere[index].descriere, cardsGarsoniere[index].adresa, cardsGarsoniere[index].pret,
                                            "Garsoniera")}
                                        className="cardVanzari ripple"
                                    >
                                        <CardBody className="cardBodyVanzari">
                                            <div className="divTextCardVanzari">
                                                <p className="textCardVanzari">{cardsGarsoniere[index].descriere} <br></br><br></br>
                                                    {cardsGarsoniere[index].adresa} <br></br><br></br>
                                                    {cardsGarsoniere[index].pret + "$"}
                                                </p>
                                            </div>
                                            <img
                                                alt="Card cap"
                                                src={require("../commons/images/" + cardsGarsoniere[index].adresa + ".avif")}
                                                // src={require( `../commons/images/${cardsGarsoniere[index].adresa}.avif`)}
                                                className="imgCardVanzari"
                                            />
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col style={{width:"10%", marginTop:"12%"}}>
                                    <Button className="buttonSearch" type={"submit"} onClick={() => toggleFormViewChart(cardsGarsoniere[index].adresa)}>  View Chart </Button>
                                </Col>
                            </Row>
                        );
                    })}
                </Row>
            </div>

            <Modal isOpen={selectedAdd} toggle={toggleFormAdd}
                // className={this.props.className}
                   size="lg">
                <ModalHeader style={{backgroundColor: '#496185'}} toggle={toggleFormAdd}> Add: </ModalHeader>
                <ModalBody style={{backgroundColor: '#496185'}}>
                    <VanzariFormAdd reloadHandler={() => reload(1)}/>
                </ModalBody>
            </Modal>


            <Modal isOpen={selectedUpdate} toggle={toggleFormUpdate}
                // className={this.props.className}
                   size="lg">
                <ModalHeader style={{backgroundColor: '#496185'}} toggle={toggleFormUpdate}> Update: </ModalHeader>
                <ModalBody style={{backgroundColor: '#496185'}}>
                    <VanzariFormUpdate reloadHandler={() => reload(2)}/>
                </ModalBody>
            </Modal>

            <Modal isOpen={selectedDelete} toggle={toggleFormDelete}
                // className={this.props.className}
                   size="lg">
                <ModalHeader style={{backgroundColor: '#496185'}} toggle={toggleFormDelete}> Delete: </ModalHeader>
                <ModalBody style={{backgroundColor: '#496185'}}>
                    <VanzariFormDelete reloadHandler={() => reload(3)}/>
                </ModalBody>
            </Modal>

            <Modal isOpen={selectedAddProgramare} toggle={toggleFormAddProgramare}
                // className={this.props.className}
                   size="lg">
                <ModalHeader style={{backgroundColor: '#496185'}} toggle={toggleFormAddProgramare}> Add Reservation: </ModalHeader>
                <ModalBody style={{backgroundColor: '#496185'}}>
                    <ProgramariFormAdd reloadHandler={() => reload(4)}/>
                </ModalBody>
            </Modal>

            <Modal isOpen={selectedViewChart} toggle={toggleFormViewChart}
                // className={this.props.className}
                   size="lg">
                <ModalHeader style={{backgroundColor: '#496185'}} toggle={toggleFormViewChart}> Reservation Chart for {monthNames[new Date().getMonth()]}: </ModalHeader>
                <ModalBody style={{backgroundColor: '#496185'}}>
                    <RezervationChartForm reloadHandler={() => reload(5)}/>
                </ModalBody>
            </Modal>
        </div>
    );
}