import joi from "joi";

const cakeSchema = joi.object({
    "name": joi.string().min(2).required(),
    "price": joi.number().precision(2).greater(0).required(),
    "image": joi.string().uri().required(),
    "description": joi.string().allow("").required()
});

export default cakeSchema;