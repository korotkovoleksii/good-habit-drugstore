import React from 'react';
import { render, screen } from '@testing-library/react';
import SelectLanguage from './select-language';
describe('SelectLanguage component', () => {
    it('SelectLanguage render', () => {
        render(<SelectLanguage></SelectLanguage>);
        expect(screen.getByText('EN')).toBeInTheDocument();
        expect(screen.getAllByRole('img').length).toEqual(2);
    });
});
