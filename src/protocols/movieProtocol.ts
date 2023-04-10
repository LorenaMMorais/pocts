export type MovieEntity = {
    id: number,
    name: string,
    image: string,
    synopsis: string,
    imdbgrade: number,
    releaseyear: number,
    plataform: string,
    coments: string,
    imdburl: string,
    duration: number,
    createdAt: Date
  }

export type Movie = Omit<MovieEntity, "id" | "createdAt">