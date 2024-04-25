import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getFilms } from "../api/films.api";

export default function Films() {
  const [selected, setSelected] = useState<string | null>(null);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["films"],
    queryFn: getFilms,
  });

  if (isLoading) return <div className="p-6">Loading...</div>;

  if (isError) return <div className="p-6">Error</div>;

  return (
    <>
      <ol className="p-6 w-full">
        {data.map((film) => (
          <li
            key={film.title}
            onClick={() => setSelected(film.episode_id)}
            className="hover:underline cursor-pointer"
          >
            {film.title}
          </li>
        ))}
      </ol>
      {selected && (
        <div className="p-6 w-full">
          <h1 className="text-lg">Opening crawl</h1>
          <cite>
            {data.find((film) => film.episode_id === selected)?.opening_crawl}
          </cite>
        </div>
      )}
    </>
  );
}
