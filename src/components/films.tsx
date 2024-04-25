import { useQuery } from '@tanstack/react-query';
import React, { useState, type ReactNode } from 'react';
import { getFilms } from '../api';

export default function Films(): ReactNode {
    const [selected, setSelected] = useState<string | null>(null);
    const { data, isError, isLoading } = useQuery({
        queryKey: ['films'],
        queryFn: getFilms,
    });

    if (isLoading) return <div className="p-6">Loading...</div>;

    if (isError) return <div className="p-6">Error</div>;

    return (
        <>
            <ol className="p-6" data-testid="films-list">
                {data?.map((film) => (
                    <li
                        key={film.title}
                        onClick={() => {
                            setSelected(film.episode_id);
                        }}
                        className="hover:underline cursor-pointer"
                    >
                        {film.title}
                    </li>
                ))}
            </ol>
            {Boolean(selected) && (
                <div className="p-6">
                    <h1 className="text-lg">Opening crawl</h1>
                    <cite>
                        {
                            data?.find((film) => film.episode_id === selected)
                                ?.opening_crawl
                        }
                    </cite>
                </div>
            )}
        </>
    );
}
