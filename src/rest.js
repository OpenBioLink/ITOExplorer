
const axios = require('axios');

function get(url){
    return new Promise((resolve) => {
        axios.get(
            url
        ).then(function (response) {
            resolve(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    });
}

exports.get = get;