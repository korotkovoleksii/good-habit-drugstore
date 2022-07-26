import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import NavigationLinksList from './navigation-links-list';
describe('NavigationLinksList component', () => {
    it('NavigationLinksList render', async () => {
        render(<NavigationLinksList></NavigationLinksList>);

        await waitFor(() => screen.getByRole('link'));
        expect(screen.getByRole('link')).toBeInTheDocument();
    });
});
