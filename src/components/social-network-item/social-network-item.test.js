import React from 'react';
import { render, screen } from '@testing-library/react';
import SocialNetworkItem from './social-network-item';

describe('SocialNetworkItem', () => {
    it('SocialNetworkItem render', () => {
        const props = {
            link: '#',
            nameImage: 'facebook-icon.png',
            alt: 'facebook icon'
        };
        render(
            <SocialNetworkItem
                link="#"
                nameImage="facebook-icon.png"
                alt="facebook icon"
            ></SocialNetworkItem>
        );
        expect(screen.getByRole('link')).toBeInTheDocument();
        expect(screen.getByRole('img')).toBeInTheDocument();
    });
});
