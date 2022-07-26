import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import NavigationLink from './navigation-link';

describe('NavigationLink component', () => {
    it('NavigationLink render', () => {
        render(<NavigationLink title="test" link="#"></NavigationLink>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });

    it('NavigationLink render without data', () => {
        render(<NavigationLink></NavigationLink>);
        expect(screen.queryByRole('link')).toBeNull();
    });
});
