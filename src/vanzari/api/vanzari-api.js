import {HOST} from '../../commons/hosts';
import RestApiClient from "../../commons/api/rest-client";


const endpoint = {
    //home: '/user'
};


function insertVanzari(vanzare, callback){
    let request = new Request(HOST.backend_api  + "/insertVanzari" , {
        method: 'POST',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(vanzare)
    });

    console.log("URL: " + request.url);

    RestApiClient.performRequest(request, callback);
}

function updateVanzari(vanzare, callback){
    let request = new Request(HOST.backend_api  + "/updateVanzari" , {
        method: 'POST',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(vanzare)
    });

    console.log("URL: " + request.url);

    RestApiClient.performRequest(request, callback);
}

function deleteVanzari(vanzare, callback){
    let request = new Request(HOST.backend_api  + "/deleteVanzari" , {
        method: 'POST',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(vanzare)
    });

    console.log("URL: " + request.url);

    RestApiClient.performRequest(request, callback);
}

function getVanzari(callback) {
    let request = new Request(HOST.backend_api + "/getVanzari", {
        method: 'GET',
    });
    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}

export {
    insertVanzari,
    updateVanzari,
    deleteVanzari,
    getVanzari
};
