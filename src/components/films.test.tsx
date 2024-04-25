import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
import { fireEvent, render, screen, waitFor } from '../../test-utils';
import { filmsURL } from '../api';
import Films from './films';

describe('Films', () => {
    const handlers = [
        http.get(filmsURL, () => {
            return HttpResponse.json([
                {
                    title: 'A New Hope',
                    episode_id: 4,
                    opening_crawl: 'It is a period of civil war.',
                },
            ]);
        }),
    ];

    const worker = setupServer(...handlers);

    beforeAll(() => {
        worker.listen();
    });
    afterEach(() => {
        worker.resetHandlers();
    });
    afterAll(() => {
        worker.close();
    });

    it('should render', () => {
        render(<Films />);
    });

    it('should start in the loading state', () => {
        render(<Films />);
        screen.getByText('Loading...');
    });

    it('should render films list', async () => {
        render(<Films />);

        await waitFor(() => {
            screen.getByTestId('films-list');
        });
    });

    it('should render films list items', async () => {
        render(<Films />);

        await waitFor(() => {
            screen.getByText(/A New Hope/);
        });
    });

    it('should render films details on click', async () => {
        render(<Films />);

        await waitFor(async () => {
            fireEvent.click(screen.getByText(/A New Hope/));
            await screen.findByText(/It is a period of civil war./);
        });
    });
});
