import { rest } from 'msw';
export const handlers = [
    rest.get('http://localhost:3000/social-network', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    id: 1,
                    link: '#',
                    icon: 'facebook-icon.png',
                    alt: 'facebook logo icon'
                }
            ])
        );
    }),

    rest.get('http://localhost:3000/navigation-link', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([{ id: 1, title: 'Products', link: '#' }])
        );
    }),

    rest.get('http://localhost:3000/header-info', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                phone: '6666666666',
                'work-hours': 'we are open 24/7'
            })
        );
    }),
    rest.get('http://localhost:3000/features', (req, res, ctx) => {
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
                }
            ])
        );
    })
];
