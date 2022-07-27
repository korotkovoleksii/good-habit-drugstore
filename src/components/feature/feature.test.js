import React from 'react';
import { render, screen } from '@testing-library/react';
import Feature from './feature';

describe('Feature component', () => {
    it('Feature render', async () => {
        render(
            <Feature
                title="test"
                description="test description"
                imageName="test.png"
            ></Feature>
        );
        // await waitFor(() => screen.getByRole('img'));

        expect(screen.getByText('test')).toBeInTheDocument();
        expect(screen.getByText('test description')).toBeInTheDocument();
        expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('Feature render without props', () => {
        render(<Feature></Feature>);
        expect(screen.queryByText('test')).toBeNull();
        expect(screen.queryByText('test description')).toBeNull();
        expect(screen.queryByRole('img')).toBeNull();
    });
});
