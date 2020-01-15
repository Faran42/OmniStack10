const { Router } = require('express')
const axios = require('axios');
const Dev = require('./models/Dev')

const routes = Router();

//assinconismo async
routes.post('/devs', async (request, response) => {
    try {
    const { github_username, techs } = request.body;

    // (`${}`) Template Strings
    //await aguarda a resposa da função com a flag async
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login, avatar_url, bio } = apiResponse.data;

    //split divide o array no caractere informado
    //trim remove espaços antes e depois
    const techsArray = techs.split(',').map(tech => tech.trim());
    
    // objeto usando shot Syntax (quando ocorre o mesmo nome da chave e valor, techs não foi o caso)
    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray
    });

    return response.json(dev);
    } catch(error) {
        console.log("ERROR", error);
    }
})


module.exports = routes;