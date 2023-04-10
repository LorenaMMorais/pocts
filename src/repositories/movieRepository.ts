import connectionDb from "../configs/database"

interface Movie {
    name: string;
    image: string;
    synopsis: string;
    imdbgrade: number;
    releaseyear: number;
    plataform: string;
    coments: string[];
    imdburl: string;
    duration: number;
  }
  
export async function movies() {
    return await connectionDb.query(
        `SELECT * FROM movies`
    );
}

export async function moviesByGrade(grade: string) {
    
    const value = Number(grade);

    return await connectionDb.query(
        `SELECT * FROM movies WHERE imdbgrade > $1`, 
        [value]
    );
}

export async function insertMovie(body: Movie) {

    const { name, image, synopsis, imdbgrade, releaseyear, plataform, coments, imdburl, duration } = body;

    return await connectionDb.query(
        `INSERT INTO movies ("name", "image", "synopsis", "imdbgrade", "releaseyear", "plataform", "coments", "imdburl", "duration") 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [name, image, synopsis, imdbgrade, releaseyear, plataform, coments, imdburl, duration]
    );
}

export async function deleteMovieById(id: string) {
    
    const value = Number(id);

    return await connectionDb.query(
        `DELETE FROM movies WHERE id = $1`, 
        [value]
    );
}

export async function updateMovie(coment: string, id: number) {

    return await connectionDb.query(
        `UPDATE movies SET coments = $1 WHERE id = $2`, 
        [coment, id]
    );
}