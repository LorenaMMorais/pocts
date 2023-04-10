import { Router } from "express";
import { getMovies, getMoviesByGrades, postMovie, removeMovieById, updateMovies } from "../controllers/movieController";

const movieRouter = Router();
movieRouter.get('/', getMovies);
movieRouter.get('/:grade', getMoviesByGrades);
movieRouter.post('/', postMovie);
movieRouter.delete('/:id', removeMovieById);
movieRouter.post('/coment', updateMovies);

export default movieRouter;