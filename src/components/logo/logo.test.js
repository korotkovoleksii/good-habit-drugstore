import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Logo from './logo';

describe('Logo component', () => {
    it('Logo render', () => {
        render(<Logo link="#"></Logo>);
        expect(screen.getByRole('link')).toBeInTheDocument();
        expect(screen.getByRole('img')).toBeInTheDocument();
    });
    it('Logo render without props', () => {
        render(<Logo></Logo>);
        expect(screen.getByRole('link')).toBeInTheDocument();
        expect(screen.getByRole('img')).toBeInTheDocument();
    });
});
