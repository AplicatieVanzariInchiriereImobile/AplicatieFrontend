import React, {useContext} from 'react';
import validate from "./validators/vanzari-validators";
import Button from "react-bootstrap/Button";
import * as API_VANZARE from "../api/vanzari-api";
//import APIResponseErrorMessage from "../../commons/errorhandling/api-response-error-message";
import {Col, Row} from "reactstrap";
import { FormGroup, Input, Label} from 'reactstrap';
import { withRouter } from "react-router-dom";


const buttonStyle1 = {backgroundColor: '#751212'};
//const { isLoggedIn, setIsLoggedIn, setIsAdmin } = useContext(AppContext);
class VanzariFormDelete extends React.Component {
    constructor(props) {
        super(props);
        this.toggleForm = this.toggleForm.bind(this);
        this.reloadHandler = this.props.reloadHandler;
        this.deleteVanzare = this.deleteVanzare.bind(this);

        this.state = {

            //errorStatus: 0,
            //error: null,
            formIsValid: true,
            formControls: {
                adresa: {
                    value: localStorage.getItem("adresa"),
                    placeholder: 'Adresa',
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

    deleteVanzare(vanzare) {
        return API_VANZARE.deleteVanzari(vanzare, (result, status, error) => {
            //console.log(result);
            if (result !== null && (status === 200 || status === 201)) {
                //console.log("User: " + result.email + " " + result.name + " " + result.role);
                this.reloadHandler();
                localStorage.removeItem("descriere");
                localStorage.removeItem("adresa");
                localStorage.removeItem("pret");
                localStorage.removeItem("tip");
            }
            else {
                // this.setState(({
                //     errorStatus: status,
                //     error: error
                // }));
                //window.alert("Adress already exists")
            }
        });
    }

    handleSubmit() {
        let vanzare = {
            adresa: this.state.formControls.adresa.value,
        };

        console.log(vanzare);
        this.deleteVanzare(vanzare);
    }

    //si aici render, cu componente noi
    render() {

        return (
            <div style={{backgroundColor: '#496185'}}>
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

                <Row>
                    <Col sm={{size: '4', offset: 5}}>
                        <Button style={buttonStyle1} type={"submit"} disabled={!this.state.formIsValid} onClick={() => this.handleSubmit()}>  Delete </Button>
                    </Col>
                </Row>

            </div>
        ) ;
    }
}

export default withRouter(VanzariFormDelete);
