import connectionDb from "../configs/database"
import { MovieEntity, Movie } from "../protocols/movieProtocol";  
import { QueryResult } from "pg";

export async function movies(): Promise<QueryResult<MovieEntity>> {
    return await connectionDb.query(
        `SELECT * FROM movies`
    );
}

export async function moviesByGrade(grade: string): Promise<QueryResult<MovieEntity>> {
    
    const value = Number(grade);

    return await connectionDb.query(
        `SELECT * FROM movies WHERE imdbgrade > $1`, 
        [value]
    );
}

export async function insertMovie(body: MovieEntity): Promise<QueryResult<Movie>> {

    const { name, image, synopsis, imdbgrade, releaseyear, plataform, coments, imdburl, duration } = body;

    return await connectionDb.query(
        `INSERT INTO movies ("name", "image", "synopsis", "imdbgrade", "releaseyear", "plataform", "coments", "imdburl", "duration") 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [name, image, synopsis, imdbgrade, releaseyear, plataform, coments, imdburl, duration]
    );
}

export async function deleteMovieById(id: string): Promise<QueryResult<Movie>> {
    
    const value = Number(id);

    return await connectionDb.query(
        `DELETE FROM movies WHERE id = $1`, 
        [value]
    );
}

export async function updateMovie(coment: string, id: number): Promise<QueryResult> {

    return await connectionDb.query(
        `UPDATE movies SET coments = $1 WHERE id = $2`, 
        [coment, id]
    );
}