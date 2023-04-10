import { Router } from "express";
import { getMovies, getMoviesByGrades, postMovie, removeMovieById, updateMovies } from "../controllers/movieController";
import { addComentMiddleware, movieValidationMiddleware } from "../middlewares/movieMiddlewares";

const movieRouter = Router();
movieRouter.get('/', getMovies);
movieRouter.get('/:grade', getMoviesByGrades);
movieRouter.post('/', movieValidationMiddleware, postMovie);
movieRouter.delete('/:id', removeMovieById);
movieRouter.post('/coment', addComentMiddleware, updateMovies);

export default movieRouter;