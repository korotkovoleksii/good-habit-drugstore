import React from 'react';
import { rest } from 'msw';
import { render, screen, waitFor } from '@testing-library/react';
import FeatureList from './features-list';
import { server } from '../../mocks/server';

describe('FeaturesList component', () => {
    it('FeatureList component render', async () => {
        render(<FeatureList></FeatureList>);
        // await waitFor(() => screen.getAllByRole('img'));
        await waitFor(() => screen.getAllByTestId('feature'));

        expect(screen.getByTestId('feature')).toBeInTheDocument();
    });
    it('featureList 404', async () => {
        server.use(rest.get('/feature'), (req, res, ctx) => {
            return res(ctx.status(404));
        });
        render(<FeatureList></FeatureList>);
        expect(screen.queryByTestId('feature')).toBeNull();
    });
    it('featureList get less 3 items', async () => {
        server.use(rest.get('/feature'), (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json([
                    {
                        id: 1,
                        title: 'Fast & Free Shipping',
                        description: 'On order over $90',
                        imageName: 'fast-and-free-shipping.svg',
                        atl: 'icon of fast and free shipping feature'
                    },
                    {
                        id: 2,
                        title: 'Secure Payments',
                        description: '100% payment protection',
                        imageName: 'secure-payments.svg',
                        atl: 'icon of secure payment feature'
                    }
                ])
            );
        });
        render(<FeatureList></FeatureList>);
        expect(screen.queryByTestId('feature')).toBeNull();
    });
    it('featureList get more that 4 items', async () => {
        server.use(rest.get('/feature'), (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json([
                    {
                        id: 1,
                        title: 'Fast & Free Shipping',
                        description: 'On order over $90',
                        imageName: 'fast-and-free-shipping.svg',
                        atl: 'icon of fast and free shipping feature'
                    },
                    {
                        id: 2,
                        title: 'Secure Payments',
                        description: '100% payment protection',
                        imageName: 'secure-payments.svg',
                        atl: 'icon of secure payment feature'
                    },
                    {
                        id: 3,
                        title: 'Online Support',
                        description: 'Contact us 24 hours a day',
                        imageName: 'online-support.svg',
                        atl: 'icon of online support feature'
                    },
                    {
                        id: 4,
                        title: 'Easy Return',
                        description: 'Simple returns policy',
                        imageName: 'easy-return.svg',
                        atl: 'icon of easy return feature'
                    },
                    {
                        id: 5,
                        title: 'Easy Return',
                        description: 'Simple returns policy',
                        imageName: 'easy-return.svg',
                        atl: 'icon of easy return feature'
                    }
                ])
            );
        });
        render(<FeatureList></FeatureList>);
        expect(screen.queryByTestId('feature')).toBeNull();
    });
    it('empty response', async () => {
        server.use(rest.get('/feature'), (req, res, ctx) => {
            return res(ctx.status(200), ctx.json([]));
        });
        render(<FeatureList></FeatureList>);
        expect(screen.queryByTestId('feature')).toBeNull();
    });
});
