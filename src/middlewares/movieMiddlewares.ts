import express, {Request, Response, NextFunction} from "express";
import { movieSchema } from "../schemas/movieSchema";
import {comentSchema} from "../schemas/comentSchema"
export async function movieValidationMiddleware(req: Request, res: Response, next: NextFunction){
    const valid = movieSchema.validate(req.body);
    
    if (valid.error) return res.status(422).send(valid.error.message);

    next();
}

export async function addComentMiddleware(req: Request, res: Response, next: NextFunction){
    const valid = comentSchema.validate(req.body);
    
    if (valid.error) return res.status(422).send(valid.error.message);

    next();
}