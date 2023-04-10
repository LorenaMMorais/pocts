import express, { Request, Response } from "express";
import { deleteMovieById, insertMovie, movies, moviesByGrade, updateMovie } from "../repositories/movieRepository"

export async function getMovies(req: Request, res: Response) {

    try{
        const listMovies = await movies();
        
        return res.send(listMovies.rows);

    }catch(error){
        res.sendStatus(500);
    }
    
}

export async function getMoviesByGrades(req: Request, res: Response) {

    const { grade } = req.query as Record<string, string>;

    try{
        const foundMovies = await moviesByGrade(grade);
        return res.send(foundMovies.rows);
    }catch(error){
        res. sendStatus(500);
    }
    
}

export async function postMovie(req: Request, res: Response) {
    
    try{
        const movieAdd = await insertMovie(req.body);
        return res.sendStatus(201);
    }catch(error){
        res.sendStatus(500);
    }
}

export async function removeMovieById(req: Request, res: Response) {
    
    const { id } = req.query as Record<string, string>
    
    try{
        await deleteMovieById(id);
        return res.sendStatus(200);
    }catch(error){
        res.sendStatus(500);
    }
}

export async function updateMovies(req: Request, res: Response) {
    
    const { coment, id } = req.body;

    try{
        await updateMovie(coment, id);
        return res.sendStatus(200);
    }catch(error){
        res.sendStatus(500);
    }
}