import React, {useContext} from 'react';
import validate from "./validators/vanzari-validators";
import Button from "react-bootstrap/Button";
import * as API_Programare from "../api/vanzari-api";
//import APIResponseErrorMessage from "../../commons/errorhandling/api-response-error-message";
import {Col, Row} from "reactstrap";
import { FormGroup, Input, Label} from 'reactstrap';
import { withRouter } from "react-router-dom";
import {AppContext} from "../../AppContext";
import DatePicker from 'react-date-picker';
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

import "../vanzari.css"


const buttonStyle1 = {backgroundColor: '#751212'};
//const { isLoggedIn, setIsLoggedIn, setIsAdmin } = useContext(AppContext);
class ProgramariFormAdd extends React.Component {
    constructor(props) {
        super(props);
        this.toggleForm = this.toggleForm.bind(this);
        this.reloadHandler = this.props.reloadHandler;
        this.insertProgramare = this.insertProgramare.bind(this);

        this.state = {

            inputDate: new Date(),
            inputTime: new Date().getHours() + ":" + new Date().getMinutes(),
            //errorStatus: 0,
            //error: null,
            formIsValid: true,
            formControls: {
                descriere: {
                    value: localStorage.getItem("descriere"),
                    placeholder: '',
                    valid: true,
                    touched: false,
                    validationRules: {
                        isRequired: true,
                    }
                },
                adresa: {
                    value: localStorage.getItem("adresa"),
                    placeholder: '',
                    valid: true,
                    touched: false,
                    validationRules: {
                        isRequired: true,
                    }
                },
                pret: {
                    value: localStorage.getItem("pret"),
                    placeholder: '',
                    valid: true,
                    touched: false,
                    validationRules: {
                        isRequired: true,
                    }
                },
                tip: {
                    value: localStorage.getItem("tip"),
                    placeholder: '',
                    valid: true,
                    touched: false,
                    validationRules: {
                        isRequired: true,
                    }
                },
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
    }

    onChangeDate(date){
        this.setState({
            inputDate: date
        });
    }

    onChangeTime(time){

        this.setState({
            inputTime: time
        });
    }

    toggleForm() {
        this.setState({collapseForm: !this.state.collapseForm});
    }

    handleChange = event => {

        const name = event.target.name;
        const value = event.target.value;

        const updatedControls = this.state.formControls;

        const updatedFormElement = updatedControls[name];

        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules);
        updatedControls[name] = updatedFormElement;

        let formIsValid = true;
        for (let updatedFormElementName in updatedControls) {
            formIsValid = updatedControls[updatedFormElementName].valid && formIsValid;
        }

        this.setState({
            formControls: updatedControls,
            formIsValid: formIsValid
        });

    };

    insertProgramare(programare) {
        return API_Programare.insertProgramare(programare, (result, status, error) => {
            console.log(result);
            if (result !== null && (status === 200 || status === 201)) {
                //console.log("User: " + result.email + " " + result.name + " " + result.role);
                //localStorage.setItem("descriere", result.descriere);
                //localStorage.setItem("adresa", result.adresa);
                //localStorage.setItem("pret", result.pret);
                //localStorage.setItem("tip", result.tip);
                if(result.adresaImobil === "")
                {
                    window.alert("A reservation at this hour already exists. You can try at: " + result.data);
                }
                else
                {
                    this.reloadHandler();
                }
            }
            else {
                //window.alert("Adress already exists")
                //alerta cu o recomandare
                //console.log("Intra aici")
            }
        });
    }

    handleSubmit() {
        let programare = {
            descriereImobil: this.state.formControls.descriere.value,
            adresaImobil: this.state.formControls.adresa.value,
            pretImobil: this.state.formControls.pret.value,
            tipImobil: this.state.formControls.tip.value,
            data: this.state.inputDate.getFullYear() + "-" + this.state.inputDate.getMonth() + "-" + this.state.inputDate.getDay()
                + "T" + this.state.inputTime + ":00",
            emailUser: localStorage.getItem("emailLoggedUser")
        };

        if((this.state.inputDate.getMonth() + 1)<10)
        {
            if(this.state.inputDate.getDate()<10)
            {
                programare.data = this.state.inputDate.getFullYear() + '-0' + (this.state.inputDate.getMonth() + 1) + '-0' + this.state.inputDate.getDate() + "T" + this.state.inputTime
                    + ":00";
            }
            else
            {
                programare.data = this.state.inputDate.getFullYear() + '-0' + (this.state.inputDate.getMonth() + 1) + '-' + this.state.inputDate.getDate() + "T" + this.state.inputTime
                    + ":00";
            }
        }
        else
        {
            if(this.state.inputDate.getDate()<10)
            {
                programare.data = this.state.inputDate.getFullYear() + '-' + (this.state.inputDate.getMonth() + 1) + '-0' + this.state.inputDate.getDate() + "T" + this.state.inputTime
                    + ":00";
            }
        }

        console.log(programare.data);
        let minutes = this.state.inputTime.substr(3, 4);
        if(minutes === "00")
        {
            this.insertProgramare(programare);
        }
        else
        {
            window.alert("Minutes must be 00");
        }
    }

    //si aici render, cu componente noi
    render() {

        return (
            <div style={{backgroundColor: '#496185'}}>
                <FormGroup id='descriere'>
                    <Label for='descriereField'> Descriere: </Label>
                    <Input name='descriere' id='descriereField' placeholder={this.state.formControls.descriere.placeholder}
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.descriere.value}
                           touched={this.state.formControls.descriere.touched? 1 : 0}
                           valid={this.state.formControls.descriere.valid}
                           required
                           readOnly={true}
                    />
                    {this.state.formControls.descriere.touched && !this.state.formControls.descriere.valid &&
                        <div className={"error-message"}> * Descriere must have a valid format</div>}
                </FormGroup>

                <FormGroup id='adresa'>
                    <Label for='adresaField'> Adresa: </Label>
                    <Input name='adresa' id='adresaField' placeholder={this.state.formControls.adresa.placeholder}
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.adresa.value}
                           touched={this.state.formControls.adresa.touched? 1 : 0}
                           valid={this.state.formControls.adresa.valid}
                           required
                           readOnly={true}
                    />
                    {this.state.formControls.adresa.touched && !this.state.formControls.adresa.valid &&
                        <div className={"error-message"}> * Adresa must have a valid format</div>}
                </FormGroup>

                <FormGroup id='pret'>
                    <Label for='pretField'> Pret: </Label>
                    <Input name='pret' id='pretField' placeholder={this.state.formControls.pret.placeholder}
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.pret.value}
                           touched={this.state.formControls.pret.touched? 1 : 0}
                           valid={this.state.formControls.pret.valid}
                           required
                           readOnly={true}
                    />
                    {this.state.formControls.pret.touched && !this.state.formControls.pret.valid &&
                        <div className={"error-message"}> * Pret must have a valid format</div>}
                </FormGroup>

                <FormGroup id='tip'>
                    <Label for='tiptField'> Tip: </Label>
                    <Input name='tip' id='tipField' placeholder={this.state.formControls.tip.placeholder}
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.tip.value}
                           touched={this.state.formControls.tip.touched? 1 : 0}
                           valid={this.state.formControls.tip.valid}
                           required
                           readOnly={true}
                    />
                    {this.state.formControls.tip.touched && !this.state.formControls.tip.valid &&
                        <div className={"error-message"}> * Tip must have a valid format</div>}
                </FormGroup>

                <Label> Date: </Label>
                <DatePicker className = {"datePicker"} value={this.state.inputDate} onChange={ this.onChangeDate } format={"yyyy-MM-dd"}/>

                <Label> Hour: </Label>
                <TimePicker className = {"timePicker"} value={this.state.inputTime} onChange={this.onChangeTime}/>

                <Row>
                    <Col sm={{size: '4', offset: 5}}>
                        <Button style={buttonStyle1} type={"submit"} disabled={!this.state.formIsValid} onClick={() => this.handleSubmit()}>  Submit </Button>
                    </Col>
                </Row>

            </div>
        ) ;
    }
}

export default withRouter(ProgramariFormAdd);
