const Joi = require('joi');
//so no one can send invalid data like in whivh required is
//  there in mongo model through server like hoppscotch (sever cide secuirity)
//for cliend side we use needs validation class through public folder js file
module.exports.listingSchema = Joi.object({
    listing:Joi.object({
        title:Joi.string().required(),
        description:Joi.string().required(),
        image: Joi.object({
            filename: Joi.string().optional(),
            url: Joi.string().optional().allow("")
         }).optional(),
        location:Joi.string().required(),
        country:Joi.string().required(),
        price:Joi.number().required().min(0),
        
        
    }).required()
});

module.exports.reviewSchema=Joi.object({
    review:Joi.object({
        rating:Joi.number().required().min(1).max(5),
        comment:Joi.string().required(),
    }).required()
});

