import joi from "joi";

export const comentSchema = joi.object({
    id: joi.number().required().min(1),
    coment: joi.string().required()
})