import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Benefits from './benefits';
import { server } from '../../mocks/server';
import { rest } from 'msw';

describe('Benefits components', () => {
    it('Benefit render', async () => {
        render(<Benefits></Benefits>);
        await waitFor(() => screen.getAllByRole('img'));
        expect(screen.getAllByRole('img').length == 3);
    });

    it('Benefit component get empty response', () => {
        server.use(rest.get('/benefits'), (req, res, ctx) => {
            return res(ctx.status(200), ctx.json([]));
        });
        render(<Benefits></Benefits>);
        expect(screen.queryByTestId('benefits')).toBeNull();
    });
    it('Benefit get less 2 items', async () => {
        server.use(rest.get('/benefits'), (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json([
                    {
                        id: 1,
                        title: 'Big Choice',
                        description:
                            'Our store offers customers a huge selection of vitamins and dietary supplements. We have products that will help to heal your body and enhance the effect of drugs.',
                        imageName: 'big-choice.svg',
                        alt: 'pills',
                        nameClass: 'benefit-item-blue'
                    }
                ])
            );
        });
        render(<Benefits></Benefits>);

        expect(screen.queryByTestId('benefits')).toBeNull();
    });
    it('Benefit get more that 3 items', async () => {
        server.use(rest.get('/benefits'), (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json([
                    {
                        id: 1,
                        title: 'Big Choice',
                        description:
                            'Our store offers customers a huge selection of vitamins and dietary supplements. We have products that will help to heal your body and enhance the effect of drugs.',
                        imageName: 'big-choice.svg',
                        alt: 'pills',
                        nameClass: 'benefit-item-blue'
                    },
                    {
                        id: 2,
                        title: 'Big Choice',
                        description:
                            'Our store offers customers a huge selection of vitamins and dietary supplements. We have products that will help to heal your body and enhance the effect of drugs.',
                        imageName: 'big-choice.svg',
                        alt: 'pills',
                        nameClass: 'benefit-item-blue'
                    },
                    {
                        id: 3,
                        title: 'Big Choice',
                        description:
                            'Our store offers customers a huge selection of vitamins and dietary supplements. We have products that will help to heal your body and enhance the effect of drugs.',
                        imageName: 'big-choice.svg',
                        alt: 'pills',
                        nameClass: 'benefit-item-blue'
                    },
                    {
                        id: 4,
                        title: 'Big Choice',
                        description:
                            'Our store offers customers a huge selection of vitamins and dietary supplements. We have products that will help to heal your body and enhance the effect of drugs.',
                        imageName: 'big-choice.svg',
                        alt: 'pills',
                        nameClass: 'benefit-item-blue'
                    }
                ])
            );
        });
        render(<Benefits></Benefits>);
        expect(screen.queryByTestId('benefits')).toBeNull;
    });
    it('benefit get empty Response', () => {
        server.use(rest.get('/benefits'), (req, res, ctx) => {
            return res(ctx.status(200), ctx.json([]));
        });
        render(<Benefits></Benefits>);
        expect(screen.queryByTestId('benefits')).toBeNull;
    });
});
