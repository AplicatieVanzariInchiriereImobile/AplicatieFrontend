import React from 'react';
import validate from "./validators/home-validators";
import Button from "react-bootstrap/Button";
import * as API_HOME from "../api/home-api";
//import APIResponseErrorMessage from "../../commons/errorhandling/api-response-error-message";
import {Col, Row} from "reactstrap";
import { FormGroup, Input, Label} from 'reactstrap';
import { withRouter } from "react-router-dom";
import {AppContext} from "../../AppContext";

//import CookieUser from "../../cookieUser";

//import { instanceOf } from "prop-types";
//import { withCookies, Cookies } from "react-cookie";

const buttonStyle1 = {backgroundColor: '#751212'};

class RegisterForm extends React.Component {

    // static propTypes = {
    //     cookies: instanceOf(Cookies).isRequired
    // };
    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.toggleForm = this.toggleForm.bind(this);
        this.reloadHandler = this.props.reloadHandler;
        //this.sendUser = this.sendUser.bind(this);

        //this.cookieRef = React.createRef();

        this.state = {

            //errorStatus: 0,
            //error: null,
            formIsValid: false,
            formControls: {
                name: {
                    value: '',
                    placeholder: 'Name',
                    valid: false,
                    touched: false,
                    validationRules: {
                        isRequired: true,
                    }
                },
                email: {
                    value: '',
                    placeholder: 'Email',
                    valid: false,
                    touched: false,
                    validationRules: {
                        emailValidator: true,
                        isRequired: true,
                    }
                },
                password: {
                    value: '',
                    placeholder: 'Password',
                    valid: false,
                    touched: false,
                    validationRules: {
                        passwordValidator: true
                    }
                },
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
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

    registerUser(user) {
        return API_HOME.registerUser(user, (result, status, error) => {
            //console.log(result);
            if (result !== null && (status === 200 || status === 201)) {
                console.log("User: " + result.email + " " + result.name + " " + result.role);
                this.reloadHandler();
            }
            else {
                window.alert("Email already in use");
            }
        });
    }


    //cand dai submit dai register la persoana
    handleRegister() {
        let user = {
            name: this.state.formControls.name.value,
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
        };

        console.log(user);
        this.registerUser(user);
    }

    //si aici render, cu componente noi
    render() {

        const { isLoggedIn, setIsLoggedIn, setIsAdmin } = this.context;
        const logString = isLoggedIn.toString();
        console.log(logString);
        //setIsLoggedIn(false);
        //console.log(isLoggedIn);

        return (
            <div style={{backgroundColor: '#496185'}}>
                <FormGroup id='name'>
                    <Label for='nameField'> Name:</Label>
                    <Input name='name' id='nameField' placeholder={this.state.formControls.name.placeholder}
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.name.value}
                           touched={this.state.formControls.name.touched? 1 : 0}
                           valid={this.state.formControls.name.valid}
                           required
                    />
                    {this.state.formControls.name.touched && !this.state.formControls.name.valid &&
                        <div className={"error-message"}> * Name must have a valid format</div>}
                </FormGroup>

                <FormGroup id='email'>
                    <Label for='emailField'> Email: </Label>
                    <Input name='email' id='emailField' placeholder={this.state.formControls.email.placeholder}
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.email.value}
                           touched={this.state.formControls.email.touched? 1 : 0}
                           valid={this.state.formControls.email.valid}
                           required
                    />
                    {this.state.formControls.email.touched && !this.state.formControls.email.valid &&
                    <div className={"error-message"}> * Email must have a valid format</div>}
                </FormGroup>

                <FormGroup id='password'>
                    <Label for='passwordField'> Password: </Label>
                    <Input type="password" name='password' id='passwordField' placeholder={this.state.formControls.password.placeholder}
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.password.value}
                           touched={this.state.formControls.password.touched? 1 : 0}
                           valid={this.state.formControls.password.valid}
                           required
                    />
                    {this.state.formControls.password.touched && !this.state.formControls.password.valid &&
                    <div className={"error-message"}> * Password must have a valid format</div>}
                </FormGroup>

                    <Row>
                        <Col sm={{size: '4', offset: 5}}>
                            <Button style={buttonStyle1}
                                    type={"submit"} disabled={!this.state.formIsValid} onClick={this.handleRegister}>  Register </Button>
                        </Col>
                    </Row>

                {/*{*/}
                {/*    this.state.errorStatus > 0 &&*/}
                {/*    <APIResponseErrorMessage errorStatus={this.state.errorStatus} error={this.state.error}/>*/}
                {/*}*/}
                {/*<CookieUser ref={this.cookieRef} />*/}
            </div>
        ) ;
    }
}


export default withRouter(RegisterForm);
