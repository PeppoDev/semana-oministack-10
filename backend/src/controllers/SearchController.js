const User = require('../models/User');
const parseStringAsArray = require('../utils/parseStringAsArray');


module.exports ={
    async index(request,response){
        const{latitude, longitude,techs}=request.query;

        const  techsArray = parseStringAsArray(techs);
       
        const user = await User.find({
            techs:{
                $in: techsArray,
            },
            locations:{
                $near:{
                    $geometry:{
                        type:"Point",
                        coordinates: [latitude,longitude],
                    },
                    $maxDistance: 10000,    
                }
            }
        })
        return response.json({user})
    },
}