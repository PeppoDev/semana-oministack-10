const { Router } = require('express');
const axios = require('axios');
const User = require('./models/User');


routes = Router();


routes.post('/users',async (request, response)=>{
    const {github_username,techs} = request.body;
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    let{name = login, bio ,avatar_url} = apiResponse.data;

    if(!bio){
        bio = "não cadastrado";
    }
    const techsArray = techs.split(',').map(tech=> tech.trim());
    
    const user = await User.create({
        name,
        github_username,
        avatar_url,
        bio,
        techs : techsArray,
    });
    
    return response.json({user});

    

});


module.exports = routes;