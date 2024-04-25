import { useQuery } from '@tanstack/react-query';
import React, { useState, type ReactNode } from 'react';
import { getFilms } from '../api';

export default function Films(): ReactNode {
    const [selected, setSelected] = useState<string | undefined>();
    const { data, isError, isLoading } = useQuery({
        queryKey: ['films'],
        queryFn: getFilms,
    });

    if (isLoading) return <div className="p-6">Loading...</div>;

    if (isError) return <div className="p-6">Error</div>;

    return (
        <div className="flex">
            <div
                className="p-6 w-1/3 flex flex-col items-start"
                data-testid="films-list"
            >
                {data?.map((film) => (
                    <button
                        key={film.title}
                        onClick={() => {
                            setSelected(film.episode_id);
                        }}
                        className="py-2 hover:underline"
                    >
                        {film.title}
                    </button>
                ))}
            </div>
            <div className="p-6 w-2/3 border-l-2 border-white">
                {!Boolean(selected) ? (
                    'No film selected'
                ) : (
                    <>
                        <h1 className="text-lg">Opening crawl</h1>
                        <cite>
                            {
                                data?.find(
                                    (film) => film.episode_id === selected,
                                )?.opening_crawl
                            }
                        </cite>
                    </>
                )}
            </div>
        </div>
    );
}
