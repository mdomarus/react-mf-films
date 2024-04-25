import { HttpRequestMethod, baseQuery } from '.';
import { type Film } from '../types';

export const filmsURL = 'https://swapi-deno.azurewebsites.net/api/films';

export const getFilms = async (): Promise<Film[] | null> =>
    await baseQuery(HttpRequestMethod.Get, filmsURL);
