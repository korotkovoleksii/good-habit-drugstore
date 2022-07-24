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
    })
];
