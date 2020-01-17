const axios = require('axios');
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray');

/* index, show, store, update, destroy. Funções do controller
index   para mostrar uma lista
show    para mostrar apenas um
store   para criar
update  para alterar
destroy para deletar
*/
module.exports = {
    //assinconismo async
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store (request, response) {    
         
        const { github_username, techs, latitude, longitude } = request.body;
        
        let dev = await Dev.findOne({ github_username }); //busca pelo username do dev no db
        
        if(!dev) { //evita repetição de cadastros
            
            // (`${}`) Template Strings
            //await aguarda a resposa da função com a flag async

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);            
        
            const { name = login, avatar_url, bio } = apiResponse.data;                        

            const techsArray = parseStringAsArray(techs)
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
            
            // objeto usando shot Syntax (quando ocorre o mesmo nome da chave e valor, techs não foi o caso)

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });
        };

        return response.json(dev);
    },

    async update(){

    },

    async destroy(){

    },
};

