// import React from 'react';
//
// import BackgroundImg from '../commons/images/energyImage.jpeg';
//
// import {Button, Card, Col, Container, Jumbotron, Modal, ModalBody, ModalHeader, Row} from 'reactstrap';
// import HomeForm from "./components/home-form";
//
// import CookieUser from "../cookieUser";
//
// import * as API_HOME from "../home/api/home-api";
//
// import NavigationBar from "../navigation-bar";
//
// const backgroundStyle = {
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     width: "100%",
//     height: "1920px",
//     backgroundImage: `url(${BackgroundImg})`
// };
// const textStyle = {color: 'white', textAlign: 'center', marginTop : '7%'};
// const titleStyle = {color: 'white', textAlign: 'center'};
// const buttonStyle1 = {display: 'inline', margin:'1% 1% 1% 48%', backgroundColor: '#751212'};


// class Home extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.toggleForm = this.toggleForm.bind(this);
//         this.reload = this.reload.bind(this);
//         this.state = {
//             selected: false,
//             collapseForm: false,
//             tableData: [],
//             isLoaded: false,
//             errorStatus: 0,
//             error: null
//         };
//
//         this.cookieRef = React.createRef();
//     }
//
//     toggleForm() {
//         this.setState({selected: !this.state.selected});
//     }
//
//     componentDidMount() {
//         this.fetchRoleLogout();
//         this.cookieRef.current.clearOnLogout();
//
//     }
//
//     fetchRoleLogout() {
//         // return API_HOME.getRoleLogout((result, status, err) => {
//         //
//         //     if (result !== null && status === 200) {
//         //         //daca nu avem admin, redirectionam la home
//         //         if(result === "neLogat")
//         //         {
//         //
//         //         }
//         //         else if(result === 'admin' || result === 'Admin')
//         //         {
//         //             //let newPath = '/user'
//         //             //this.props.history.push(newPath);
//         //         }
//         //         else if(result === 'client' || result === 'Client')
//         //         {
//         //
//         //         }
//         //     } else {
//         //         this.setState(({
//         //             errorStatus: status,
//         //             error: err
//         //         }));
//         //     }
//         // });
//
//         return (result) => {
//
//             if (result !== null) {
//                 //daca nu avem admin, redirectionam la home
//                 if(result === "neLogat")
//                 {
//
//                 }
//                 else if(result === 'admin' || result === 'Admin')
//                 {
//                     //let newPath = '/user'
//                     //this.props.history.push(newPath);
//                 }
//                 else if(result === 'client' || result === 'Client')
//                 {
//
//                 }
//             }
//         };
//     }
//
//
//
//     reload() {
//         this.setState({
//             isLoaded: false
//         });
//         this.toggleForm();
//         //this.fetchRoleLogout()
//         //this.fetchUsers();
//     }
//
//
//     render() {
//
//         return (
//
//             <div>
//                 <NavigationBar />
//                 <Jumbotron fluid style={backgroundStyle}>
//                     <Container fluid>
//                         <h1 className="display-3" style={titleStyle}>Energy consumption</h1>
//                         <p className="lead" style={textStyle}> <b>Energy consumption has to be managed by an intelligent grid when it comes to highly populated areas. Smart-grid technologies allow for the integration of renewable energy into the grid as well as energy from distributed sources.
//
//                             </b> </p>
//                         <hr className="my-2"/>
//                         <Row>
//                             <Button color="primary" style={buttonStyle1} onClick={this.toggleForm}>Login</Button>
//                         </Row>
//                     </Container>
//                 </Jumbotron>
//
//                 <Modal isOpen={this.state.selected} toggle={this.toggleForm}
//                        className={this.props.className} size="lg">
//                     <ModalHeader style={{backgroundColor: '#1a5ec8'}} toggle={this.toggleForm}> Login: </ModalHeader>
//                     <ModalBody style={{backgroundColor: '#1a5ec8'}}>
//                         <HomeForm reloadHandler={this.reload}/>
//                     </ModalBody>
//                 </Modal>
//                 <CookieUser ref={this.cookieRef} />
//             </div>
//         )
//     };
// }
//
// export default Home

import React, { useState } from 'react'
import NavigationBar from "../navigation-bar";
import './home.css';
import {Button, Col, Container, Row} from "reactstrap";
import logo from "../commons/images/building-icon.svg";
import logoAdresa from '../commons/images/adresa-icon.svg';

export default function Home() {
    const [ value, setValue]= useState(0);

    const handleIncrement = () => {
        setValue(value + 1)
    }
    const handleDecrement = () => {
        setValue(value - 1)
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
                <div className="divRegister">
                    <p className="textRegister">Nu ai cont?</p>
                    <Button style={{borderRadius:"15px 15px 15px 15px",
                        backgroundColor:"white", color:"black"}}
                             color="secondary">Register </Button>
                </div>
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
                        <Col xs="4"> <img src={logoAdresa} width={"80"} height={"50"} />Adresa</Col>
                        <Col xs="4">.col-6</Col>
                        <Col xs="4">.col-6</Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}