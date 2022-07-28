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
    }),
    rest.get('http://localhost:3000/benefits', (req, res, ctx) => {
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
                    title: 'Safety Certifications',
                    description:
                        'All the vitamins have been tested in leading laboratories in the United States. The quality of the presented products is confirmed by certificates. ',
                    imageName: 'safety-certifications.svg',
                    alt: 'document',
                    nameClass: 'benefit-item-green'
                },
                {
                    id: 3,
                    title: 'Leaders of the Market',
                    description:
                        ' Our company has been in the US biologics and supplements market for 23 years. Over 5 million customers from 48 states shop at Good Habit every year.',
                    imageName: 'leaders-of-the-market.svg',
                    alt: 'like',
                    nameClass: 'benefit-item-yellow'
                }
            ])
        );
    })
];
