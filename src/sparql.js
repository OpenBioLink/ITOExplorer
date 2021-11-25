
const axios = require('axios');

function runSPARQL(endpoint, query){
    console.log(query)
    return new Promise((resolve) => {
        const params = new URLSearchParams();
        params.append('query', query);
        axios.post(
            endpoint, 
            params,
            {headers: {"Content-type": "application/x-www-form-urlencoded"}}
        ).then(function (response) {
            resolve(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    });
}

exports.runSPARQL = runSPARQL;