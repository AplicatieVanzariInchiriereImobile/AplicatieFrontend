import React, {useContext} from 'react';
import Button from "react-bootstrap/Button";
import * as API_VANZARE from "../api/vanzari-api";
//import APIResponseErrorMessage from "../../commons/errorhandling/api-response-error-message";
import {Col, Row} from "reactstrap";
import { FormGroup, Input, Label} from 'reactstrap';
import { withRouter } from "react-router-dom";
import {AppContext} from "../../AppContext";
import {getProgramariForImobil} from "../api/vanzari-api";
import Chart from 'react-apexcharts';


const buttonStyle1 = {backgroundColor: '#751212'};
//const { isLoggedIn, setIsLoggedIn, setIsAdmin } = useContext(AppContext);
class RezervationChartForm extends React.Component {
    constructor(props) {
        super(props);
        this.toggleForm = this.toggleForm.bind(this);
        this.reloadHandler = this.props.reloadHandler;
        this.getRezervations = this.getRezervations.bind(this);

        this.state = {
            data : {
                options: {
                    chart: {
                        id: 'Registrations-Chart'
                    },
                    xaxis: {
                        //zilele din luna
                        categories: []
                    }
                },
                series: [{
                    name: 'Values',
                    //numarul de rezervari in acea zi
                    data: []
                }]
            }
        };

        //aici setam datele
        this.getRezervations(localStorage.getItem("adresaChart"));
    }

    toggleForm() {
        this.getRezervations(localStorage.getItem("adresaChart"));
        this.setState({collapseForm: !this.state.collapseForm});
    }

    changeChart(newData){
        this.setState({
            data: newData
        });
    }

    getRezervations(adresa) {
        //var new_adresa = adresa.replace('%', ' ');
        return API_VANZARE.getProgramariForImobil(adresa, (result, status, error) => {
            console.log(result);
            if (result !== null && (status === 200 || status === 201)) {

                let nbOfReservations = [];
                let days = [];
                let day = 1;
                result.forEach(nbOfRes => {
                    days.push(day);
                    nbOfReservations.push(nbOfRes);
                    day = day + 1;
                });


                const newData = {
                    options: {
                        chart: {
                            id: 'Registrations-Chart'
                        },
                        xaxis: {
                            categories: days
                        }
                    },
                    series: [{
                        name: 'Values',
                        data: nbOfReservations
                    }]
                }

                //this.data = newData;
                this.changeChart(newData);
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

    //si aici render, cu componente noi
    render() {

        return (
            <div style={{backgroundColor: '#496185'}}>
                <Chart options={this.state.data.options} series={this.state.data.series} type="bar" width={"90%"} height={320} />
            </div>
        ) ;
    }
}

export default withRouter(RezervationChartForm);
