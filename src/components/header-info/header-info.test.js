import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HeaderInfo from './header-info';

describe('HeaderInfo component', () => {
    it('HeaderInfo render', async () => {
        render(<HeaderInfo></HeaderInfo>);
        await waitFor(() => screen.getByText('we are open 24/7'));
        expect(screen.getByText('we are open 24/7')).toBeInTheDocument();
    });
});
