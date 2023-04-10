import joi from "joi";

export const movieSchema = joi.object({
    name: joi.string().required(),
    image: joi.string().uri().required(),
    synopsis: joi.string().required(),
    imdbgrade: joi.number().min(0).max(10),
    releaseyear: joi.number().min(1800).max(2023).required(),
    plataform: joi.string().required(),
    coments: joi.string().allow(null, ''),
    imdburl: joi.string().uri().required(),
    duration: joi.number().min(80).max(300).required()
})