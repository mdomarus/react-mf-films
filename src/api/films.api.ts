import { Film } from "../types";

const filmsURL = 'https://swapi-deno.azurewebsites.net/api/films';

export const getFilms = async (): Promise<Film[]> => {
    const response = await fetch(filmsURL);
    return response.json();
}