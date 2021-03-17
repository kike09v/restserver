const {response, request} = require('express');


const usersGetController =  (req = request, res = response) => {

    const {q, nombre = 'No name', apiKey} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apiKey
    });
}

const usersPostController = (req, res = response) => {

    const {nombre, edad} = req.body;


    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    });
}

const usersPutController = (req, res = response) => {

    const id = req.params.id;


    res.json({
        msg: 'put API - controlador',
        id
    });
}

const usersDeleteController = (req, res = res) => {
    res.json({
        msg: 'delete API -controlador'
    });
}





module.exports = {
    usersGetController,
    usersPutController,
    usersPostController,
    usersDeleteController
}