export default function validateSchema(schema) {
    return (req, res, next) => {
        const {error} = schema.validate(req.body, { abortEarly: false });

        if (error) {
            const errors = error.details.map(detail => detail.type);
            console.log(errors);
            for (let i=0; i<errors.length ; i++) {
                if (errors[i] === "any.required") { // If there is a field that was sent empty
                    return res.sendStatus(400);
                } else if (errors[i] === "string.min") { // If the field is shorter than the schema requires
                    return res.sendStatus(400);
                } else if (errors[i] === "string.max") { // If the field is longer than the schema requires
                    return res.sendStatus(400);
                } else if (errors[i] === "string.uri") { // If the image link is not a valid link
                    return res.sendStatus(422);
                } else if (errors[i] === "string.base") { // If the description is not a string
                    return res.sendStatus(400);
                } else if (errors[i] === "string.pattern.base") { // If field received does not match pattern
                    return res.sendStatus(400);
                }
            }
            return res.sendStatus(422); // For a generic error that is not covered
        }

        next();
    }
}