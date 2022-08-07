// const { response } = require("express");

const url = "https://www.cepaberto.com/api/v3/cep";

fetch(url, {
    method: 'GET',
    headers: {'Authorization': 'Token'}

}).then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})