import { useState } from 'react'
import NavigationBar from "../navigation-bar";
import './vanzari.css';
import {Card, CardBody} from "reactstrap";

import pozaNoutati3 from "../commons/images/pozaNoutati3.png";

export default function VanzariContainer() {
    return (
        <div>
            <NavigationBar />
            <Card
                onClick={() => {}}
                className="cardVanzari ripple"
            >
                <CardBody className="cardBodyVanzari">
                    <div className="divTextCardDreaptaVanzari">
                        <p className="textCardDreaptaVanzari">Apartament, 120 metri patrati, 3 camere,  baie, bucatarie <br></br><br></br>
                            Strada Plopilor, nr. 23,Cluj-Napoca <br></br><br></br>
                            180.000 $ | inchiriere cu 650$/luna
                        </p>
                    </div>
                    <img
                        alt="Card cap"
                        src={pozaNoutati3}
                        className="imgCardDreaptaVanzari"
                    />
                </CardBody>
            </Card>
        </div>
    );
}