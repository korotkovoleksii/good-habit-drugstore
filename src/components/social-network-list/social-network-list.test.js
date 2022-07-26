import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import SocialNetworkList from './social-network-list';

describe('SocialNetworkList', () => {
    it('SocialNetworkList render', async () => {
        render(<SocialNetworkList></SocialNetworkList>);
        await waitFor(() => screen.getByRole('link'));
        expect(screen.getByRole('link')).toBeInTheDocument();
    });
});
